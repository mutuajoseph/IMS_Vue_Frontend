<template>
  <div id="navbar">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>
        <v-btn small color="black"><span class="white--text mr-2">sign out</span><v-icon color="white">exit_to_app</v-icon></v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
    name: "Dashboard",
    data: () => ({
      drawer: null,
      links: [
        {icon: "home", text: "Dashboard", route: "/"},
        {icon: "assessment", text: "Inventories", route: "/inventories"},
      ]
    })
}
</script>

<style>

</style>