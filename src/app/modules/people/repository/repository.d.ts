import { PeopleModel } from '../schema';
import { Prisma } from '@prisma/client'
import { Result } from '@esliph/util'

type TPeopleGetPayload = boolean | null | undefined | { select?: Prisma.PeopleSelect | null }
type PeoplePropSelect<T extends TPeopleGetPayload> = PeopleGetPayload<T>

export type PeopleGetPayload<T extends boolean | null | undefined | { select?: Prisma.PeopleSelect | null }> = Prisma.PeopleGetPayload<T>
export type PeopleCreateArgs = Prisma.PeopleCreateArgs
export type PeopleCreateResponse = { people: PeopleModel }
export type PeopleCreateManyArgs = Prisma.PeopleCreateManyArgs
export type PeopleCreateManyResponse = Prisma.BatchPayload
export type PeopleDeleteArgs = Prisma.PeopleDeleteArgs
export type PeopleDeleteResponse = boolean
export type PeopleDeleteManyArgs = Prisma.PeopleDeleteManyArgs
export type PeopleDeleteManyResponse = Prisma.BatchPayload
export type PeopleUpdateArgs = Prisma.PeopleUpdateArgs
export type PeopleUpdateResponse = { people: PeopleModel }
export type PeopleUpdateManyArgs = Prisma.PeopleUpdateManyArgs
export type PeopleUpdateManyResponse = Prisma.BatchPayload
export type PeopleFindFirstArgs = Prisma.PeopleFindFirstArgs
export type PeopleFindFirstResponse<T extends TPeopleGetPayload> = { people: PeoplePropSelect<T> | null }
export type PeopleFindFirstOrThrowArgs = Prisma.PeopleFindFirstOrThrowArgs
export type PeopleFindFirstOrThrowResponse<T extends TPeopleGetPayload> = { people: PeoplePropSelect<T> }
export type PeopleFindUniqueArgs = Prisma.PeopleFindUniqueArgs
export type PeopleFindUniqueResponse<T extends TPeopleGetPayload> = { people: PeoplePropSelect<T> | null }
export type PeopleFindUniqueOrThrowArgs = Prisma.PeopleFindUniqueOrThrowArgs
export type PeopleFindUniqueOrThrowResponse<T extends TPeopleGetPayload> = { people: PeoplePropSelect<T> }
export type PeopleFindManyArgs = Prisma.PeopleFindManyArgs
export type PeopleFindManyResponse<T extends TPeopleGetPayload> = { peoples: PeoplePropSelect<T>[] }
export type PeopleUpsertArgs = Prisma.PeopleUpsertArgs
export type PeopleUpsertResponse = { people: PeopleModel }
