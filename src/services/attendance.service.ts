import axios from "axios"
import Service from './service.interface';
import UserEntity from '@/entities/user.entity';
import { Errors } from './errors.enum';
import AttendanceEntity from '@/entities/attendance.entity';

//AttendanceService - implements the Service interface whit the generics type of the UserEntity
export default class Attendance implements Service<AttendanceEntity> {
    async get(entity: AttendanceEntity, token?: string): Promise<AttendanceEntity> {
        const axiosResult = await axios.get(`${process.env.VUE_APP_API_URL}/api/Atendimentos/${entity.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        const apiResult = axiosResult.data

        return apiResult
    }

    save(entity: AttendanceEntity): Promise<AttendanceEntity> {
        throw new Error("Method not implemented.");
    }

    async update(entity: AttendanceEntity, token: string): Promise<AttendanceEntity> {
        const attendance: any = await this.get(entity, token)
        attendance.situacoes = entity.situations

        const sessionStorageData = sessionStorage.getItem('usoftware-mp')
        if (sessionStorageData) {
            const parsedData = JSON.parse(sessionStorageData)
            attendance.promotorID = parsedData.id
            attendance.promotorNome = parsedData.name
        }
        else {
            attendance.promotorID = 1
            attendance.promotorNome = 'Primeiro promotor'
        }


        await axios.put(`${process.env.VUE_APP_API_URL}/api/Atendimentos/${entity.id}`, {
            ...attendance

        }, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })

        return entity
    }

    async delete(entity: AttendanceEntity, token?: string): Promise<AttendanceEntity> {
        const attendance: any = await this.get(entity, token)
        attendance.status = "Encerrado"

        await axios.put(`${process.env.VUE_APP_API_URL}/api/Atendimentos/AtualizaStatus/${entity.id}`, {
            ...attendance
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })

        return entity
    }

    async getAll(token: string): Promise<AttendanceEntity[]> {
        const axiosResult = await axios.get(`${process.env.VUE_APP_API_URL}/api/Atendimentos`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        const apiResult = axiosResult.data

        const attendaceEntities = apiResult.map((item: any) => new AttendanceEntity(
            item.id,
            item.dataAgendamento,
            item.cidadaoID,
            item.promotoriaID,
            item.areaAtuacaoId,
            item.promotorID,
            item.protocolo,
            item.status,
            item.etapa,
            item.descricao,
            item.cidadaoNome,
            item.cidadaoCpf,
            item.cidadaoRg,
            item.cidadaoCelular,
            item.promotoriaCidade,
            item.criadoEm,
            item.removidoEm,
            item.situacoes
        ))

        return attendaceEntities
    }
}