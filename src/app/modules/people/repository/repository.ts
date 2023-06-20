import { Injectable } from "@nestjs/common";
import { DatabaseService } from "@/services/database";
import { Result } from "@esliph/util";

@Injectable()
export class PeopleRepository {
    constructor(
        private readonly peopleRepository: DatabaseService
    ){}
    
    async create<T extends UserCreateArgs>(args: T) {
        const response: Result<UserCreateResponse> = await this.peopleRepository.people.create(args)
            .then(res =>
                Result.success({ user: res })
            )
            .catch(err =>
                Result.failure({ title: 'Register User', message: [{ message: 'Cannot register User', origin: 'user' }] }, 400)
            )

        return response.getResult()
    }
}