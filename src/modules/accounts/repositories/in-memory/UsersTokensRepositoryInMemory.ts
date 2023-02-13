import { ICreateUsersTokensDTO } from "@modules/accounts/dtos/ICreateUsersTokenDTO";
import { UsersTokens } from "@modules/accounts/infra/typeorm/entities/UsersTokens";

import { IUsersTokensRepository } from "../IUsersTokensRepository";

class UsersTokensRepositoryInMemory implements IUsersTokensRepository {
  private repository: UsersTokens[] = [];

  async create({
    expires_date,
    refresh_token,
    user_id,
  }: ICreateUsersTokensDTO): Promise<UsersTokens> {
    const userToken = new UsersTokens();

    Object.assign(userToken, {
      expires_date,
      refresh_token,
      user_id,
    });

    return userToken;
  }

  async findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string
  ): Promise<UsersTokens> {
    const userToken = this.repository.find(
      (token) =>
        token.user_id === user_id && token.refresh_token === refresh_token
    );

    return userToken;
  }
  async deleteById(id: string): Promise<void> {
    const indexToDelete = this.repository.findIndex(
      (userToken) => userToken.id === id
    );

    this.repository.splice(indexToDelete, 1);
  }
  async findByRefreshToken(refresh_token: string): Promise<UsersTokens> {
    const userToken = this.repository.find(
      (token) => token.refresh_token === refresh_token
    );

    return userToken;
  }
}

export { UsersTokensRepositoryInMemory };
