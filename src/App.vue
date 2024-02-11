<template>
  <v-app>
    <v-main>
      <BusOnlineTicket/>
    </v-main>
  </v-app>
</template>

<script>
import BusOnlineTicket from './components/BusOnlineTicket.vue';



export default {
  name: 'App',

  components: {
    BusOnlineTicket
},

  data: () => ({
    //
  }),
}
</script>
