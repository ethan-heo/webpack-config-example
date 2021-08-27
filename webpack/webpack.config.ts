import { Env } from './types';
import dev from './webpack.development'
import prod from './webpack.production'

export default (argv: Record<string, any>) => {
    const envs: Env[] = ['development', 'production'];
    const env = envs.find(env => env in argv);

    switch (env) {
        case 'development':
            return dev()
        case 'production':
            return prod()
        default:
            throw new Error(`${env}는 정의되지 않은 환경변수입니다.`)
    }
}