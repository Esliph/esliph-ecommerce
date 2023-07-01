import { Injectable } from '@nestjs/common'
import { Result } from '@esliph/util'
import { PrismaClient } from '@prisma/client'
import * as <%= ModuleName %>ModelTypes from './repository.d'

@Injectable()
export class <%= ModuleName %>ModelRepository {
    constructor(
        private readonly repository: PrismaClient
    ) { }

    async create<Args extends <%= ModuleName %>ModelTypes.<%= ModuleName %>CreateArgs>(args: Args) {
         const response: Result<<%= ModuleName %>ModelTypes.<%= ModuleName %>CreateResponse> = await this.repository.<%= moduleName %>.create(args)
            .then(res => Result.success({ <%= moduleName %>: res }))
            .catch(err =>Result.failure({ title: 'Register <%= ModuleName %>', message: [{ message: 'Cannot register <%= moduleName %>', origin: '<%= moduleName %>' }] }, 400))

        return response
    }

    async createMany<Args extends <%= ModuleName %>ModelTypes.<%= ModuleName %>CreateManyArgs>(args: Args) {
         const response: Result<<%= ModuleName %>ModelTypes.<%= ModuleName %>CreateManyResponse> = await this.repository.<%= moduleName %>.createMany(args)
            .then(res => Result.success(res))
            .catch(err =>Result.failure({ title: 'Register <%= ModuleName %>s', message: [{ message: 'Cannot register <%= moduleNames %>', origin: '<%= moduleName %>' }] }, 400))

        return response
    }

    async update<Args extends <%= ModuleName %>ModelTypes.<%= ModuleName %>UpdateArgs>(args: Args) {
        const response: Result<<%= ModuleName %>ModelTypes.<%= ModuleName %>UpdateResponse> = await this.repository.<%= moduleName %>.update(args)
            .then(res => Result.success({ <%= moduleName %>: res }))
            .catch(err => Result.failure({ title: 'Update <%= ModuleName %>', message: [{ message: 'Cannot update <%= moduleName %>', origin: '<%= moduleName %>' }] }, 400))

        return response
    }

    async updateMany<Args extends <%= ModuleName %>ModelTypes.<%= ModuleName %>UpdateManyArgs>(args: Args) {
        const response: Result<<%= ModuleName %>ModelTypes.<%= ModuleName %>UpdateManyResponse> = await this.repository.<%= moduleName %>
            .updateMany(args)
            .then(res => Result.success(res))
            .catch(err => Result.failure({ title: 'Update <%= ModuleName %>s', message: [{ message: 'Cannot update <%= moduleNames %>', origin: '<%= moduleName %>' }] }, 400))

        return response
    }

    async findFirst<Args extends <%= ModuleName %>ModelTypes.<%= ModuleName %>FindFirstArgs>(args: Args) {
        const response: Result<<%= ModuleName %>ModelTypes.<%= ModuleName %>FindFirstResponse<Args>> = await this.repository.<%= ModuleName %>
            .findFirst(args)
            .then(res => {
                if (!res) {
                    return Result.failure({ title: 'Find <%= ModuleName %>', message: [{ message: '<%= ModuleName %> not found', origin: '<%= moduleName %>' }] }, 400)
                }
                return Result.success({ <%= moduleName %>: res })
            })
            .catch(err => Result.failure({ title: 'Find <%= ModuleName %>', message: [{ message: 'Cannot find <%= moduleName %>', origin: '<%= moduleName %>' }] }, 400)) as Result<<%= ModuleName %>ModelTypes.<%= ModuleName %>FindFirstResponse<Args>>

        return response
    }

