import { NestFactory } from '@nestjs/core'
import { NestApplicationOptions } from '@nestjs/common/interfaces'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { getEnv } from '@lib/@esliph/util/get-env'
import { MainModule } from '@/main.module'
import { CustomLogger } from '@/util/logger'
import { ValidationPipe } from '@nestjs/common'

const PORT = getEnv({ name: 'PORT', default: 8080 })
const options: NestApplicationOptions = {
    logger: new CustomLogger(),
    abortOnError: false,
    cors: true
}

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(MainModule, new FastifyAdapter(), options)

    app.useGlobalPipes(new ValidationPipe())

    await app.listen(PORT, () => {
        console.log(`[Server:Info] Server running on node environment=${getEnv({ name: 'NODE_ENV' })} port=${PORT}`)
    })
}

bootstrap()
