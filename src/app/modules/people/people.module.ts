import { Module } from '@nestjs/common'
import { PeopleController } from '@modules/people/controller'
import { PeopleUseCaseModule } from '@modules/people/use-case.module'
import { PeopleRepositoryModule } from '@modules/people/repository.module'

@Module({
    imports: [PeopleRepositoryModule, PeopleUseCaseModule],
    controllers: [PeopleController]
})
export class PeopleModule {}
