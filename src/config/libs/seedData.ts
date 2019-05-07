import { error } from "util";
import * as userModel from "../../repositories/user/userModel";
import userRepositories from "../../repositories/user/userRepositories";
Object.freeze( userRepositories );

const seedData = () => {
  const data = { name: "Divyansh", age: 23, email: "divyansh0777@successive.tech" };

  const result = userRepositories.count({ email: "divyansh0777@successive.tech" })
// tslint:disable-next-line: no-shadowed-variable
  .then((result) => {
    if (result === 0) {
      console.log(data);
      const res = userRepositories.create(data);
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
