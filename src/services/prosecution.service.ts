import Service from './service.interface'
import axios from 'axios'
import ProsecutionUnit from '../entities/prosecution.entity'
import Comment from '../entities/comment.entity'

export default class Prosecution implements Service<ProsecutionUnit>{
    get(entity: ProsecutionUnit, token?: string): Promise<ProsecutionUnit> {
        throw new Error('Method not implemented.')
    }

    save(entity: ProsecutionUnit, token?: string): Promise<ProsecutionUnit> {
        throw new Error('Method not implemented.')
    }

    async update(entity: ProsecutionUnit, token?: string): Promise<ProsecutionUnit> {
        await axios.put(`${process.env.VUE_APP_API_URL}/api/Promotorias/Promotorias/${entity.id}`, {
            id: entity.id,
            nome: entity.name,
            rua: entity.street,
            numero: entity.number,
            cidade: entity.city,
            bairro: entity.neighborhood,
            faixaAtendimentoID: entity.openingId,
            areaAtuacaoID: entity.actionId
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })

        return entity
    }

    async delete(entity: ProsecutionUnit, token?: string): Promise<ProsecutionUnit> {
        await axios.delete(`${process.env.VUE_APP_API_URL}/api/Promotorias/Promotorias/${entity.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })

        return entity
    }

    async getAll(token: string): Promise<ProsecutionUnit[]> {

        const axiosResult = await axios.get(`${process.env.VUE_APP_API_URL}/api/Promotorias`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        const apiResult = axiosResult.data

        const Prosecutions: ProsecutionUnit[] = apiResult.map((item: any) => {
            console.log(item)
            const comments = Array.isArray(item.opinioes) ?
                item.opinioes.map((opniao: any) => new Comment(opniao.id, opniao.descricao, opniao.criadoEm))
                : []

                console.log(comments)

            return new ProsecutionUnit(
                item.nome,
                item.rua,
                item.numero,
                item.cidade,
                item.bairro,
                item.faixaAtendimentoID,
                item.areaAtuacaoID,
                item.id,
                item.criadoEm,
                item.removidoEm,
                comments
            )
        })

        return Prosecutions
    }
}