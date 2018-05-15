import faker from 'faker'
import _ from 'lodash'

export const fetchVouchers = amount => {
  return _.times(amount, id => {
    return {
      id,
      distributor: faker.company.companyName(),
      price: faker.finance.amount(),
      description: faker.lorem.sentence(),
      logo: 'http://lorempixel.com/200/150/abstract'
    }
  })
}
