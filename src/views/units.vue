<template>
  <v-row justify="start">
    <v-col cols="12" md="12" lg="2">
      <v-card>
        <v-row class="padding-top top-padding" justify="center">
          <v-row justify="center">
            <v-label>
              <p>Pesquisa</p>
            </v-label>
          </v-row>
          <v-col cols="12" sm="11">
            <v-form>
              <v-select label="Cidade" :items="units"></v-select>
            </v-form>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12" md="12" lg="6">
      <v-card class="left-padding top-padding right-padding card-height">
        <v-row justify="center">
          <v-label>Dados da Unidade Selecionada</v-label>
        </v-row>
        <v-form>
          <v-row justify="start">
            <v-col cols="12" sm="12">
              <v-text-field placeholder="Exemplo: 01" label="Id" />
              <v-select label="Cidade" :items="units"></v-select>
              <v-text-field placeholder="Exemplo: Pompéia" label="Bairro" />
              <v-text-field placeholder="Exemplo: Rua dos Bandeirantes" label="Rua" />
              <v-text-field placeholder="Exemplo: 1520" label="Número" />
              <v-select label="Horário de Abertura" :items="units"></v-select>
              <v-select label="Horário de Fechamento" :items="units"></v-select>
              <v-row justify="space-evenly">
                <v-btn color="primary">Salvar</v-btn>
                <v-btn color="error" style="margin-left: 10px;">Excluir</v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-col>
    <v-col cols="12" md="12" lg="4">
      <v-card class="left-padding top-padding right-padding card-scroll card-height">
        <v-row justify="center">
          <v-label>Opiniões de Usuários</v-label>
        </v-row>
        <v-form>
          <v-row justify="start">
            <v-col cols="12" sm="12">
              <v-textarea
                outlined
                name="input-7-4"
                label="Igor Carlos Almeida"
                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
              ></v-textarea>
              <v-textarea
                outlined
                name="input-7-4"
                label="Nassif"
                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
              ></v-textarea>
              <v-textarea
                outlined
                name="input-7-4"
                label="Bruno"
                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
              ></v-textarea>
              <v-textarea
                outlined
                name="input-7-4"
                label="Nassif"
                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
              ></v-textarea>
              <v-textarea
                outlined
                name="input-7-4"
                label="Nassif"
                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
              ></v-textarea>
              <v-textarea
                outlined
                name="input-7-4"
                label="Nassif"
                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
              ></v-textarea>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: function () {
    return {
      units: [
        {
          text: "teste",
        },
      ],
    };
  },
};
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

.card-height{
  height: 80vh;
}

.card-scroll{
  overflow-y: scroll;
}
</style>