import { BadRequestException } from '@nestjs/common';
import { UserRoles } from '../enums/user-role.enum';

export class UserRolesValidation {
  readonly rolesArr = [
    UserRoles.LEADER,
    UserRoles.MENTHOR,
    UserRoles.OWNER,
    UserRoles.VOLUNTEER,
  ];

  transform(value: any) {
    const role = value.role;
    if (!this.checkRole(role)) {
      throw new BadRequestException(`${role} não é uma função válida`);
    }

    return value;
  }

  private checkRole(role: any) {
    const index = this.rolesArr.indexOf(role);

    return index !== -1;
  }
}
