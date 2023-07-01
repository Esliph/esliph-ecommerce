import { Global, Module, Provider } from '@nestjs/common'
import { <%= ModuleName %>Dependencies } from './dependencies'

const services: Provider[] = [...<%= ModuleName %>Dependencies]

@Global()
@Module({
    providers: [...services],
    exports: [...services]
})
export class <%= ModuleName %>UseCaseModule { }
