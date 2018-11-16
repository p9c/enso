<template>
<div class="pnl fcl pnlbg"><h3>{{name}} Graphics</h3>
<div class="cnt ">

 <ul>
     <li class="gps popover popover-top "><button>{{name}} 16x16 logo png</button><span class="popover-container gps"></span></li>
     <li class="gpsa popover popover-top "><button>{{name}} 32x32 logo png</button><span class="popover-container gpsa"><amp-img :src="'https://i.com-http.us/' + slug +  '/32'" :alt="'32x23 '+ name + '  logo image'"  width="32"  height="32"  layout="fixed"  class="m1"><noscript><img  :src="'https://i.com-http.us/' + slug +  '/32'" :alt="'32x23 '+ name + ' logo image'"  width="32"  height="32"></noscript></amp-img></span></li>
     <li class="popover popover-top gpsb"><button>{{name}} 64x64 logo png</button><span class="popover-container gpsb"><amp-img :src="'https://i.com-http.us/' + slug +  '/64'" :alt="'64x64 '+ name + '  logo image'"  width="62"  height="64"  layout="fixed"  class="m1"><noscript><img :src="'https://i.com-http.us/' + slug +  '/64'" :alt="'64x64 '+ name + ' logo image'"  width="62"  height="64"></noscript></amp-img></span></li>
     <li class="popover popover-top gpsn"><button>{{name}} 128x128 logo png</button><span class="popover-container gpsn"><amp-img :src="'https://i.com-http.us/' + slug + '/128'" :alt="'128x128 '+ name + '  logo image'"  width="128"  height="128"  layout="fixed"  class="m1"><noscript><img :src="'https://i.com-http.us/' + slug + '/128'" :alt="'128x128 '+ name + ' logo image'"  width="128"  height="128"></noscript></amp-img></span></li>
     <li class="popover popover-top gpsm"><button>{{name}} 256x256 logo png</button><span class="popover-container gpsm"><amp-img :src="'https://i.com-http.us/' + slug +  '/256'" :alt="'256x256 '+ name + '  logo image'"  width="256"  height="256"  layout="fixed"  class="m1"><noscript><img :src="'https://i.com-http.us/' + slug +  '/256'" :alt="'256x256 '+ name + ' logo image'"  width="256"  height="256"></noscript></amp-img></span></li>
      </ul>

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

