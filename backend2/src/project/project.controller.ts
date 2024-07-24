import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { UUID } from 'crypto';
import { ProjectStatusValidation } from './pipes/project-status-validation.pipe';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body(ProjectStatusValidation) createProjectDto: CreateProjectDto) {
    console.log(createProjectDto.lead);
    return this.projectService.createProject(createProjectDto);
  }

  @Get()
  findAll() {
    return this.projectService.findAllProjects();
  }

  @Get(':id')
  findOne(@Param('id') id: UUID) {
    return this.projectService.findProjectById(id);
  }

  @Patch(':id')
  updateProject(
    @Param('id') id: UUID,
    @Body(ProjectStatusValidation) updateProjectDto: UpdateProjectDto,
  ) {
    return this.projectService.updateProject(id, updateProjectDto);
  }

  @Delete(':id')
  deleteProject(@Param('id') id: UUID) {
    return this.projectService.deleteProject(id);
  }
}
