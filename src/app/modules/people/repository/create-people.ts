import { Result } from '@esliph/util'
import { PrismaService } from '@/repository/database'
import { ICreatePeopleRepository } from '@modules/people/use-case/create-people'
import { PeopleModel, People } from '@modules/people/schema'

export class CreatePeopleRepository implements ICreatePeopleRepository {
    constructor() { } // private readonly repo: PrismaService) { }

    async perform(PeopleData: People) {
        // const response = await this.repo.people.create({ data: PeopleData })
        //     .then(res => Result.success<PeopleModel>(res))
        //     .catch(err => Result.failure<PeopleModel>({ title: 'Register People', message: [{ message: 'Cannot register People', origin: 'people' }] }, 400))

        // return response

        return Result.success<PeopleModel>(PeopleData as PeopleModel)
    }
}
