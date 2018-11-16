<template>
  <section class="flx frw fii">
<Panel ><Price  :slug="slug" :symbol="symbol" :name="name" /></Panel>
<Panel class="tpl" ><Trades  :slug="slug" :symbol="symbol" :name="name" /></Panel>

    
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
    symbol:String,
    algo:String,
  }
}
</script>

<style>




</style>
