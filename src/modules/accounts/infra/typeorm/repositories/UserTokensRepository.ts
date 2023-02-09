import { ICreateUserTokensDTO } from "@modules/accounts/dtos/ICreateUserTokenDTO";
import { IUserTokensRepository } from "@modules/accounts/repositories/IUserTokensRepository";
import { Repository } from "typeorm";

import AppDataSource from "@shared/infra/typeorm/data-source";

import { UserTokens } from "../entities/UserTokens";

class UserTokensRepository implements IUserTokensRepository {
  private repository: Repository<UserTokens>;

  constructor() {
    this.repository = AppDataSource.getRepository(UserTokens);
  }

  async create({
    expires_date,
    refresh_token,
    user_id,
  }: ICreateUserTokensDTO): Promise<UserTokens> {
    const userToken = this.repository.create({
      refresh_token,
      user_id,
      expires_date,
    });

    return userToken;
  }
}

export { UserTokensRepository };
