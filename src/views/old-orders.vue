<template>
  <v-row justify="start">
    <v-col cols="12" md="12" lg="8">
      <v-card >
        <v-row v-if="selectedAttendance" class="left-padding top-padding" justify="start">
          <v-col cols="12" sm="6">
            <v-text-field placeholder="Protocolo" label="Protocolo de Atendimento" :value="selectedAttendance.protocol" readonly />
          </v-col>
          <v-col cols="11" sm="11">
            <v-textarea
              outlined
              name="input-7-4"
              label="Tratativa"
              v-model="newComment"
              readonly
            ></v-textarea>
            <v-row justify="space-around">
            <v-btn color="primary">Salvar</v-btn>
            <v-btn color="error">Encerrar Atendimento</v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12" md="12" lg="4">
      <v-card class="left-padding top-padding right-padding card-height card-scroll">
        <v-row justify="center">
          <v-label>Atendimentos Solicitados</v-label>
        </v-row>
        <v-form class="item-order" v-for="attendance in attendances" :key="attendance.id">
          <v-row justify="start">
            <v-col cols="12" sm="6">
              <v-text-field placeholder="Protocolo" label="Protocolo de Atendimento" :value="attendance.protocol" readonly />
              <v-text-field placeholder="Data de Solicitação" label="Data de Solicitação" :value="new Date(attendance.attendanceDate).toLocaleString('pt-br').substring(0, 10)" readonly />
              <v-text-field placeholder="Nome do cidadão" label="Nome do cidadão" :value="attendance.userName" readonly />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field placeholder="RG" label="RG" :value="attendance.userRG" readonly/>
              <v-text-field placeholder="CPF" label="CPF" :value="attendance.userCPF" readonly/>
              <v-text-field placeholder="Telefone" label="Telefone" :value="attendance.userPhoneNumber" readonly/>
            </v-col>
            <v-row justify="end">
              <v-col cols="12" sm="12">
                <v-textarea
                  outlined
                  name="input-7-4"
                  label="Descrição"
                  :value="attendance.description"
                  readonly
                ></v-textarea>
                <v-btn color="primary" @click="selectAttendance(attendance)">Selecionar</v-btn>
              </v-col>
            </v-row>
          </v-row>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import AttendanceService from "../services/attendance.service";
import { Session } from "../services/session.enum";

export default {
  async created() {
    const { accessToken, id } = JSON.parse(
      sessionStorage.getItem(Session.usoftwareUser)
    );
    this.accessToken = accessToken;
    this.id = id;

    const attendanceService = new AttendanceService();
    this.attendanceService = attendanceService;

    const attendances = await attendanceService.getAll(accessToken);
    this.attendances = attendances.filter((item) => item.prosecutorId === id);
  },
  data: function () {
    return {
      attendances: [],
      accessToken: "",
      id: "",
      attendanceService: new AttendanceService(),
      selectedAttendance: undefined,
      newComment: ""
    };
  },
  methods:{
    selectAttendance(attendance){
      this.newComment = ""
      this.selectedAttendance = attendance
    }
  }
}

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