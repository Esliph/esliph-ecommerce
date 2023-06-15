import { CreateUserRepository } from '@modules/user/repository/create-user'
import { ICreateUserRepository } from '@modules/user/use-case/create-user'
import { Provider } from '@nestjs/common'

export const UserDependencies: Provider[] = [
    {
        provide: ICreateUserRepository,
        useClass: CreateUserRepository
    }
]
