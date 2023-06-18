import { UserModel } from '@modules/user'
import { CreateUserArgs, ICreateUserRepository } from '@modules/user/use-case/create-user'
import { Result } from '@esliph/util'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/services/database'

@Injectable()
export class CreateUserRepository implements ICreateUserRepository {
    constructor(private readonly repo: PrismaService) { }

    async perform(userData: CreateUserArgs): Promise<Result<UserModel>> {
        const response = await this.repo.user
            // @ts-expect-error
            .create({ data: userData })
            .then(res => Result.success<UserModel>(res))
            .catch(err => Result.failure<UserModel>({ title: 'Register User', message: [{ message: 'Cannot register User', origin: 'user' }] }, 400))

        return response
    }
}
