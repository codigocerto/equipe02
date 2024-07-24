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

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  async createProject(createProjectDto: CreateProjectDto) {
    try {
      return await this.projectRepository.save(createProjectDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAllProjects(): Promise<Project[]> {
    try {
      const projects = await this.projectRepository.find();

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

      return await this.projectRepository.update(id, updateProjectDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async deleteProject(id: UUID) {
    try {
      const project = await this.findProjectById(id);

      return await this.projectRepository.delete(project);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
