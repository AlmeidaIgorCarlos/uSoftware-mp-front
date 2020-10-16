<template>
<v-row justify="center">
    <div class="small">
        <v-card>
            <LineChart :chart-data="datacollection"></LineChart>
        </v-card>
    </div>
</v-row>
</template>

<script>
import LineChart from "./../components/line-chart.js";
import AttendanceService from "../services/attendance.service";
import {
    Session
} from "../services/session.enum";

export default {
    async created() {
        const {
            accessToken,
            id
        } = JSON.parse(
            sessionStorage.getItem(Session.usoftwareUser)
        );
        this.accessToken = accessToken;
        this.id = id;

        const attendanceService = new AttendanceService();
        this.attendanceService = attendanceService;

        this.attendances = await attendanceService.getAll(accessToken);

        this.attendances.forEach(item => {
            const date = new Date(item.attendanceDate)
            this.months.push(date.getMonth())
        })
    },
    components: {
        LineChart,
    },
    data() {
        return {
            datacollection: null,
            accessToken: '',
            id: '',
            months: []
        };
    },
    mounted() {
        this.fillData();
    },
    watch: {
        months: function () {
            this.fillData();
        }
    },
    methods: {
        fillData() {
            this.datacollection = {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                datasets: [{
                    label: "Atendimentos",
                    backgroundColor: "rgb(5, 63, 94)",
                    fill: false,
                    data: [
                        this.months.filter(i => i === 0).length,
                        this.months.filter(i => i === 1).length,
                        this.months.filter(i => i === 2).length,
                        this.months.filter(i => i === 3).length,
                        this.months.filter(i => i === 4).length,
                        this.months.filter(i => i === 5).length,
                        this.months.filter(i => i === 6).length,
                        this.months.filter(i => i === 7).length,
                        this.months.filter(i => i === 8).length,
                        this.months.filter(i => i === 9).length,
                        this.months.filter(i => i === 10).length,
                        this.months.filter(i => i === 11).length,
                    ]
                }],
            };
        }
    },
};
</script>

<style lang="scss">
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

.small {
    min-width: 40%;
}

canvas {
    max-height: 85vh !important;
}
</style>
