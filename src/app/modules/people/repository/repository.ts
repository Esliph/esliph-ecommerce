import { Injectable } from '@nestjs/common'
import { Result } from '@esliph/util'
import * as PeopleModelTypes from '@modules/people/repository/repository.d'

@Injectable()
export class PeopleModelRepository {
    constructor() { }
    async create<Args extends PeopleModelTypes.PeopleCreateArgs>(args: Args): Promise<Result<PeopleModelTypes.PeopleCreateResponse>> {
        throw new Error('Method not implemented.')
    }
    createMany<Args, Response>(args: Args): Promise<Result<Response>> {
        throw new Error('Method not implemented.')
    }
    upsert<Args, Response>(args: Args): Promise<Result<Response>> {
        throw new Error('Method not implemented.')
    }
    update<Args, Response>(args: Args): Promise<Result<Response>> {
        throw new Error('Method not implemented.')
    }
    updateMany<Args, Response>(args: Args): Promise<Result<Response>> {
        throw new Error('Method not implemented.')
    }
    findFirst<Args, Response>(args: Args): Promise<Result<Response>> {
        throw new Error('Method not implemented.')
    }
    findUnique<Args, Response>(args: Args): Promise<Result<Response>> {
        throw new Error('Method not implemented.')
    }
    findFirstOrThrow<Args, Response>(args: Args): Promise<Result<Response>> {
        throw new Error('Method not implemented.')
    }
    findUniqueOrThrow<Args, Response>(args: Args): Promise<Result<Response>> {
        throw new Error('Method not implemented.')
    }
    findMany<Args, Response>(args: Args): Promise<Result<Response>> {
        throw new Error('Method not implemented.')
    }
    delete<Args, Response>(args: Args): Promise<Result<Response>> {
        throw new Error('Method not implemented.')
    }
    deleteMany<Args, Response>(args: Args): Promise<Result<Response>> {
        throw new Error('Method not implemented.')
    }
    aggregate<Args, Response>(args: Args): Promise<Result<Response>> {
        throw new Error('Method not implemented.')
    }
    groupBy<Args, Response>(args: Args): Promise<Result<Response>> {
        throw new Error('Method not implemented.')
    }
    count<Args, Response>(args: Args): Promise<Result<Response>> {
        throw new Error('Method not implemented.')
    }

}

/*
async function create<T extends UserCreateArgs>(args: T) {
    const response: Result<UserCreateResponse> = await database.user.create(args)
        .then(res =>
            Result.success({ user: res })
        )
        .catch(err =>
            Result.failure({ title: 'Register User', message: [{ message: 'Cannot register User', origin: 'user' }] }, 400)
        )

    return response.getResult()
}

async function createMany<T extends UserCreateManyArgs>(args: T) {
    const response: Result<UserCreateManyResponse> = await database.user.createMany(args)
        .then(res =>
            Result.success(res)
        )
        .catch(err =>
            Result.failure({ title: 'Register Users', message: [{ message: 'Cannot register Users', origin: 'user' }] }, 400)
        )

    return response.getResult()
}

async function upsert<T extends UserUpsertArgs>(args: T) {
    const response: Result<UserUpsertResponse> = await database.user.upsert(args)
        .then(res =>
            Result.success({ user: res })
        )
        .catch(err =>
            Result.failure({ title: 'Update/Register User', message: [{ message: 'Cannot update/register User', origin: 'user' }] }, 400)
        )

    return response.getResult()
}

async function update<T extends UserUpdateArgs>(args: T) {
    const response: Result<UserUpdateResponse> = await database.user.update(args)
        .then(res =>
            Result.success({ user: res })
        )
        .catch(err =>
            Result.failure({ title: 'Update User', message: [{ message: 'Cannot update User', origin: 'user' }] }, 400)
        )

    return response.getResult()
}

async function updateMany<T extends UserUpdateManyArgs>(args: T) {
    const response: Result<UserUpdateManyResponse> = await database.user.updateMany(args)
        .then(res =>
            Result.success(res)
        )
        .catch(err =>
            Result.failure({ title: 'Update Users', message: [{ message: 'Cannot update Users', origin: 'user' }] }, 400)
        )

    return response.getResult()
}

async function findFirst<T extends UserFindFirstArgs>(args: T) {
    const response: Result<UserFindFirstResponse<T>> = await database.user.findFirst(args)
        .then(res =>
            Result.success({ user: res })
        )
        .catch(err =>
            Result.failure({ title: 'Find User', message: [{ message: 'Cannot find User', origin: 'user' }] }, 400)
        ) as Result<UserFindFirstResponse<T>>

    return response.getResult()
}

async function findUnique<T extends UserFindUniqueArgs>(args: T) {
    const response: Result<UserFindUniqueResponse<T>> = await database.user.findFirst(args)
        .then(res =>
            Result.success({ user: res })
        )
        .catch(err =>
            Result.failure({ title: 'Find User', message: [{ message: 'Cannot find User', origin: 'user' }] }, 400)
        ) as Result<UserFindUniqueResponse<T>>

    return response.getResult()
}

async function findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args: T) {
    const response: Result<UserFindFirstOrThrowResponse<T>> = await database.user.findFirstOrThrow(args)
        .then(res =>
            Result.success({ user: res })
        )
        .catch(err =>
            Result.failure({ title: 'Find User', message: [{ message: 'Cannot find User', origin: 'user' }] }, 400)
        ) as Result<UserFindFirstOrThrowResponse<T>>

    return response.getResult()
}

async function findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: T) {
    const response: Result<UserFindUniqueOrThrowResponse<T>> = await database.user.findFirstOrThrow(args)
        .then(res =>
            Result.success({ user: res })
        )
        .catch(err =>
            Result.failure({ title: 'Find User', message: [{ message: 'Cannot find User', origin: 'user' }] }, 400)
        ) as Result<UserFindUniqueOrThrowResponse<T>>

    return response.getResult()
}

async function findMany<T extends UserFindManyArgs>(args: T) {
    const response: Result<UserFindManyResponse<T>> = await database.user.findMany(args)
        .then(res =>
            Result.success({ users: res })
        )
        .catch(err =>
            Result.failure({ title: 'Find Users', message: [{ message: 'Cannot find Users', origin: 'user' }] }, 400)
        ) as Result<UserFindManyResponse<T>>

    return response.getResult()
}

async function remove<T extends UserDeleteArgs>(args: T) {
    const response: Result<UserDeleteResponse> = await database.user.delete(args)
        .then(res =>
            Result.success(true)
        )
        .catch(err =>
            Result.failure({ title: 'Remove User', message: [{ message: 'Cannot remove User', origin: `user - ${err.code}` }] }, 400)
        )

    return response.getResult()
}

async function removeMany<T extends UserDeleteManyArgs>(args: T) {
    const response: Result<UserDeleteManyResponse> = await database.user.deleteMany(args)
        .then(res =>
            Result.success(res)
        )
        .catch(err =>
            Result.failure({ title: 'Remove Users', message: [{ message: 'Cannot remove Users', origin: 'user' }] }, 400)
        )

    return response.getResult()
}
*/
