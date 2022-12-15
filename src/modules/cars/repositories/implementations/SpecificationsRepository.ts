import { Repository } from "typeorm";

import AppDataSource from "../../../../database/data-source";
import { Specification } from "../../entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = AppDataSource.getRepository(Specification);
  }

  async create({ description, name }: ICreateSpecificationDTO) {
    const specification = await this.repository.create({ name, description });

    this.repository.save(specification);
  }

  async findByName(name: string) {
    const specification = await this.repository.findOneBy({ name });

    return specification;
  }
}

export { SpecificationsRepository };
