import fs from 'fs'
import { faker } from '@faker-js/faker'

const categories = ['Sports', 'Movies', 'Finance']
const channels = ['SMS', 'Email', 'Push Notification']

const fakerCategories = faker.datatype.number({ min: 1, max: categories.length })
const fakerChannels = faker.datatype.number({ min: 1, max: channels.length })

interface User {
  id: string
  name: string
  email: string
  phone: string
  categories: string[]
  channels: string[]
}

const createRandomUser = (): User => (
  {
    id: faker.datatype.uuid(),
    name: faker.internet.userName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    categories: faker.helpers.arrayElements(categories, fakerCategories),
    channels: faker.helpers.arrayElements(channels, fakerChannels)
  }
)

const users = faker.helpers.multiple(createRandomUser, { count: 20 })

fs.createWriteStream('./src/infraestructure/faker/users.json').write(JSON.stringify(users, null, 2))
