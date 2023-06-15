import { UserModule } from '@modules/user/user.module'
import { Global, Module } from '@nestjs/common'

@Global()
@Module({
    imports: [UserModule],
    controllers: [],
    providers: []
})
export class AppModule {}
