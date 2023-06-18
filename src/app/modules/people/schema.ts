import { PeopleType, PeopleGender, People as PeopleModelPrisma } from '@prisma/client'

export { PeopleType, PeopleGender }
export type PeopleModel = PeopleModelPrisma
export type People = {
    email: string
    name: string
    active: boolean
    type: PeopleType
    gender?: PeopleGender
    itin?: string
    cnpj?: string
    birthday?: Date
}
