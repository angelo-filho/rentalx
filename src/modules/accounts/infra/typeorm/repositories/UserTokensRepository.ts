import { ICreateUsersTokensDTO } from "@modules/accounts/dtos/ICreateUsersTokenDTO";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { Repository } from "typeorm";

import AppDataSource from "@shared/infra/typeorm/data-source";

import { UsersTokens } from "../entities/UsersTokens";

class UsersTokensRepository implements IUsersTokensRepository {
  private repository: Repository<UsersTokens>;

  constructor() {
    this.repository = AppDataSource.getRepository(UsersTokens);
  }

  async create({
    expires_date,
    refresh_token,
    user_id,
  }: ICreateUsersTokensDTO): Promise<UsersTokens> {
    const userToken = this.repository.create({
      refresh_token,
      user_id,
      expires_date,
    });

    this.repository.save(userToken);

    return userToken;
  }
}

export { UsersTokensRepository };
