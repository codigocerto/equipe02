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

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
    private readonly usersService: UsersService,
    private readonly teamsService: TeamsService,
  ) {}

  async createProject(createProjectDto: CreateProjectDto) {
    try {
      const userLead = await this.usersService.getUserById(
        createProjectDto.leadId,
      );

      const newProject = createProjectDto;
      newProject.lead = userLead;

      newProject.teams = [];
      newProject.teams = await Promise.all(
        newProject.teamsId.map(async (id) => {
          return this.teamsService.getTeamById(id);
        }),
      );
      console.log('TIME', newProject.teams);

      return await this.projectRepository.save(newProject);
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
      await this.findProjectById(id);
      console.log(updateProjectDto.teams);
      // await this.projectRepository.update(id, updateProjectDto);
      return { message: 'Projeto atualizado.' };
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
}
