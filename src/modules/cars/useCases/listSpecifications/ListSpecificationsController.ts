import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSpecificationsUseCase } from "./ListSpecificationsUsecase";

class ListSpecificationsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listSpecificationsUseCase = container.resolve(
      ListSpecificationsUseCase
    );
    const allSpecifications = await listSpecificationsUseCase.execute();

    return response.json(allSpecifications);
  }
}

export { ListSpecificationsController };
