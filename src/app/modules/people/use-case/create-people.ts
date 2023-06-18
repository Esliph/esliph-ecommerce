import { IsString, IsNotEmpty, IsNumber, IsBoolean, IsDate, IsOptional, IsIn } from 'class-validator'
import { Injectable } from '@nestjs/common'
import { Result } from '@esliph/util'
import { z } from 'zod'
import { ZodService } from '@/util/zod'
import { People, PeopleModel, PeopleGender, PeopleType } from '@modules/people/schema'

export class CreatePeopleDTO {
    @IsString()
    @IsNotEmpty({ message: '"Name" is required' })
    name: string

    @IsString()
    @IsNotEmpty({ message: '"E-mail" is required' })
    email: string

    @IsBoolean()
    @IsNotEmpty()
    active: boolean

    @IsString()
    @IsIn(['NP', 'LP'])
    @IsNotEmpty({ message: '"Type" is required' })
    type: PeopleType

    @IsString()
    @IsOptional()
    @IsIn(['M', 'F'])
    gender?: PeopleGender

    @IsString()
    @IsOptional()
    itin?: string

    @IsString()
    @IsOptional()
    cnpj?: string

    @IsDate()
    @IsOptional()
    birthday?: Date
}

export const CreatePeopleArgsSchema = z
    .object({
        name: z.string().trim().nonempty({ message: '"Name" is required' }),
        email: z.string().trim().email({ message: 'Format "E-mail" invalid' }).nonempty({ message: '"E-mail" is required' }),
        active: z.coerce.boolean().default(false),
        type: z.nativeEnum(PeopleType).refine(val => !!val, { message: '"Type" is required' }),
        gender: z.nativeEnum(PeopleGender).optional(),
        itin: z.string().trim().optional(),
        cnpj: z.string().trim().optional(),
        birthday: z.date().optional()
    })
    .refine(data => {
        return data.itin || data.cnpj
    }, { message: '"ITIN" or "CNPJ" is required', path: ['cnpj', 'itin'] })
    .refine(data => {
        if (data.type == PeopleType.NP) {
            return data.itin
        }
        return true
    }, { message: '"ITIN" is required', path: ['itin'] })
    .refine(data => {
        if (data.type == PeopleType.LP) {
            return data.cnpj
        }
        return true
    }, { message: '"CNPJ" is required', path: ['cnpj'] })

export type CreatePeopleArgs = z.input<typeof CreatePeopleArgsSchema>

export abstract class ICreatePeopleRepository {
    perform: (PeopleData: People) => Promise<Result<PeopleModel>>
}

@Injectable()
export class CreatePeople {
    constructor(
        private readonly createPeopleRepository: ICreatePeopleRepository,
        private readonly zod: ZodService
    ) { }

    async perform(args: CreatePeopleArgs) {
        const peopleDTO = this.zod.perform(args, CreatePeopleArgsSchema)

        if (!peopleDTO.isSuccess()) { return peopleDTO.getResult() }

        const response = await this.createPeopleRepository.perform(peopleDTO.getResponse())

        return response.getResult()
    }
}
