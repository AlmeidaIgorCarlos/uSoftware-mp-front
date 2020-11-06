<template>
  <v-main>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="#053F5E" dark flat>
              <v-toolbar-title>Formulário de Login</v-toolbar-title>
            </v-toolbar>
            <div class="text-center progress-bar-position">
              <v-progress-circular
                indeterminate
                color="primary"
                v-show="waiting"
                class="progress-bar-position-spinner"
              ></v-progress-circular>
              <v-alert type="success" v-show="success"
                >Autenticação realizada com sucesso!</v-alert
              >
              <v-alert type="error" v-if="error"
                >Não foi possível realizar autenticação</v-alert
              >
            </div>
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
              <v-btn color="#053F5E" class="button-color" @click="signIn"
                >Login</v-btn
              >
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
import { Session } from "../services/session.enum";
import { Errors } from "../services/errors.enum";
import router from "../router";
import { mapActions } from "vuex";

export default {
  data: () => ({
    userService: new UserService(),
    login: undefined,
    password: undefined,
    waiting: false,
    success: false,
    error: false,
  }),
  methods: {
    ...mapActions(["setUserStateAction"]),
    async signIn() {
      try {
        const user = new UserEntity(0, "", this.login, this.password);
        this.waiting = true;
        const resultUser = await this.userService.get(user);
        this.success = true;
        this.setUserStateAction(resultUser);

        sessionStorage.setItem(
          Session.usoftwareUser,
          JSON.stringify(resultUser)
        );
      } catch (error) {
        this.error = true;
        if (error.message != Errors.userNotFound) console.log(error);
      } finally {
        this.waiting = false;
        setTimeout(() => {
          if (this.success) router.push("/main");
          this.success = false;
          this.error = false;
        }, 2500);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.button-color {
  color: white;
}

.progress-bar-position {
  position: absolute;
  top: -100px;
  left: 250px;
  // max-width: 200px;
}

.progress-bar-position-spinner {
  position: relative;
  left: 150px;
}
</style>