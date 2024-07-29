import { Module } from '@nestjs/common';

import { ProjectModule } from './project/project.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigModule } from './configs/typeOrmConfig.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { TeamsModule } from './teams/teams.module';
import { Project } from './project/entities/project.entity';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProjectModule,
    // TypeOrmConfigModule,
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      autoLoadEntities: true,
      entities: [Project, User],
      synchronize: true,
    }),
    UsersModule,
    TeamsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
