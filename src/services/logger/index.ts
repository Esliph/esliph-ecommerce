import { Injectable, LoggerService } from '@nestjs/common'
import { getAllFlags, getFlag, Console, ConsoleMethod } from '@esliph/util'

const flagsOptions = getAllFlags()

const logs: ConsoleMethod[] = []

if (Object.keys(flagsOptions).length > 0) {
    if (getFlag('--debug') || getFlag('-d')) {
        if (getFlag('log')) {
            logs.push('log')
        }
        if (getFlag('error')) {
            logs.push('error')
        }
        if (getFlag('warn')) {
            logs.push('warn')
        }
        if (getFlag('info')) {
            logs.push('info')
        }

        if (Object.keys(logs).length == 0) {
            logs.push('log')
            logs.push('error')
            logs.push('warn')
            logs.push('info')
        }
    }
}

@Injectable()
export class ConsoleLogger extends Console {
    constructor() {
        super()
    }
}

@Injectable()
export class ConsoleLoggerCore implements LoggerService {
    console = new ConsoleLogger()

    log(message: any, context: any) {
        this.console.log(message, null, { context: `[${context}]` })
    }
    error(message: any, context: any) {
        this.console.error(message, null, { context: `[${context}]` })
    }
    warn(message: any, context: any) {
        this.console.warn(message, null, { context: `[${context}]` })
    }
    debug?(message: any, context: any) {
        this.console.info(message, null, { context: `[${context}]` })
    }
}
