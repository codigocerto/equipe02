import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { UsersModule } from 'src/users/users.module';
import { User } from 'src/users/entities/user.entity';
import { TeamsModule } from 'src/teams/teams.module';
import { AwsModule } from 'src/aws/aws.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([Project, User]),
    UsersModule,
    TeamsModule,
    AwsModule,
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
