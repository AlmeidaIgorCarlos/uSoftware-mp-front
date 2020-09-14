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
    <v-col cols="12" md="12" lg="10">
      <v-card class="left-padding top-padding right-padding card-height card-scroll">
        <v-row justify="center">
          <v-label>Atendimentos Solicitados</v-label>
        </v-row>
        <v-form class="item-order">
          <v-row justify="start">
            <v-col cols="12" sm="6">
              <v-text-field placeholder="Protocolo" label="Protocolo de Atendimento" readonly />
              <v-text-field placeholder="Data de Solicitação" label="Data de Solicitação" readonly />
              <v-text-field placeholder="Nome do cidadão" label="Nome do cidadão" readonly />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field placeholder="RG" label="RG" />
              <v-text-field placeholder="CPF" label="CPF" />
              <v-text-field placeholder="Telefone" label="Telefone" />
            </v-col>
            <v-row justify="end">
              <v-col cols="12" sm="12">
                <v-textarea
                  outlined
                  name="input-7-4"
                  label="Descrição"
                  value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                ></v-textarea>
                <v-btn color="warning">Iniciar Atendimento</v-btn>
              </v-col>
            </v-row>
          </v-row>
        </v-form>
        <v-form class="item-order">
          <v-row justify="start">
            <v-col cols="12" sm="6">
              <v-text-field placeholder="Protocolo" label="Protocolo de Atendimento" readonly />
              <v-text-field placeholder="Data de Solicitação" label="Data de Solicitação" readonly />
              <v-text-field placeholder="Nome do cidadão" label="Nome do cidadão" readonly />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field placeholder="RG" label="RG" />
              <v-text-field placeholder="CPF" label="CPF" />
              <v-text-field placeholder="Telefone" label="Telefone" />
            </v-col>
            <v-row justify="end">
              <v-col cols="12" sm="12">
                <v-textarea
                  outlined
                  name="input-7-4"
                  label="Descrição"
                  value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                ></v-textarea>
                <v-btn color="warning">Iniciar Atendimento</v-btn>
              </v-col>
            </v-row>
          </v-row>
        </v-form>
        <v-form class="item-order">
          <v-row justify="start">
            <v-col cols="12" sm="6">
              <v-text-field placeholder="Protocolo" label="Protocolo de Atendimento" readonly />
              <v-text-field placeholder="Data de Solicitação" label="Data de Solicitação" readonly />
              <v-text-field placeholder="Nome do cidadão" label="Nome do cidadão" readonly />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field placeholder="RG" label="RG" />
              <v-text-field placeholder="CPF" label="CPF" />
              <v-text-field placeholder="Telefone" label="Telefone" />
            </v-col>
            <v-row justify="end">
              <v-col cols="12" sm="12">
                <v-textarea
                  outlined
                  name="input-7-4"
                  label="Descrição"
                  value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                ></v-textarea>
                <v-btn color="warning">Iniciar Atendimento</v-btn>
              </v-col>
            </v-row>
          </v-row>
        </v-form>
      </v-card>
    </v-col>
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

.item-order {
}
</style>