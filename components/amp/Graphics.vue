<template>
<div class="pnl "><h3>{{name}} Graphics</h3>
<div class="cnt ">
<amp-img :src="'//i.com-http.us/' + slug +  '/16'" :alt="'16x16 '+ name + '  logo image'"  width="16"  height="16"  layout="fixed"  class="m1"><noscript><img :src="'//i.com-http.us/' + slug +  '/16'" :alt="'16x16 '+ name + ' logo image'" width="16" height="16" ></noscript></amp-img>
<amp-img :src="'//i.com-http.us/' + slug +  '/32'" :alt="'32x23 '+ name + '  logo image'"  width="32"  height="32"  layout="fixed"  class="m1"><noscript><img  :src="'//i.com-http.us/' + slug +  '/32'" :alt="'32x23 '+ name + ' logo image'"  width="32"  height="32"></noscript></amp-img>
<amp-img :src="'//i.com-http.us/' + slug +  '/64'" :alt="'64x64 '+ name + '  logo image'"  width="62"  height="64"  layout="fixed"  class="m1"><noscript><img :src="'//i.com-http.us/' + slug +  '/64'" :alt="'64x64 '+ name + ' logo image'"  width="62"  height="64"></noscript></amp-img>
<amp-img :src="'//i.com-http.us/' + slug + '/128'" :alt="'128x128 '+ name + '  logo image'"  width="128"  height="128"  layout="fixed"  class="m1"><noscript><img :src="'//i.com-http.us/' + slug + '/128'" :alt="'128x128 '+ name + ' logo image'"  width="128"  height="128"></noscript></amp-img>
<amp-img :src="'//i.com-http.us/' + slug +  '/256'" :alt="'256x256 '+ name + '  logo image'"  width="256"  height="256"  layout="fixed"  class="m1"><noscript><img :src="'//i.com-http.us/' + slug +  '/256'" :alt="'256x256 '+ name + ' logo image'"  width="256"  height="256"></noscript></amp-img>
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
  },
    async asyncData () {
    
  }
}
</script>

