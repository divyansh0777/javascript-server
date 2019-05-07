export default {
  create: {
    id: {
      errorMessage: "Id is required or you have entered wrong ID",
      in: ["body"],
      isLength: {
        options: {max: 2}
      }
    }
  },

  post: {
    id: {
      errorMessage: "Id not matched with Schema",
      in: ["body"],
      isLength: {
        options: { max: 2,
          min: 2
          }
      }
    },

    email: {
      errorMessage: "Email not matched with Schema",
      in: ["body"],
      isLength: {
        options: { max: 25,
          min: 5
          }
      }
    }
  },

  delete: {
    id: {
      errorMessage: "You have entered wrong ID",
      in: ["body"],
      isLength: {
        options: { max: 2,
          min: 2,
        }
      }
    }
  },

  get: {
    id: {
      errorMessage: "You have entered wrong ID",
      in: ["body"],
      isLength: {
        options: { max: 2,
          min: 2
        }
      }
    }
  }
};
