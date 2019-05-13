import { error } from "util";
import * as userModel from "../../repositories/user/UserModel";
import UserRepositories from "../../repositories/user/UserRepositories";
Object.freeze( UserRepositories );

const seedData = () => {
  const data = { name: "Divyansh", age: 23, email: "divyansh0777@successive.tech" };

  const result = UserRepositories.count({ email: "divyansh0777@successive.tech" })
// tslint:disable-next-line: no-shadowed-variable
  .then((result) => {
    if (result === 0) {
      console.log(data);
      const res = UserRepositories.create(data);
      console.log("Seeding done");
    } else {
      throw error;
    }
    })
    .catch((err) => {
      console.log(data);
      console.log("Seeding already done");
    });
};

export { seedData };
