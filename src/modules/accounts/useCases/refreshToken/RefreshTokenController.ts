import { Request, Response } from "express";

class RefreshTokenController {
  async handle(request: Request, response: Response) {
    return response.json();
  }
}

export { RefreshTokenController };