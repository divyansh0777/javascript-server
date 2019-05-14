import { error } from "util";
import * as userModel from "../../repositories/user/UserModel";
import UserRepositories from "../../repositories/user/UserRepositories";
Object.freeze( UserRepositories );

export const seedData = async () => {
  const data = {
    age: 23,
    email: "divyansh01@successive.tech",
    name: "Divyansh Mishra",
    password: "divyansh01",
    role: "trainer",
  };

  const result = UserRepositories.count({ email: "divyansh0777@successive.tech" })
// tslint:disable-next-line: no-shadowed-variable
  .then((result) => {
    if (result === 0) {
      const res = UserRepositories.create(data);
      console.log("Seeding done");
    } else {
        const totalDocs = UserRepositories.totalCount()
        // tslint:disable-next-line: no-shadowed-variable
        .then((totalDocs) => {
          console.log("Total-->", totalDocs);
          console.log("Seeding already done");
        });
    }
}).catch((err) => {
      throw new Error();
    });
};
