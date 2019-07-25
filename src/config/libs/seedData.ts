import UserRepositories from "../../repositories/user/UserRepositories";

export const seedData = async () => {

  const data = [
    {
      age: 23,
      email: "divyansh01@successive.tech",
      name: "Divyansh Mishra",
      password: await UserRepositories.encryptPass("divyansh01"),
      role: "trainee"
    },
  ];

  const result = await UserRepositories.count()
  // tslint:disable-next-line: no-shadowed-variable
  .then((result) => {
    if (result === 0) {
        const allDone = UserRepositories.multipleSeeding(data)
        // tslint:disable-next-line: no-shadowed-variable
        .then((allDone) => {
          const totalDocs = UserRepositories.totalCount()
          // tslint:disable-next-line: no-shadowed-variable
          .then((totalDocs) => {
            console.log("Total-->", totalDocs);
            console.log("Seeding Done");
          });
        });
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
