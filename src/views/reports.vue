<template>
    <v-row justify="start">
      <v-col cols="12" sm="12" >
        <v-card class="left-padding right-padding">
          <v-select label="Selecione seu Relatório" :items="units"></v-select>
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