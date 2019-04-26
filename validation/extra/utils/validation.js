export {default as validateEmail} from './helpers'
import * as constants from '../constants'

export const users = [     
  {
    [constants.TRAINEE_EMAIL]: 'trainee2@successive.tech@.tech', //FALSE
    [constants.REVIEWER_EMAIL]: 'reviewer2@successive.tech',       
  },

  {
    [constants.TRAINEE_EMAIL]: 'trainee3@successsive.tech@.tech', //FALSE
    [constants.REVIEWER_EMAIL]: 'reviewer3@successive.tech',
  },

  {
    [constants.TRAINEE_EMAIL]: 'trainee4@successive.tech',
    [constants.REVIEWER_EMAIL]: 'reviewer4@successive.tech',
  },

  {
    [constants.TRAINEE_EMAIL]: 'trainee5@successive.tech',
    [constants.REVIEWER_EMAIL]: 'reviewer5@successive@successive.tech', //FALSE
  }
]
