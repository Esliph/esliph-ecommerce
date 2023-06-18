import { Global, Module, Provider } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { CONFIG_NEST_MODULE_ROOT } from '@/config/nest'
import { PrismaService } from '@/services/database'
import { ZodService } from '@/util/zod'
import { TasksService } from '@/services/cron-task'
import { AppModule } from '@app.module'

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
