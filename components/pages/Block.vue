<template>
  <section class="flx fcl fii">
<Panel>
<Block :slug="slug" :name="name"  :lastblock="lastblock" :height="height"  /> 
</Panel>
  </section>
</template>



<script>
import Block from '@/components/amp/Block.vue'
import Panel from '~/components/elements/Panel.vue'




export default {
  components: {
        Panel,
    Block,

  },
      props: {
    slug:String,
    name:String,
    lastblock:Number,
    height:String,
  }
}
</script>

<style>




</style>
