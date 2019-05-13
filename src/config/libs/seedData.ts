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
    {
      age: 23,
      email: "anshul02@successive.tech",
      name: "Anshul Shrivastava",
      password: await UserRepositories.encryptPass("anshul02"),
      role: "head-trainer"
    },
    {
      age: 23,
      email: "saksham03@successive.tech",
      name: "Saksham Sijariya",
      password: await UserRepositories.encryptPass("saksham03"),
      role: "trainer"
    },
    {
      age: 23,
      email: "viplav04@successive.tech",
      name: "Viplav Gupta",
      password: await UserRepositories.encryptPass("viplav04"),
      role: "trainer"
    },
    {
      age: 23,
      email: "shashank05@successive.tech",
      name: "Shashank Gupta",
      password: await UserRepositories.encryptPass("shashank05"),
      role: "trainee"
    },
    {
      age: 23,
      email: "sahil06@successive.tech",
      name: "Sahil khan",
      password: await UserRepositories.encryptPass("sahil06"),
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
