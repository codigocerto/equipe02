import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UUID } from 'crypto';
import validator from 'validator';
import { UsersService } from 'src/users/users.service';
import { TeamsService } from 'src/teams/teams.service';
import { AwsService } from 'src/aws/aws.service';
import { ProjectStatus } from './enums/project-status.enum';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
    private readonly usersService: UsersService,
    private readonly teamsService: TeamsService,
    private readonly awsService: AwsService,
  ) {}

  async createProject(createProjectDto: CreateProjectDto, file: any) {
    try {
      console.log(createProjectDto);

      const userLead = await this.usersService.getUserById(
        createProjectDto.leadId,
      );

      createProjectDto.lead = userLead;

      createProjectDto.teams = [];
      createProjectDto.teams = await Promise.all(
        createProjectDto.teamsId.map(async (id) => {
          return this.teamsService.getTeamById(id);
        }),
      );
      const newProject = await this.projectRepository.save(createProjectDto);
      console.log(newProject.id);
      const urlProjectPhoto = await this.awsService.uploadFile(
        file,
        newProject.id,
      );

      newProject.urlPhoto = urlProjectPhoto.url;

      await this.projectRepository.save(newProject);
      return newProject;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAllProjects(): Promise<Project[]> {
    try {
      const projects = await this.projectRepository.find({
        relations: ['lead', 'teams'],
      });

      if (projects.length === 0) {
        throw new NotFoundException(
          'Não foram encontrados projetos registrados...',
        );
      }

      return projects;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findProjectById(id: UUID) {
    try {
      if (!validator.isUUID(id)) {
        throw new BadRequestException('ID inválido.');
      }

      const project = await this.projectRepository.findOne({
        where: { id },
        relations: ['lead', 'teams'],
      });

      if (!project) {
        throw new NotFoundException('Projeto não encontrado...');
      }

      return project;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async updateProject(id: UUID, updateProjectDto: UpdateProjectDto) {
    try {
      const project = await this.findProjectById(id);

      if (updateProjectDto.teamsId) {
        const currentTeams = project.teams || [];

        // Obtenha os novos times a partir dos IDs fornecidos
        const newTeams = await Promise.all(
          updateProjectDto.teamsId.map(async (id) => {
            return this.teamsService.getTeamById(id);
          }),
        );

        // Combine os times existentes com os novos, evitando duplicatas
        const updatedTeams = [...currentTeams, ...newTeams].filter(
          (team, index, self) =>
            index === self.findIndex((t) => t.id === team.id),
        );

        project.teams = updatedTeams;
        const updatedProject = await this.projectRepository.save(project);
        return updatedProject;
      }

      return await this.projectRepository.update(id, updateProjectDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async deleteProject(id: UUID) {
    try {
      const project = await this.findProjectById(id);

      await this.projectRepository.delete({ id: project.id });

      return { message: 'Projeto excluído.' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async uploadPhotoProject(id: UUID, file: any) {
    await this.findProjectById(id);

    const urlProjectPhoto = await this.awsService.uploadFile(file, id);

    const updateProjectDto: UpdateProjectDto = {};

    updateProjectDto.urlPhoto = urlProjectPhoto.url;

    await this.updateProject(id, updateProjectDto);

    return this.findProjectById(id);
  }
}
