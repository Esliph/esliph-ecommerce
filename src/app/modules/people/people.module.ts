import { Global, Module } from '@nestjs/common'
import { PeopleUseCaseModule } from '@modules/people/use-case.module'
import { PeopleRepositoryModule } from '@modules/people/repository.module'
import { PeopleController } from '@modules/people/people.controller'

@Global()
@Module({
    imports: [PeopleUseCaseModule, PeopleRepositoryModule],
    controllers: [PeopleController]
})
export class PeopleModule { }
