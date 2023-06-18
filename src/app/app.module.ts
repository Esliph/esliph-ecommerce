import { Global, Module } from '@nestjs/common'
import { PeopleModule } from './modules/people/people.module'
import { UserModule } from '@modules/user/user.module'

@Global()
@Module({
    imports: [
        UserModule,
        PeopleModule
    ],
    controllers: [],
    providers: []
})
export class AppModule { }
