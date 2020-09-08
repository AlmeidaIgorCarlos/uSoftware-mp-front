import axios from "axios"
import Service from './service.interface';
import UserEntity from '@/entities/user.entity';
import { Errors } from './errors.enum';

export default class User implements Service<UserEntity> {
    async get(userEntity: UserEntity): Promise<UserEntity> {
        const axiosResult = await axios.get(`${process.env.VUE_APP_API_URL}/users?login=${userEntity.login}&password=${userEntity.senha}`)
        const users = axiosResult.data

        if (users && users.length) {
            const user: UserEntity = users[0]
            return user
        } else throw new Error(Errors.userNotFound)
    }
    save(userEntity: UserEntity): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
    update(userEntity: UserEntity): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
    delete(userEntity: UserEntity): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
}