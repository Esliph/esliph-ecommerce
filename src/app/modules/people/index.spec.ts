import { expect, describe, it } from 'vitest'
import { Result } from '@esliph/util'
import { PeopleModel, People } from '@modules/people'

class CreatePeopleRepository {}

class CreatePeople {
    constructor(private readonly createPeopleRepository: CreatePeopleRepository) {}

    async perform(userData: People) {
        const now = new Date(Date.now())

        const user: PeopleModel = {
            ...userData,
            id: 1,
            createAt: now,
            updateAt: now,
            birthday: new Date(now.getFullYear() - 18),
            gender: 'M'
        }

        return Result.success<PeopleModel>(user)
    }
}

function createPeopleFabric() {
    const createPeopleRepository = new CreatePeopleRepository()
    const createPeople = new CreatePeople(createPeopleRepository)

    return createPeople
}

describe('People: Create People', () => {
    it('Create Simple People', async () => {
        const createPeople = createPeopleFabric()

        const people: People = {
            active: true,
            name: 'Dan Ruan',
            email: 'dan@gmail.com',
            type: 'NP',
            itin: '100.200.300-45'
        }

        const response = await createPeople.perform(people)

        expect(response.isSuccess()).toBe(true)
        expect(response.getResult().value.name).toBe('Dan Ruan')
        expect(response.getResult().value.id).toBe(1)
        expect(response.getResult().value.itin).toBe('100.200.300-45')
    })
})
