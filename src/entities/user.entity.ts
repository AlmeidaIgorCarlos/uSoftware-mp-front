export default class User{
    constructor(id: string, nome: string, login: string, senha: string){
        this.id = id
        this.nome = nome
        this.login = login
        this.senha = senha
    }

    id: string
    nome: string
    login: string
    senha: string
}