import { UUID } from 'crypto';

export class CreateUserDto {
  readonly id?: UUID;

  /**
   * O e-mail é necessário apra o login, mas não necessariamente precisa ser o mesmo e-mail da
   * rede social que estiver conectada. Login sem rede social precisa de uma senha.
   * @example email@email.com
   */
  email: string;

  /**
   * É possível conectar com redes sociais sem uma senha, mas para login usando o e-mail diretamente
   * é necessário informar uma senha.
   * @example 123@abc
   */
  readonly password: string;

  constructor(id: UUID, email: string, password: string) {
    this.id = id;
    this.email = email;
    this.password = password;
  }
}
