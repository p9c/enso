<template>
  <AppShell currentPage="eco">

      <Eco :slug="slug" :name="name" />
  </AppShell>

</template>


<script>

import AppShell from '~/components/AppShell.vue'
import Eco from '~/components/pages/Eco.vue'

export default {
  components: {
    AppShell,
    Eco,
  },
        props: {
    slug:String,
    algo:String,
    name:String,
    symbol:String,
  }
}

</script>
