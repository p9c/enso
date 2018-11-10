<template>
  <section class="flx fcl fii">
<Panel>
<Block :slug="slug" :name="name" :hash="hash" :height="height" :lastblock="lastblock" /> 
</Panel>
  </section>
</template>
<script>
// import News from '@/components/amp/News.vue'
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
    height:String,
    lastblock:Number,
    hash:String
  }
}
</script>