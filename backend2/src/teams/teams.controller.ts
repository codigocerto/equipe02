import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { UUID } from 'crypto';
import { TeamStacksValidation } from './pipes/team-stacks-validation.pipe';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  async createTeam(@Body(TeamStacksValidation) createTeamDto: CreateTeamDto) {
    return await this.teamsService.createTeam(createTeamDto);
  }

  @Get()
  async getAllTeams() {
    return await this.teamsService.getAllTeams();
  }

  @Get(':id')
  async getTeamById(@Param('id') id: UUID) {
    return await this.teamsService.getTeamById(id);
  }

  @Patch(':id')
  async updateTeam(
    @Param('id') id: UUID,
    @Body() updateTeamDto: UpdateTeamDto,
  ) {
    return this.teamsService.updateTeam(id, updateTeamDto);
  }

  @Delete(':id')
  async deleteTeam(@Param('id') id: UUID) {
    return this.teamsService.deleteTeam(id);
  }
}
