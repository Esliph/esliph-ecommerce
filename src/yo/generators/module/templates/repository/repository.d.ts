import { <%= ModuleName %>Model } from '../schema';
import { Prisma } from '@prisma/client'

type T<%= ModuleName %>GetPayload = boolean | null | undefined | { select?: Prisma.<%= ModuleName %>Select | null }
type <%= ModuleName %>PropSelect<T extends T<%= ModuleName %>GetPayload> = <%= ModuleName %>GetPayload<T>

type <%= ModuleName %>GetPayload<T extends boolean | null | undefined | { select?: Prisma.<%= ModuleName %>Select | null }> = Prisma.<%= ModuleName %>GetPayload<T>
export type <%= ModuleName %>CreateArgs = Prisma.<%= ModuleName %>CreateArgs
export type <%= ModuleName %>CreateResponse = { <%= moduleName %>: <%= ModuleName %>Model }
export type <%= ModuleName %>CreateManyArgs = Prisma.<%= ModuleName %>CreateManyArgs
export type <%= ModuleName %>CreateManyResponse = Prisma.BatchPayload
export type <%= ModuleName %>DeleteArgs = Prisma.<%= ModuleName %>DeleteArgs
export type <%= ModuleName %>DeleteResponse = boolean
export type <%= ModuleName %>DeleteManyArgs = Prisma.<%= ModuleName %>DeleteManyArgs
export type <%= ModuleName %>DeleteManyResponse = Prisma.BatchPayload
export type <%= ModuleName %>UpdateArgs = Prisma.<%= ModuleName %>UpdateArgs
export type <%= ModuleName %>UpdateResponse = { <%= moduleName %>: <%= ModuleName %>Model }
export type <%= ModuleName %>UpdateManyArgs = Prisma.<%= ModuleName %>UpdateManyArgs
export type <%= ModuleName %>UpdateManyResponse = Prisma.BatchPayload
export type <%= ModuleName %>FindFirstArgs = Prisma.<%= ModuleName %>FindFirstArgs
export type <%= ModuleName %>FindFirstResponse<T extends T<%= ModuleName %>GetPayload> = { <%= moduleName %>: <%= ModuleName %>PropSelect<T> | null }
export type <%= ModuleName %>FindFirstOrThrowArgs = Prisma.<%= ModuleName %>FindFirstOrThrowArgs
export type <%= ModuleName %>FindFirstOrThrowResponse<T extends T<%= ModuleName %>GetPayload> = { <%= moduleName %>: <%= ModuleName %>PropSelect<T> }
export type <%= ModuleName %>FindUniqueArgs = Prisma.<%= ModuleName %>FindUniqueArgs
export type <%= ModuleName %>FindUniqueResponse<T extends T<%= ModuleName %>GetPayload> = { <%= moduleName %>: <%= ModuleName %>PropSelect<T> | null }
export type <%= ModuleName %>FindUniqueOrThrowArgs = Prisma.<%= ModuleName %>FindUniqueOrThrowArgs
export type <%= ModuleName %>FindUniqueOrThrowResponse<T extends T<%= ModuleName %>GetPayload> = { <%= moduleName %>: <%= ModuleName %>PropSelect<T> }
export type <%= ModuleName %>FindManyArgs = Prisma.<%= ModuleName %>FindManyArgs
export type <%= ModuleName %>FindManyResponse<T extends T<%= ModuleName %>GetPayload> = { <%= moduleNames %>: <%= ModuleName %>PropSelect<T>[] }
export type <%= ModuleName %>UpsertArgs = Prisma.<%= ModuleName %>UpsertArgs
export type <%= ModuleName %>UpsertResponse = { <%= moduleName %>: <%= ModuleName %>Model }
