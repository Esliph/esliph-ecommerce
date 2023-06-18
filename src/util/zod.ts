import { Injectable } from '@nestjs/common'
import { z } from 'zod'
import { Result } from '@esliph/util'

@Injectable()
export class ZodService {

    perform<U extends z.Schema>(data: z.input<U>, schema: U): Result<z.output<U>> {
        try {
            const resParse = schema.parse(data)

            const result = Result.success<z.output<U>>(resParse)

            return result
        } catch (err: any) {
            if (err instanceof z.ZodError) {
                const dataErrors = err.errors.map(_err => {
                    return { message: _err.message, origin: `${_err.path[0]}` }
                })

                return Result.failure<z.output<U>>({ title: 'Formatter data', message: dataErrors }, 400)
            }
            return Result.failure<z.output<U>>({ title: 'Formatter data', message: [{ message: err, origin: 'Format data' }] }, 400)
        }
    }
}
