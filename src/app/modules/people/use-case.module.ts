import { Global, Module, Provider } from '@nestjs/common'
import { PeopleDependencies } from '@modules/people/dependencies'
import { CreatePeople } from '@modules/people/use-case/create-people'

const services: Provider[] = [...PeopleDependencies, CreatePeople]

@Global()
@Module({
    providers: [...services],
    exports: [...services]
})
export class PeopleUseCaseModule { }
