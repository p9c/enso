<template>
  <AppShell currentPage="/explorer" :lastblock="lastblock">
    <!-- <amp-state id="appNav"       v-html='`{ "option": "" }`'></amp-state> -->

<AppNavContent selected option="explorer">
      <Explorer :slug="slug" :symbol="symbol" :name="name" :algo="algo" :lastblock="lastblock" />
</AppNavContent>

  </AppShell>

</template>


<script>
import axios from '~/plugins/axios'

import AppShell from '~/components/AppShell.vue'
import Page from '~/components/pages/Page.vue'
import Explorer from '~/components/pages/Explorer.vue'

export default {
  components: {
    AppShell,
    Page,
    Explorer,
  },

props: {
    slug:String,
    name:String,
    symbol:String,
    algo:String,
  },
    async asyncData({ query, params, error }) {
    let [lb] = await Promise.all([
      axios.get('http://' + params.slug + '.com-http.us/a/b'),
    ])
    var lastblock = lb.data.d
      console.log(lastblock)

return {
      lastblock:lastblock
    }
}
}

</script>
