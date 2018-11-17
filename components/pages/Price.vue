<template>
  <section class="flx frw fii">
<Panel ><Price  :slug="slug" :name="name" /></Panel>
<Panel class="tpl" ><Trades  :slug="slug" :name="name" /></Panel>

    
  </section>
</template>


<script>
import Panel from '~/components/elements/Panel.vue'

import Price from '~/components/amp/Price.vue'
import Trades from '~/components/amp/Trades.vue'


export default {
  components: {
    Panel,
    Price,
    Trades,
  },
    props: {
    slug:String,
    name:String,
  }
}
</script>

<style>




</style>
