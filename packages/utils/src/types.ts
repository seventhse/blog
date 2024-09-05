export type Fn<P extends any[] = any[], R = any> = (...args: P) => R

export type Data<T = any, K extends string = string> = Record<K, T>

export type Arrayable<T> = T | T[]
