export enum PeopleGender {
    'M',
    'F'
}
export enum PeopleType {
    'NP',
    'LP'
}
export type PeopleModel = {
    id: number
    email: string
    name: string
    active: boolean
    type: PeopleType
    gender?: PeopleGender
    itin?: string
    cnpj?: string
    birthday?: Date
    createAt: Date
    updateAt: Date
}
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
