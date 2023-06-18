import { Global, Module, Provider } from '@nestjs/common'
import { CreateUserRepository } from '@modules/user/repository/create-user'

const services: Provider[] = [CreateUserRepository]

@Module({
    providers: [...services],
    exports: [...services]
})
export class UserRepositoryModule { }
