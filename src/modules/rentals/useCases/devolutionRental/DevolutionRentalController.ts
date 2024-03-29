import { Request, Response } from "express";
import { container } from "tsyringe";

import { DevolutionRentalUseCase } from "./DevolutionRentalUseCase";

class DevolutionRentalController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const { id: user_id } = request.user;

    const devolutionRentalUseCase = container.resolve(DevolutionRentalUseCase);

    const rental = await devolutionRentalUseCase.execute({ id, user_id });

    return response.status(200).json(rental);
  }
}

export { DevolutionRentalController };
