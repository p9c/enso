<template>
<section class="sms smm">

<div class="mmm fcl dbl">


<Txs :slug="slug"  />

<Peers :slug="slug"  />


</div>
<Blocks :slug="slug" :name="name"  :lastblock="lastblock" />

</section>
</template>


<script>
import Peers from '@/components/amp/Peers.vue'

import Blocks from '@/components/amp/Blocks.vue'
import Txs from '@/components/amp/Txs.vue'

export default {
  name: 'main',
    components: {
      Txs,
    Peers,
    Blocks
      },
      props: {
    slug:String,
    algo:String,
    cdata:Object,
    name:String,
    lastblock:Number
  }
}
</script>






