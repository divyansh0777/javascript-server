import * as jwt from "jsonwebtoken";
import { configuration } from "../../config/configuration";
import UserRepositories from "../../repositories/user/UserRepositories";
class UserController {

  public signIn = async (request, response, next) => {
    try {
      const { email, password } = request.body;
      const userFound = await UserRepositories.count({email});

      if ( userFound ) {
        const encryptPass = await UserRepositories.encryptPass(password);
        const compare = await UserRepositories.comparePassword({email, password, encryptPass});
        if ( compare ) {
          const data = await UserRepositories.read({email});
          const token = jwt.sign({ data } , configuration.tokenKey, {
          expiresIn: 86400
          });
          response.send(token);
        }
      }
    } catch (error) {
      next ({ error: {
        error: "Credentials not matched",
        message: "Enter valid email and password",
        status: 403
      }});
    }
  }

/*-------------*/

  public profile = async (request, response, next) => {
    const token = request.header("Authorization");
    if (!token) {
      next({error: {
        error: "Credentials not matched",
        message: "Enter valid email and password",
        status: 403
      }});
    }
    await jwt.verify(token, configuration.tokenKey, (err) => {
      if (!err) {
        const decoded = jwt.decode(token);
        response.send(decoded);
      }
    });
  }

/*-------------*/

  public create = async (request, response, next) => {
    try {

    const { age, email, name, password, role } = request.body;
    const encryptPass =  await UserRepositories.encryptPass(password);
    const data = { age, email, name, password: encryptPass, role };
    const result = await UserRepositories.create(data);
    response.send("User signed Up");

    } catch (error) {
      next({error: {
        error: "User not signed up"
      }});
    }
  }

/*-------------*/

  public updateRole = async (request, response, next) => {
    const { email, role } = request.body;
    const result = await UserRepositories.updateRole({email}, {role});
    response.status(200).json(result);
  }

/*-------------*/

  public async delete(request, response, next) {
    const { email } = request.body;
    const result = await UserRepositories.delete({email});
    response.status(200).json(result);
  }

}

export default new UserController();
