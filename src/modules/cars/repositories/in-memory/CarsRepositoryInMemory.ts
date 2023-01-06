import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  private repository: Car[] = [];

  async create({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    name,
    license_plate,
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      name,
      license_plate,
    });

    this.repository.push(car);

    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.repository.find((car) => car.license_plate === license_plate);
  }

  async findAvailable(
    brand?: string,
    category_id?: string,
    name?: string
  ): Promise<Car[]> {
    let all = this.repository.filter((car) => car.available === true);

    if (brand) {
      all = this.repository.filter((car) => car.brand === brand);
    }

    if (category_id) {
      all = this.repository.filter((car) => car.category_id === category_id);
    }

    if (name) {
      all = this.repository.filter((car) => car.name === name);
    }

    return all;
  }
}

export { CarsRepositoryInMemory };
