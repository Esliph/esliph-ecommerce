import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common'
import { Prisma, PrismaClient, UnwrapTuple } from '@prisma/client'
import { getFlag } from '@esliph/util'

const logs: ('query' | 'info' | 'warn' | 'error')[] = []

if (getFlag('--debug')) {
    /* eslint no-unused-expressions: ["off"] */
    getFlag('query') && logs.push('query')
    getFlag('info') && logs.push('info')
    getFlag('warn') && logs.push('warn')
    getFlag('error') && logs.push('error')

    logs.length == 0 && logs.push('query', 'info', 'warn', 'error')
}

export abstract class DatabaseService extends PrismaClient implements OnModuleInit {
    abstract onModuleInit(): any
}

export abstract class ModelRepository implements Prisma.PeopleDelegate<false> {
    
}

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, DatabaseService {
    constructor() {
        super({ log: logs })
    }

    async onModuleInit() {
        try {
            await this.$connect()

            getFlag('info') && console.log('[Database] Database connected successfully')
        } catch (err: Prisma.PrismaClientKnownRequestError | any) {
            getFlag('error') && console.error('[Database] Database connection failed')
            throw new Error(err)
        }
    }

    async enableShutdownHooks(app: INestApplication) {
        this.$on('beforeExit', async () => {
            await app.close()
        })
    }
}