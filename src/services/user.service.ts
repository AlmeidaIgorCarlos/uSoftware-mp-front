import axios from "axios"
import Service from './service.interface';
import UserEntity from '@/entities/user.entity';
import { Errors } from './errors.enum';

//UserService - implements the Service interface whit the generics type of the UserEntity
export default class User implements Service<UserEntity> {

    //Method to get the user from the database, used at the login process
    async get(userEntity: UserEntity): Promise<UserEntity> {
        //Building the axios caller
        const axiosResult = await axios.post(`${process.env.VUE_APP_API_URL}/api/Auth/auth`, {
            login: userEntity.login,
            senha: userEntity.password
        })

        //Result from the api
        const apiResult = axiosResult.data

        //If the authentication was completed or not
        if (apiResult.authenticated) {
            //Bulding and returning the User Entity
            const user: UserEntity = new UserEntity(
                apiResult.userID,
                apiResult.userName,
                apiResult.login,
                '',
                apiResult.accessToken
            )

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
    getAll(token: string): Promise<UserEntity[]> {
        throw new Error('Method not implemented.');
    }
}