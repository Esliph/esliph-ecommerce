import { Global, Module, Provider } from '@nestjs/common'
import { UserDependencies } from '@modules/user/dependencies'
import { CreateUser } from '@modules/user/use-case/create-user'

const services: Provider[] = [...UserDependencies, CreateUser]

@Module({
    providers: [...services],
    exports: [...services]
})
export class UserUseCaseModule { }
