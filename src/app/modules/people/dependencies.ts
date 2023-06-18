import { Provider } from '@nestjs/common'
import { ICreatePeopleRepository } from '@modules/people/use-case/create-people'
import { CreatePeopleRepository } from '@modules/people/repository/create-people'

export const PeopleDependencies: Provider[] = [
    {
        provide: ICreatePeopleRepository,
        useClass: CreatePeopleRepository
    }
]
