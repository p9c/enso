<template>
  <AppShell currentPage="eco">

        <Page>
      <Eco :slug="slug" :name="name" />
</Page>
  </AppShell>

</template>


<script>

import AppShell from '~/components/AppShell.vue'
import Page from '~/components/pages/Page.vue'
import Eco from '~/components/pages/Eco.vue'

export default {
  components: {
    AppShell,
    Page,
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
