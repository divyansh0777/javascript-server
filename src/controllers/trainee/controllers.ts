import { validationResult } from "express-validator/check";

class controller {
  public getRequest(request, response) {
    response.send("This is a Get request inside from trainee Controller")
  }

  public putRequest(request, response){
    response.send("This is a PUT request");
  }

  public deleteRequest(request, response){
    response.send("This is a DELETE request");
  }

  public postDataCheck(request, response, next){
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      return response.status(422).json({errors: errors.array()});
    }
    return response.status(200).json({"data": request.body });
  }

  public postSchemaCheck(request, response, next){
    response.status(200).json(request.body)
  }
}
 export default new controller()
