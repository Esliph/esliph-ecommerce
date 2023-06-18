import { Injectable } from '@nestjs/common'
import { IsString, IsNotEmpty } from 'class-validator'
import { Result } from '@esliph/util'
import { z } from 'zod'
import { ZodService } from '@/util/zod'
import { UserModel } from '@modules/user'

export class CreateUserDTO {
    @IsString()
    @IsNotEmpty({ message: 'Username is "required"' })
    username: string
}

export const CreateUserArgsSchema = z.object({
    username: z.string().nonempty({ message: '"Username" is required' }),
    email: z.string().email({ message: 'Format "e-mail" invalid' }).nonempty({ message: '"E-mail" is required' }),
    age: z.number().min(1, { message: '"Age" min is 1 year' }),
    password: z
        .string()
        .nonempty({ message: '"Password" is required' })
        .min(8, { message: 'The password must have at least 8 characters' })
        .max(50, { message: 'The password must have a maximum of 50 characters' })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#/\\|])[A-Za-z\d@$!%*?&#/\\|]+$/, {
            message: 'The password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
        })
})

export type CreateUserArgs = z.input<typeof CreateUserArgsSchema>

export abstract class ICreateUserRepository {
    perform: (userData: CreateUserArgs) => Promise<Result<UserModel>>
}

@Injectable()
export class CreateUser {
    constructor(private readonly createUserRepository: ICreateUserRepository, private readonly zod: ZodService) { }

    async perform(args: CreateUserArgs) {
        const resArgsDTO = this.zod.perform(args, CreateUserArgsSchema)

        if (!resArgsDTO.isSuccess()) {
            return resArgsDTO
        }

        const user = resArgsDTO.getResponse()

        const responseRepo = await this.createUserRepository.perform(user)

        return responseRepo
    }
}
