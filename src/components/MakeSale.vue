<template>
  <div id="make-sale">
      <v-container>
          <v-card flat class="pa-2">
              <h3 style="text-align: center;"> Make Sale</h3>
          </v-card>
          <v-card class="mt-4" flat>
               <v-row>
                <v-col
                    cols="6"
                    md="4"
                >
                    <v-card
                    class="pa-2"
                    >
                        <v-form class="ml-4 mr-4 mb-4" ref="form">
                            <v-text-field label="Quantity" v-model="quantity" :rules="inputRules"></v-text-field>
                            <v-btn class="mt-3" color="blue darken-1" text @click="submit">Submit</v-btn>
                        </v-form>
                    </v-card>
                </v-col>
                 <v-col
                    cols="12"
                    md="8"
                >
                    <v-card
                    class="pa-2"
                    flat
                    >
                        <v-card flat>
                            <v-card-title>
                            Sales
                            <v-spacer></v-spacer>
                            <v-text-field
                                v-model="search"
                                append-icon="mdi-magnify"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                            </v-card-title>
                            <v-data-table
                            :headers="headers"
                            :items="sales"
                            :search="search"
                            ></v-data-table>
                        </v-card>
                    </v-card>
                </v-col>
                </v-row>
          </v-card>
      </v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        quantity: '',
        headers: [
          {
            text: 'Quantity',
            align: 'start',
            sortable: false,
            value: 'quantity',
          },
          { text: 'Date', value: 'date' },
        ],
        sales: [
          {
            id: 1,
            quantity: '50',
            date: 'Jan 28, 2020 12:33PM'
          },
          {
            id: 2,
            quantity: '60',
            date: 'Jan 28, 2020 12:33PM'
          },
        ],
      }
    },

    methods: {
        submit () {
            if (this.editedIndex > -1) {
            Object.assign(this.inventories[this.editedIndex], this.editedItem)
            } else {
            this.inventories.push(this.editedItem)
            }
            this.close()
        }
    }
  }
</script>

<style>

</style>