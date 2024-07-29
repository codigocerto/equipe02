import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './entities/team.entity';
import { Repository } from 'typeorm';
import { UUID } from 'crypto';
import validator from 'validator';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
    private readonly userService: UsersService,
  ) {}

  async createTeam(createTeamDto: CreateTeamDto) {
    try {
      const lead = await this.userService.getUserById(createTeamDto.leadId);
      createTeamDto.lead = lead;

      createTeamDto.members = [];

      createTeamDto.members = await Promise.all(
        createTeamDto.membersId.map(async (id) => {
          return this.userService.getUserById(id);
        }),
      );

      return await this.teamRepository.save(createTeamDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getAllTeams() {
    try {
      const teams = await this.teamRepository.find({
        // relations: ['lead', 'members'],
      });

      if (teams.length === 0) {
        throw new NotFoundException(`Não há equipes cadastrados...`);
      }

      return teams;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException();
    }
  }

  async getTeamById(id: UUID) {
    try {
      if (!validator.isUUID(id)) {
        throw new BadRequestException('ID inválido.');
      }

      const team = await this.teamRepository.findOne({
        where: { id },
        relations: ['lead', 'members'],
      });

      if (!team) {
        throw new NotFoundException('Time não encontrado...');
      }

      return team;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async updateTeam(id: UUID, updateTeamDto: UpdateTeamDto) {
    try {
      await this.getTeamById(id);

      console.log(updateTeamDto);

      // await this.teamRepository.update(id, updateTeamDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async deleteTeam(id: UUID) {
    try {
      const team = await this.getTeamById(id);

      await this.teamRepository.delete({ id: team.id });
      return { message: 'Time excluído' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
