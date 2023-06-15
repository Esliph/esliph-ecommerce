import { ConfigModule, ConfigModuleOptions } from '@nestjs/config'

export const CONFIG_GLOBAL_MODULE: ConfigModuleOptions = {
    isGlobal: true,
}

export const CONFIG_NEST_MODULE_ROOT = ConfigModule.forRoot(CONFIG_GLOBAL_MODULE)