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
              <v-select
                label="Cidade"
                :items="cities"
                v-model="selectedCity"
              ></v-select>
            </v-form>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12" md="12" lg="10">
      <v-card
        class="left-padding top-padding right-padding card-height card-scroll"
      >
        <v-row justify="center">
          <v-label>Atendimentos Solicitados</v-label>
        </v-row>
        <v-form
          class="item-order"
          v-for="attendance in filteredAttendances"
          :key="attendance.protocol"
        >
          <v-row justify="start">
            <v-col cols="12" sm="6">
              <v-text-field
                placeholder="Protocolo"
                label="Protocolo de Atendimento"
                :value="attendance.protocol"
                readonly
              />
              <v-text-field
                placeholder="Data de Solicitação"
                label="Data de Solicitação"
                :value="
                  new Date(attendance.attendanceDate)
                    .toLocaleString('pt-br')
                    .substring(0, 10)
                "
                readonly
              />
              <v-text-field
                placeholder="Nome do cidadão"
                label="Nome do cidadão"
                :value="attendance.userName"
                readonly
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                placeholder="RG"
                label="RG"
                :value="attendance.userRG"
                readonly
              />
              <v-text-field
                placeholder="CPF"
                label="CPF"
                :value="attendance.userCPF"
                readonly
              />
              <v-text-field
                placeholder="Telefone"
                label="Telefone"
                :value="attendance.userPhoneNumber"
                readonly
              />
            </v-col>
            <v-row justify="end">
              <v-col cols="12" sm="12">
                <v-textarea
                  outlined
                  name="input-7-4"
                  label="Descrição"
                  readonly
                  :value="attendance.description"
                ></v-textarea>
                <v-btn color="warning" @click="startAttendance(attendance)"
                  >Iniciar Atendimento</v-btn
                >
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
    this.attendances = attendances.filter((item) => item.prosecutorId === 0);

    const cities = this.attendances.map((item) => item.prosecutionUnitCity);
    this.cities = cities;
  },
  data: function () {
    return {
      attendances: [],
      accessToken: "",
      id: "",
      selectedCity: "",
      attendanceService: new AttendanceService(),
      cities: [],
    };
  },
  computed: {
    filteredAttendances() {
      return this.attendances.filter(
        (attendance) => attendance.prosecutionUnitCity === this.selectedCity
      );
    },
  },
  methods: {
    async startAttendance(attendance) {
      await this.attendanceService.update(
        {
          id: attendance.id,
          dataAgendamento: attendance.attendanceDate,
          cidadaoID: attendance.userId,
          promotoriaID: attendance.prosecutionUnitId,
          areaAtuacaoId: attendance.areaId,
          promotorID: this.id,
          protocolo: attendance.protocol,
          status: attendance.status,
          etapa: attendance.step,
          descricao: attendance.description,
          cidadaoNome: attendance.userName,
          cidadaoCpf: attendance.userCPF,
          cidadaoRg: attendance.userRG,
          cidadaoCelular: attendance.userPhoneNumber,
          promotoriaCidade: attendance.prosecutionUnitCity,
          criadoEm: attendance.createdAt,
          removidoEm: attendance.removedAt,
        },
        this.accessToken
      );

      this.attendances = this.attendances.filter(item => item.id != attendance.id) 

      this.selectedCity = "";

      alert("Atendimento iniciado");
    },
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

.card-height {
  height: 80vh;
}

.card-scroll {
  overflow-y: scroll;
}

.item-order {
}
</style>