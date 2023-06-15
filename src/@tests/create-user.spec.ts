import { Result } from '@esliph/util'
import { expect, describe, it } from 'vitest'

interface CreateUserRepository {
    perform: (userData: UserSchema) => Promise<Result<UserSchema>>
}

interface UserSchema {
    username: string;
    email: string;
    password: string;
    age: number;
}

class CreateUserRepositoryMock implements CreateUserRepository {
    async perform(userData: UserSchema) {
        return Result.success<UserSchema>(userData)
    }
}

class CreateUser {
    constructor(
        private readonly createUserRepository: CreateUserRepository,
        public user?: UserSchema
    ) { }

    async perform({ age, email, password, username }: UserSchema): Promise<Result<UserSchema>> {
        this.user = { age, email, password, username }

        const responseRepo = await this.createUserRepository.perform(this.user)

        return responseRepo
    }
}

function factoryCreateUser() {
    const createUserRepository = new CreateUserRepositoryMock()
    const createUser = new CreateUser(createUserRepository)

    return createUser
}

describe('User: Create User', () => {
    it('Create User', async () => {
        const data = {
            username: 'Dan',
            email: 'dan@examplo.com',
            password: '123',
            age: 18
        }
        const createUser = factoryCreateUser()

        const responseCreate = await createUser.perform(data)

        expect(responseCreate.isSuccess()).toBe(true)
        expect(responseCreate.getResponse()).not.equal(undefined)
        expect(responseCreate.getStatus()).toBe(200)
    })
})