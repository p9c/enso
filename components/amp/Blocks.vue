<template>
 <div id="blocks" class="lyt pnl fcl fhh pnlbg">


<BlockHeight :slug="slug" :lastblock="lastblock"/>
       <Block :slug="slug" :lastblock="lastblock"/>
  
        </div> 
</template>

  
<script>

import AmpTemplate from '@/components/amp/AmpTemplate.js'
import Block from '~/components/amp/Block.vue'
import BlockHeight from '@/components/amp/BlockHeight.vue'


export default {
  components: {
      AmpTemplate,
   BlockHeight,
    Block
  },
    props: {
    slug:String,
    name:String,
    lastblock:Number
  },
}
</script>
