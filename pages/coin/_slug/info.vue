<template>
  <AppShell currentPage="info">
    <Page>
      <Info :slug="slug" :name="name" :algo="algo" :symbol="symbol" :cdata="cdata" />
</Page>

  </AppShell>

</template>


<script>

import AppShell from '~/components/AppShell.vue'
import Page from '~/components/pages/Page.vue'
import Info from '~/components/pages/Info.vue'

export default {
  components: {
    AppShell,
    Page,
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
