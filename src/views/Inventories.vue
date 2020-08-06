<template>
  <div id="inventories">
      <v-container>
          <v-card flat class="pa-2">
              <h3 style="text-align: center;">My Inventories</h3>
          </v-card>
          <v-card class="mt-3">
              <v-data-table
                    :headers="headers"
                    :items="inventories"
                    sort-by="calories"
                    class="elevation-1"
                >
                    <template v-slot:top>
                    <v-toolbar flat color="white">
                        <v-toolbar-title>
                            <v-icon large color="black">assessment</v-icon>
                        </v-toolbar-title>
                        <v-divider
                        class="mx-4"
                        inset
                        vertical
                        ></v-divider>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                            color="primary"
                            dark
                            class="mb-2"
                            v-bind="attrs"
                            v-on="on"
                            >New Inventory</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                            <v-container>
                                <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem.inv_type" label="Type"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem.buying_price" label="B.P (Ksh)"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem.selling_price" label="S.P (Ksh)"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem.stock" label="Stock (units)"></v-text-field>
                                </v-col>
                                </v-row>
                            </v-container>
                            </v-card-text>

                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                            <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                    </v-toolbar>
                    </template>
                    <template v-slot:item.actions="{item}">
                        <v-tooltip top>
                             <template v-slot:activator="{ on, attrs }">
                            <v-icon
                                small
                                class="mr-2"
                                @click="editItem(item)"
                                v-bind="attrs"
                                v-on="on"
                            >
                                mdi-pencil
                            </v-icon>
                        </template>
                        <span>Edit</span>
                        </v-tooltip>
                        <v-tooltip top>
                            <template v-slot:activator="{on, attrs}">
                                 <v-icon
                                    small
                                    @click="deleteItem(item)"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    mdi-delete
                                </v-icon>
                            </template>
                            <span>Delete</span>
                        </v-tooltip>
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                            <v-icon
                            small
                            class="ml-2"
                            v-bind="attrs"
                            v-on="on"
                            @click="$router.push({path: `/sales/${item.id}`})"
                            >attach_money</v-icon>
                            </template>
                            <span>Make Sale</span>
                        </v-tooltip>
                    </template>
                    <template v-slot:no-data>
                    <v-btn color="primary" @click="initialize">Reset</v-btn>
                    </template>
                </v-data-table>
          </v-card>
      </v-container>
  </div>
</template>

<script>
  export default {
    name: "Inventories",
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Type', value: 'inv_type' },
        { text: 'Buying Price', value: 'buying_price' },
        { text: 'Selling Price', value: 'selling_price' },
        { text: 'Stock', value: 'stock' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      editedIndex: -1,
      editedItem: {
        name: '',
        inv_type: '',
        buying_price: 0,
        selling_price: 0,
        stock: 0,
      },
      defaultItem: {
        name: '',
        inv_type: '',
        buying_price: 0,
        selling_price: 0,
        stock: 0,
      },
    }),

    computed: {
        
        inventories () {
            return this.$store.state.inventories
        },
        formTitle () {
        return this.editedIndex === -1 ? 'New Inventory' : 'Edit Inventory'
        },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
        this.initialize()
    },

    methods: {
      initialize () {
        this.inventories = []
      },

      editItem (item) {
        this.editedIndex = this.inventories.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.inventories.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.inventories.splice(index, 1)
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.inventories[this.editedIndex], this.editedItem)
        } else {
          this.inventories.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>

<style>

</style>