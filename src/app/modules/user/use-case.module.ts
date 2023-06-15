import { Global, Module, Provider } from '@nestjs/common'
import { UserDependencies } from '@modules/user/dependencies/create-user'
import { CreateUser } from '@modules/user/use-case/create-user'

const services: Provider[] = [
    CreateUser,
    ...UserDependencies
]

@Global()
@Module({
    providers: [...services],
    exports: [...services]
})
export class UserUseCaseModule { }
