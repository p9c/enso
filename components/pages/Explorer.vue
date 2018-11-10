<template>
  <section class="flx fcl fii">
<Panel><Blocks  :slug="slug" :symbol="symbol" :name="name" :algo="algo"  :lastblock="lastblock" /></Panel>

    
  </section>
</template>


<script>
import Panel from '~/components/elements/Panel.vue'

import Blocks from '~/components/amp/Blocks.vue'
import CoinBgImage from '~/components/elements/CoinBgImage.vue'


export default {
  components: {
    Panel,
    Blocks,
    CoinBgImage,
  },
    props: {
    slug:String,
    name:String,
    symbol:String,
    algo:String,
    lastblock:Number,
  }
}
</script>

<style>




</style>
