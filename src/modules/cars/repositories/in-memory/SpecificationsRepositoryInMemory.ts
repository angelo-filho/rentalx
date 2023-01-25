import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";

import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepositoryInMemory implements ISpecificationsRepository {
  private repository: Specification[] = [];

  async create({
    description,
    name,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = new Specification();

    Object.assign(specification, { description, name });

    this.repository.push(specification);

    return specification;
  }

  async findByName(name: string): Promise<Specification> {
    return this.repository.find((specification) => specification.name === name);
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    return this.repository.filter((specification) =>
      ids.includes(specification.id)
    );
  }
}

export { SpecificationsRepositoryInMemory };
