export default {
  create: {
    id: {
      isLength:{
        options:{max: 2}
      },
      in: ['body'],
      errorMessage: 'Id is required or you have entered wrong ID'
    }
  },

  post: {
    id: {
      isLength: {
        options: { min: 2,
          max: 2 }
      },
      in: ['body'],
      errorMessage: 'You have entered wrong ID'
    },
  },

  delete: {
    id: {
      isLength: {
        options: { min: 2,
          max: 2 }
      },
      in: ['body'],
      errorMessage: 'You have entered wrong ID'
    }
  },

  get: {
    id: {
      isLength: {
        options: { min: 2,
          max: 2 }
      },
      in: ['body'],
      errorMessage: 'You have entered wrong ID'
    }
  },
}
