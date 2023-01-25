import { CarImage } from "@modules/cars/infra/typeorm/entities/CarImage";

import { ICarsImagesRepository } from "../ICarsImagesRepository";

class CarImagesInMemory implements ICarsImagesRepository {
  private repository: CarImage[] = [];

  create(car_id: string, image_name: string): Promise<CarImage> {
    throw new Error("Method not implemented.");
  }
}

export { CarImagesInMemory };
