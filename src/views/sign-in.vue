<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="#053F5E" dark flat>
              <v-toolbar-title>Formulário de Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="login"
                  name="login"
                  prepend-icon="mdi-account"
                  type="text"
                  v-model="login"
                ></v-text-field>
                <v-text-field
                  id="password"
                  label="Senha"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  v-model="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#053F5E" class="button-color" @click="signIn">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import UserService from "../services/user.service";
import UserEntity from "../entities/user.entity";
import {Session} from "../services/session.enum"
import {SuccessfulMessages} from "../services/seccessful.enum";
import { Errors } from "../services/errors.enum";
import router from "../router"
import { mapActions } from "vuex"

export default {
  data: () => ({
    userService: new UserService(),
    login: undefined,
    password: undefined,
  }),
  methods: {
    ...mapActions(['setUserStateAction']),
    async signIn() {
      try {
        const user = new UserEntity(0, "", this.login, this.password);
        const resultUser = await this.userService.get(user);
        this.setUserStateAction(resultUser)
        alert(SuccessfulMessages.login)
        sessionStorage.setItem(Session.usoftwareUser, JSON.stringify(resultUser))
        await router.push('/main')
      } catch (error) {
        if (error.message === Errors.userNotFound) alert(error.message);
        else console.log(error)
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.button-color{
  color: white
}
</style>