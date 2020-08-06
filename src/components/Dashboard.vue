<template>
  <div id="dashboard">
      <v-container>
            <v-row no-gutters class="mt-5">
            <v-col cols="12" sm="12" md="6" lg="6" xs="12">
            <v-card class="pa-2 mx-auto" max-width="374" tile>
                <v-card-title>
                <v-chip color="black" class="white--text"
                    ><h2>Inventories</h2></v-chip
                >
                </v-card-title>
                <v-card-content>
                <v-row>
                    <v-col>
                    <v-icon color="black" x-large>group</v-icon>
                    </v-col>
                    <v-col>
                    <h1>200</h1>
                    </v-col>
                </v-row>
                </v-card-content>
            </v-card>
            </v-col>
            <v-col cols="12" sm="12" md="8" lg="6" xs="12">
            <v-card class="pa-2 mx-auto" max-width="374" tile>
                <v-card-title>
                <v-chip color="black" class="white--text"
                    ><h2>Sales</h2></v-chip
                ></v-card-title
                >
                <v-card-content>
                <v-row>
                    <v-col>
                    <v-icon color="black" x-large>monetization_on</v-icon>
                    </v-col>
                    <v-col>
                    <h1>5</h1>
                    </v-col>
                </v-row>
                </v-card-content>
            </v-card>
            </v-col>
        </v-row>
        <v-row no-gutters>
        <v-col cols="12" sm="12" md="12" lg="12">
          <v-card class="pa-2 mx-auto my-5">
            <v-card-title class="mb-4">Sales per Month</v-card-title>
            <v-sheet
              class="v-sheet--offset mx-auto"
              color="cyan"
              elevation="12"
              max-width="calc(80% - 62px)"
            >
              <v-sparkline
                :labels="labels"
                :value="value"
                color="white"
                line-width="2"
                padding="16"
              ></v-sparkline>
            </v-sheet>
          </v-card>
        </v-col>
      </v-row>
      </v-container>
  </div>
</template>

<script>
export default {
    name: "Dashboard",
    data: () => ({
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
        value: [200, 675, 410, 390, 310, 460, 250, 240, 300, 400, 150, 10]
    })
}
</script>

<style>
.v-sheet--offset {
  top: -24px;
  position: relative;
}

</style>