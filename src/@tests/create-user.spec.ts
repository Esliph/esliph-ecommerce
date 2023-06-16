import { Result } from '@esliph/util'
import { expect, describe, it } from 'vitest'
import { z } from 'zod'

interface CreateUserRepository {
    perform: (userData: UserSchema) => Promise<Result<UserSchema>>
}

interface UserSchema {
    username: string
    email: string
    password: string
    age: number
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

    it('Test', () => {
        const CreatePeopleArgsSchema = z
            .object({
                name: z.string().trim().nonempty({ message: '"Name" is required' }),
                email: z.string().trim().email({ message: 'Format "E-mail" invalid' }).nonempty({ message: '"Name" is required' }),
                active: z.coerce.boolean().default(false),
                type: z.enum(['NP', 'LP']),
                gender: z.enum(['M', 'F']).optional(),
                itin: z.string().trim().optional(),
                cnpj: z.string().trim().optional(),
                birthday: z.date().optional()
            })
            .refine(data => {
                return data.itin || data.cnpj
            }, {message: '"ITIN" or "CNPJ" is required', path: ["cnpj", "itin"]})
            .refine(data => {
                if (data.type == 'NP') {
                    return data.itin
                }
                return true
            }, {message: '"ITIN" is required', path: ["itin"]})
            .refine(data => {
                if (data.type == 'LP') {
                    return data.cnpj
                }
                return true
            }, {message: '"CNPJ" is required', path: ["cnpj"]})

        const data: z.input<typeof CreatePeopleArgsSchema> = {
            email: '',
            name: '',
            type: 'LP',
            cnpj: "102"
        }

        const res = CreatePeopleArgsSchema.safeParse(data)

        console.log(res.error)
    })
})