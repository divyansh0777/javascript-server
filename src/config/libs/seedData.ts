import UserRepositories from "../../repositories/user/UserRepositories";

export const seedData = async () => {
  const data = [
    {
      age: 23,
      email: "divyansh01@successive.tech",
      image: "",
      name: "Divyansh Mishra",
      password: await UserRepositories.encryptPass("divyansh01"),
      role: "trainee"
    },
    {
      age: 40,
      email: "sachin@gmail.com",
      image: "",
      name: "Sachin Tendulkar",
      password: await UserRepositories.encryptPass("divyansh02"),
      role: "Batsman",
    },
    {
      age: 40,
      email: "msd@gmail.com",
      image: "",
      name: "Mahendra Singh Dhoni",
      password: await UserRepositories.encryptPass("divyansh03"),
      role: "Wicket Keeper, Former Capt.",
    },
    {
      age: 40,
      email: "guatam@gmail.com",
      image: "",
      name: "Gautam Gambhir",
      password: await UserRepositories.encryptPass("divyansh04"),
      role: "Batsman",
    },
    {
      age: 40,
      email: "yuvi@gmail.com",
      image: "",
      name: "Yuvraj Singh",
      password: await UserRepositories.encryptPass("divyansh05"),
      role: "Batsman",
    },
    {
      age: 40,
      email: "virat@gmail.com",
      image: "",
      name: "Virat Kohli",
      password: await UserRepositories.encryptPass("divyansh06"),
      role: "Batsman",
    }
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
    })
    .catch((err) => {
      throw new Error();
    });
};
