<template>
  <AppShell currentPage="network">

    <Page>
      <Explorer :slug="slug" :name="name" />

</Page>

  </AppShell>

</template>


<script>

import AppShell from '~/components/AppShell.vue'
import Page from '~/components/pages/Page.vue'
import Network from '~/components/pages/Network.vue'

export default {
  components: {
    AppShell,
    Page,
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
