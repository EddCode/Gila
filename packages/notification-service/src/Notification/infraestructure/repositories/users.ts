import { readFile } from 'fs/promises'

interface UserModel {
  id: string
  name: string
  email: string
  phone: string
  categories: string[]
  channels: string[]
}

export class User {
  private users: UserModel[] | undefined

  private async readUsers (): Promise<void> {
    const users = await readFile('./src/infraestructure/faker/users.json', 'utf-8')
    this.users = JSON.parse(users)
  }

  public async userByCategory (category: string): Promise<UserModel[] | undefined> {
    await this.readUsers()
    return this.users?.filter((user: UserModel) => user.categories.includes(category))
  }
}
