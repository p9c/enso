<template>
<div class="flx fcl fooa pnlbg" amp-fx="fade-in">
  <h3 class="pnlhd pnlh">{{name}} Price</h3>
<div class="padd pnlbg">
<amp-iframe :title="name +' Price'"  :src="'http://' + slug + '.com-http.us/frames/ccw'" height="300px" width="auto" layout="fixed-height"  frameborder="0"  sandbox="allow-scripts">
<div class="plhd" placeholder><amp-img :src="'http://i.com-http.us/' +slug+  '/128'" width="128px" height="128px" layout="fixed"  ></amp-img></div></amp-iframe>
</div></div>
</template>
      
    


<script>

import AmpTemplate from '@/components/amp/AmpTemplate.js'
export default {
  components: {
    AmpTemplate,
  },

    props: {
    slug:String,
    name:String
  }
}
</script>


