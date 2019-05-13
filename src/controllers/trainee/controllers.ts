import { validationResult } from "express-validator/check";

class Controller {
  public getTrainee(request, response) {
    response.send("You are inside Trainee Controller");
  }

  public postRequest(request, response) {
    response.send("You are inside Trainee Controller Post Router");
  }

  public putRequest(request, response) {
    response.send("This is a PUT request inside from trainee Controller");
  }

  public deleteRequest(request, response) {
    response.send("This is a DELETE request inside from trainee Controller");
  }

  public postCheck(request, response) {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      return response.status(422).json({errors: errors.array()});
    }
    return response.status(200).json({data: request.body });
  }
}

export default new Controller();
