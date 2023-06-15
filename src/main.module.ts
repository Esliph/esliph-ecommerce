import { CONFIG_NEST_MODULE_ROOT } from '@config/nest'
import { Global, Module, Provider } from '@nestjs/common'
import { ZodService } from '@/util/zod'
import { HttpModule } from '@nestjs/axios'
import { AppModule } from '@app.module'
import { TasksService } from '@/services/cron-task'
import { PrismaService } from '@/repository/database'

const services: Provider[] = [
    ZodService,
    TasksService,
    PrismaService
]

@Global()
@Module({
    imports: [
        AppModule,
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 5
        }),
        CONFIG_NEST_MODULE_ROOT
    ],
    controllers: [],
    providers: [...services],
    exports: [...services]
})
export class MainModule { }