    async findUnique<Args extends <%= ModuleName %>ModelTypes.<%= ModuleName %>FindUniqueArgs>(args: Args) {
        const response: Result<<%= ModuleName %>ModelTypes.<%= ModuleName %>FindUniqueResponse<Args>> = await this.repository.<%= moduleName %>
            .findFirst(args)
            .then(res => {
                if (!res) {
                    return Result.failure({ title: 'Find <%= ModuleName %>', message: [{ message: '<%= ModuleName %> not found', origin: '<%= moduleName %>' }] }, 400)
                }
                return Result.success({ <%= moduleName %>: res })
            })
            .catch(err => Result.failure({ title: 'Find <%= ModuleName %>', message: [{ message: 'Cannot find <%= moduleName %>', origin: '<%= moduleName %>' }] }, 400)) as Result<<%= ModuleName %>ModelTypes.<%= ModuleName %>FindUniqueResponse<Args>>

        return response
    }

    async findFirstOrThrow<Args extends <%= ModuleName %>ModelTypes.<%= ModuleName %>FindFirstOrThrowArgs>(args: Args) {
        const response: Result<<%= ModuleName %>ModelTypes.<%= ModuleName %>FindFirstOrThrowResponse<Args>> = await this.repository.<%= moduleName %>
            .findFirstOrThrow(args)
            .then(res => Result.success({ user: res }))
            .catch(err => Result.failure({ title: 'Find <%= ModuleName %>', message: [{ message: 'Cannot find <%= moduleName %>', origin: 'user' }] }, 400)) as Result<<%= ModuleName %>ModelTypes.<%= ModuleName %>FindFirstOrThrowResponse<Args>>

        return response
    }

    async findUniqueOrThrow<T extends <%= ModuleName %>ModelTypes.<%= ModuleName %>FindUniqueOrThrowArgs>(args: T) {
        const response: Result<<%= ModuleName %>ModelTypes.<%= ModuleName %>FindUniqueOrThrowResponse<T>> = (await this.repository.<%= moduleName %>
            .findFirstOrThrow(args)
            .then(res => Result.success({ <%= moduleName %>: res }))
            .catch(err => Result.failure({ title: 'Find <%= ModuleName %>', message: [{ message: 'Cannot find <%= moduleName %>', origin: '<%= moduleName %>' }] }, 400))) as Result<<%= ModuleName %>ModelTypes.<%= ModuleName %>FindUniqueOrThrowResponse<T>>

        return response
    }

    async findMany<Args extends <%= ModuleName %>ModelTypes.<%= ModuleName %>FindManyArgs>(args: Args) {
        const response: Result<<%= ModuleName %>ModelTypes.<%= ModuleName %>FindManyResponse<Args>> = await this.repository.<%= moduleName %>.findMany(args)
        .then(res => Result.success({ <%= moduleNames %>: res }))
        .catch(err => Result.failure({ title: 'Find <%= ModuleName %>s', message: [{ message: 'Cannot find <%= moduleNames %>', origin: '<%= moduleName %>' }] }, 400)) as Result<<%= ModuleName %>ModelTypes.<%= ModuleName %>FindManyResponse<Args>>

        return response
    }

    async delete<Args extends <%= ModuleName %>ModelTypes.<%= ModuleName %>DeleteArgs>(args:Args) {
        const response: Result<<%= ModuleName %>ModelTypes.<%= ModuleName %>DeleteResponse> = await this.repository.<%= moduleName %>
            .delete(args)
            .then(res => Result.success(true))
            .catch(err => Result.failure({ title: 'Remove <%= ModuleName %>', message: [{ message: 'Cannot remove <%= moduleName %>', origin: '<%= moduleName %>' }] }, 400))

        return response.getResult()
    }
    
    async deleteMany<Args extends <%= ModuleName %>ModelTypes.<%= ModuleName %>DeleteManyArgs>(args: Args) {
        const response: Result<<%= ModuleName %>ModelTypes.<%= ModuleName %>DeleteManyResponse> = await this.repository.<%= moduleName %>
            .deleteMany(args)
            .then(res => Result.success(res))
            .catch(err => Result.failure({ title: 'Remove <%= ModuleName %>s', message: [{ message: 'Cannot remove <%= moduleNames %>', origin: '<%= moduleName %>' }] }, 400))

        return response.getResult()
    }
}