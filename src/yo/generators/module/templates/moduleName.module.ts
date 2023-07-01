import { Module, Global } from "@nestjs/common";
import { <%= ModuleName %>UseCaseModule } from "./use-case.module";
import { <%= ModuleName %>RepositoryModule } from "./repository.module";
import { <%= ModuleName %>Controller } from "./<%= moduleName %>.controller";

@Global()
@Module({
  imports: [<%= ModuleName %>UseCaseModule, <%= ModuleName %>RepositoryModule],
  controllers: [<%= ModuleName %>Controller],
})
export class <%= ModuleName %>Module {}
