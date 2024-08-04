import { ApiProperty } from '@nestjs/swagger';
import { UUID } from 'crypto';

export class AuthPayloadDto{

    @ApiProperty({
        example: 'email@email.com',
        description: 'Email que será utilizado para login pelo usuário',
      })
      readonly email: string;
      @ApiProperty({
        example: 'Senha@123',
        description: 'Senha utilizada para login na plataforma',
      })
      readonly password: string;    
}