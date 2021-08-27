export type Env = 'development' | 'production';

export type WebpackPart<O, R> = {
    [key in Env]: () => O;
} & WebpackCommonPart<O, R>; 

type WebpackCommonPart<O, R> = {
    defaultOption: O;
    get(env: Env): R;
}