<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Unidades</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-file-alert</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Atendimentos Solicitados</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-file-clock</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Meus Atendimentos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-file-chart</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Relatórios</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-account-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Configurações</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
          </v-list-item-action>
          <v-list-item-content>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Sair</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#053F5E" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Ministério Público de São Paulo</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height" fluid>
        <!-- CONTENT -->
      </v-container>
    </v-main>
    <v-footer color="#053F5E" app>
      <span class="white--text">u.Software - Ministério público de São Paulo</span>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
  }),
};
</script>

<style lang="scss" scoped>
</style>