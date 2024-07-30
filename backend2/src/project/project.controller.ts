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
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { UUID } from 'crypto';
import { ProjectStatusValidation } from './pipes/project-status-validation.pipe';
import { Project } from './entities/project.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { AwsService } from 'src/aws/aws.service';

@Controller('project')
export class ProjectController {
  constructor(
    private readonly projectService: ProjectService,

    private awsService: AwsService,
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  @UseInterceptors(FileInterceptor('file'))
  create(
    @Body(ProjectStatusValidation)
    createProjectDto: CreateProjectDto,

    @UploadedFile() file,
  ) {
    return this.projectService.createProject(createProjectDto, file);
  }

  @Get()
  async findAll(): Promise<Project[]> {
    return await this.projectService.findAllProjects();
  }

  @Get(':id')
  async findOne(@Param('id') id: UUID): Promise<Project> {
    return await this.projectService.findProjectById(id);
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

  @Post('/:id/upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file, @Param('id') id: UUID) {
    await this.projectService.findProjectById(id);

    const urlProjectPhoto = await this.awsService.uploadFile(file, id);

    const updateProjectDto: UpdateProjectDto = {};

    updateProjectDto.urlPhoto = urlProjectPhoto.url;

    await this.projectService.updateProject(id, updateProjectDto);

    return this.projectService.findProjectById(id);
  }
}
