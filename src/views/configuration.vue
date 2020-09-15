<template>
  <v-row justify="center">
    <v-row justify="center">
      <v-col cols="12" sm="4" >
        <v-card class="left-padding right-padding top-padding" style="padding-bottom: 20px">
          <v-text-field label="Id" placeholder="Id" readonly></v-text-field>
          <v-text-field label="Nome" placeholder="Nome"></v-text-field>
          <v-text-field label="Login" placeholder="Login"></v-text-field>
          <v-text-field label="Senha" placeholder="Senha"></v-text-field>
          <v-text-field
            label="Confirmação de Senha"
            placeholder="Confirmação de Senha"
            type="passoword"
          ></v-text-field>
          <v-row justify="center">
            <v-btn color="primary">Salvar</v-btn>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.top-padding {
  padding-top: 3%;
}

.left-padding {
  padding-left: 3%;
}

.right-padding {
  padding-right: 3%;
}

.card-height {
  height: 80vh;
}

.card-scroll {
  overflow-y: scroll;
}
</style>