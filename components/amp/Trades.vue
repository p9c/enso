<template>
<div class="flx fcl fooa pnlbg" amp-fx="fade-in">
  <h3 class="pnlhd pnlh">{{name}} Trades</h3>
<div class="padd pnlbg">
<amp-iframe :title="name +' Trades'"  :src="'https://' + slug + '.com-http.us/frames/trades'" height="800px" width="auto" layout="fixed-height"  frameborder="0"  sandbox="allow-scripts">
<BTCAnim /></amp-iframe>
</div></div>
</template>
      
    


<script>

import BTCAnim from '@/components/amp/BTCAnim.vue'

export default {
  components: {
    BTCAnim,
  },

    props: {
    slug:String,
    name:String
  }
}
</script>


