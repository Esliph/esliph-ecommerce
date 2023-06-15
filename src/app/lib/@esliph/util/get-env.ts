import { getEnv as env, getFlag } from '@esliph/util'

const VARS: { [x in string]: string } = {
    'NODE_ENV': getFlag('--env'),
    'PORT': getFlag('--port'),
}

export function getEnv<T>(args: { name: string, default?: T, forceDefault?: boolean, production?: boolean }) {
    return VARS[args.name] || env(args)
}