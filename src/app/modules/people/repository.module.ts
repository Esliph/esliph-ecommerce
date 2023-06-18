import { Global, Module, Provider } from '@nestjs/common'
import { PeopleDependencies } from '@modules/people/dependencies'

const services: Provider[] = [...PeopleDependencies]

@Global()
@Module({
    providers: [...services],
    exports: [...services]
})
export class PeopleRepositoryModule { }
