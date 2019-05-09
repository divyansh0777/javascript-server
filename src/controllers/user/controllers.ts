import * as jwt from "jsonwebtoken";
import { configure } from "../../config/configuration";
import userRepositories from "../../repositories/user/userRepositories";

class UserController {

  public signIn = async (request, response, next) => {

    const { email, password } = request.body;
    const userFound = await userRepositories.count({ email, password });

    if (!userFound) {
      next({error: {
        error: "Credentials not matched",
        message: "Enter valid email and password",
        status: 403
      }});
    }

    const data = await userRepositories.getData({email});
    const token = jwt.sign({ data } , configure.tokenKey, {
      expiresIn: 86400
    });
    response.send(token);
  }

  public profile = async (request, response, next) => {

    const token = request.header("Authorization");

    if (!token) {
      next({error: {
        error: "Credentials not matched",
        message: "Enter valid email and password",
        status: 403
      }});
    }

    await jwt.verify(token, configure.tokenKey, (err) => {
      if (!err) {
        const decoded = jwt.decode(token);
        response.send(decoded);
      }
    });

  }
}

export default new UserController();
