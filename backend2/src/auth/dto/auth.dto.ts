import { ApiProperty } from '@nestjs/swagger';
import { UUID } from 'crypto';

export class AuthPayloadDto{
  @ApiProperty({
    example: '',
    description:
      'ID não obrigatório para a criação do usuário, será gerado automaticamente pelo banco de dados.',
  })
  readonly id?: UUID;
    @ApiProperty({
        example: 'email@email.com',
        description: 'Email que será utilizado para login pelo usuário',
      })
      readonly email: string;
      @ApiProperty({
        example: 'Senha@123',
        description: 'Senha utilizada para login na plataforma',
      })
      password: string;    
}