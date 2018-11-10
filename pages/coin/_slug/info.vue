<template>
  <AppShell currentPage="info">
      <Info :slug="slug" :name="name" :algo="algo" :symbol="symbol" :cdata="cdata" />

  </AppShell>

</template>


<script>

import AppShell from '~/components/AppShell.vue'
import Info from '~/components/pages/Info.vue'

export default {
  components: {
    AppShell,
    Info,
  },
      props: {
    slug:String,
    algo:String,
    name:String,
    symbol:String,
        cdata:Object
  }
}

</script>
