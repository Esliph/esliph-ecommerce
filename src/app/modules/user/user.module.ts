import { Global, Module } from '@nestjs/common'
import { UserController } from '@modules/user/user.controller'
import { UserUseCaseModule } from '@modules/user/use-case.module'
import { UserRepositoryModule } from '@modules/user/repository.module'

@Global()
@Module({
    imports: [
        UserRepositoryModule,
        UserUseCaseModule
    ],
    controllers: [UserController]
})
export class UserModule { }
