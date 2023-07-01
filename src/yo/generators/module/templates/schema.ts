import { <%= ModuleName %>Model as <%= ModuleName %>ModelPrisma } from '@prisma/client'

// this export serves to export types/enuns and within other types that are attributes of the type "<%= ModuleName %>"
export {  }
export type <%= ModuleName %>Model = <%= ModuleName %>ModelPrisma
export type <%= ModuleName %> = {
    /* "<%= ModuleName %>" attributes */
}
