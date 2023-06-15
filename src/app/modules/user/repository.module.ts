import { Global, Module, Provider } from '@nestjs/common'
import { CreateUserRepository } from '@modules/user/repository/create-user'
import { UserDependencies } from '@modules/user/dependencies/create-user'

const services: Provider[] = [CreateUserRepository, ...UserDependencies]

@Global()
@Module({
    providers: [...services],
    exports: [...services]
})
export class UserRepositoryModule { }
