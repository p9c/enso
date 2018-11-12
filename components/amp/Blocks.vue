<template>
 <div id="blocks" class="flx fcl fii pnlbg" amp-fx="fade-in">
<amp-state id="blockHeight" v-html='`{ "blockHeight": "`+ lastblock + `" }`'></amp-state>
<BlockHeight  :slug="slug" :lastblock="lastblock" />

                              
     <Block  :slug="slug" :symbol="symbol" :name="name" :algo="algo" :lastblock="lastblock" /> 
  
        </div> 
</template>

  
<script>

import Block from '~/components/amp/Block.vue'
import BlockHeight from '@/components/amp/BlockHeight.vue'


export default {
  components: {
   BlockHeight,
    Block
  },
props: {
    slug:String,
    algo:String,
    name:String,
    symbol:String,
    lastblock:Number,
  }
}
</script>
