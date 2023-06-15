import { Module } from '@nestjs/common'
import { UserController } from '@modules/user/controller'
import { UserUseCaseModule } from '@modules/user/use-case.module'
import { UserRepositoryModule } from '@modules/user/repository.module'

@Module({
    imports: [
        UserRepositoryModule,
        UserUseCaseModule
    ],
    controllers: [UserController],
})
export class UserModule { }
