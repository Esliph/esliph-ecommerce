import { LoggerService as LoggerS, LogLevel } from '@nestjs/common'
import { getAllFlags, getFlag } from '@esliph/util'

const flagsOptions = getAllFlags()

const logs: { [x in LogLevel]?: true } = {}

if (Object.keys(flagsOptions).length > 0) {
    /* eslint no-unused-expressions: ["off"] */

    if (getFlag('--debug')) {
        if (getFlag('info')) {
            logs['log'] = true
        }
        if (getFlag('error')) {
            logs['error'] = true
        }
        if (getFlag('warn')) {
            logs['warn'] = true
        }
        if (getFlag('debug')) {
            logs['debug'] = true
        }
        if (getFlag('verbose')) {
            logs['verbose'] = true
        }

        if (Object.keys(logs).length == 0) {
            logs['log'] = true
            logs['error'] = true
            logs['warn'] = true
            logs['debug'] = true
            logs['verbose'] = true
        }
    }

    flagsOptions['--debug'] && console.log(`[Server:Options] Start debug=${logs}`)
}

export class LoggerService implements LoggerS {
    log(message: any, ...optionalParams: any[]) {
        console.log(message)
    }

    error(message: any, ...optionalParams: any[]) {
        console.log(message)
    }

    warn(message: any, ...optionalParams: any[]) {
        console.log(message)
    }

    debug?(message: any, ...optionalParams: any[]) {
        console.log(message)
    }

    verbose?(message: any, ...optionalParams: any[]) {
        console.log(message)
    }
}
