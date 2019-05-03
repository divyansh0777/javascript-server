export default {
  create: {
    id: {
      required: true,
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
      required: true,
      errorMessage: 'Id is required',
      in: ['params']
    }
  },

  get: {
    skip: {
      required: false,
      default: 0,
      number: true,
      in: ['query'],
      errorMessage: 'Skip is invalid',
    },

    limit: {
      required: false,
      default: 10,
      number: true,
      in: ['query'],
      errorMessage: 'Limit is invalid',
    }
  }
}
