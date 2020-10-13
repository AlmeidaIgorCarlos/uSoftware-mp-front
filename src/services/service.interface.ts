//Interface that represents all services from the application
export default interface Service<T>{
    get(entity: T, token?: string):Promise<T>
    save(entity: T, token?: string):Promise<T>
    update(entity: T, token?: string):Promise<T>
    delete(entity: T, token?: string):Promise<T>
    getAll(token: string):Promise<T[]>
}