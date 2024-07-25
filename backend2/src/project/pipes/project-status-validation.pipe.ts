import { BadRequestException } from '@nestjs/common';
import { ProjectStatus } from '../enums/project-status.enum';

export class ProjectStatusValidation {
  readonly statusArr = [
    ProjectStatus.FINISHED,
    ProjectStatus.ONGOING,
    ProjectStatus.PENDING,
  ];

  transform(value: any) {
    const status = value.status;
    if (!this.checkStatus(status)) {
      throw new BadRequestException(`${status} não é um status válido`);
    }

    return value;
  }

  private checkStatus(status: any) {
    const index = this.statusArr.indexOf(status);

    return index !== -1;
  }
}
