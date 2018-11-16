<template>
  <section class="flx fcl fii">
<Panel class="flx fii">
<Tx :slug="slug" :name="name"  :txid="txid"  /> 
</Panel>
  </section>
</template>
<script>
// import News from '@/components/amp/News.vue'
import Tx from '@/components/amp/Tx.vue'
import Panel from '~/components/elements/Panel.vue'
export default {
  components: {
        Panel,
    Tx,
  },
      props: {
    slug:String,
    name:String,
    txid:String
  }
}
</script>