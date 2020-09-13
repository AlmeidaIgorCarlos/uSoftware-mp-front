export default class User{
    constructor(id: string, name: string, login: string, password = '', accessToken = ''){
        this.id = id
        this.name = name
        this.login = login
        this.password = password
        this.accessToken = accessToken
    }

    id: string
    name: string
    login: string
    password: string
    accessToken: string
}