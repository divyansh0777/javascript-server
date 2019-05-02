export default {
  create: {
    id: {
      required: true,

      in:['body'],
      errorMessage: 'Id is required or you have entered wrong ID'
    },

    name: {
      required: true,
      regex: '',
      in: ['body'],
      errorMessage: 'Name is required or you have entered wrong name',
    }
  },

  post: {
    id: {
      optional: false,
      in:['body'],
      errorMessage: 'Id is required or you have entered wrong ID'
    },

    email: {
      regex: (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/),
      in: ['body'],
      errorMessage: 'Name is required or you have entered wrong name',
    }
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
