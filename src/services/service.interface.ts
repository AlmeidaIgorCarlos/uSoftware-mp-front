//Interface that represents all services from the application
export default interface Service<T>{
    get(entity: T):Promise<T>
    save(entity: T):Promise<T>
    update(entity: T):Promise<T>
    delete(entity: T):Promise<T>
}