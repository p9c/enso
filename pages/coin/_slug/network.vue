<template>
  <AppShell currentPage="network">

      <Explorer :slug="slug" :name="name" />


  </AppShell>

</template>


<script>

import AppShell from '~/components/AppShell.vue'
import Network from '~/components/pages/Network.vue'

export default {
  components: {
    AppShell,
    Network
  },

        props: {
    slug:String,
    algo:String,
    name:String,
    symbol:String,
  }
}

</script>
