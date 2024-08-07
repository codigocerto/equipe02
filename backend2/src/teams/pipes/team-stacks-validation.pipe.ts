import { BadRequestException } from '@nestjs/common';
import { TeamStack } from '../enum/team-stack.enum';

export class TeamStacksValidation {
  readonly stacksArr = [
    TeamStack.BACKEND,
    TeamStack.FRONTEND,
    TeamStack.QA,
    TeamStack.UX,
    TeamStack.DEVOPS,
    TeamStack.SCRUM_MASTER,
    TeamStack.MOBILE,
  ];

  transform(value: any) {
    const stack = value.team_stack;
    if (!this.checkStack(stack)) {
      throw new BadRequestException(`${stack} não é uma função válida`);
    }

    return value;
  }

  private checkStack(role: any) {
    const index = this.stacksArr.indexOf(role);

    return index !== -1;
  }
}
