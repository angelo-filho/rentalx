import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "@modules/cars/repositories/ISpecificationsRepository";
import { In, Repository } from "typeorm";

import AppDataSource from "@shared/infra/typeorm/data-source";

import { Specification } from "../entities/Specification";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = AppDataSource.getRepository(Specification);
  }

  async create({ description, name }: ICreateSpecificationDTO) {
    const specification = await this.repository.create({ name, description });

    this.repository.save(specification);

    return specification;
  }

  async findByName(name: string) {
    const specification = await this.repository.findOneBy({ name });

    return specification;
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const specifications = await this.repository.findBy({ id: In(ids) });

    return specifications;
  }
}

export { SpecificationsRepository };
