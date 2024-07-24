import { BadRequestException } from '@nestjs/common';
import { UserRoles } from '../enums/user-role.enum';

export class UserRolesValidation {
  readonly statusArr = [UserRoles.ADMIN, UserRoles.COMMON, UserRoles.GUEST];

  transform(value: any) {
    const status = value.role;
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
