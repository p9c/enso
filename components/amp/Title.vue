<template>
<div class="flx fcl fii fjcc">
  <Logo />
<!-- <h1><amp-fit-text height="32px" width="240px" layout="flex-item" min-font-size="24px"> <a :href="'http://' + slug+ '.com-http.us/'">{{name}}</a></amp-fit-text></h1> -->
</div>
</template>


<script>
import Logo from '@/components/elements/Logo.vue'
import UnescapedScript from '~/components/UnescapedScript.js'


export default {
    components: {
      UnescapedScript,
    Logo,
    },
    props: {
    slug:String,
    symbol:String,
    name:String
  },
  head () {
    return {
      script: [
        // { hid: "amp-animation", 'custom-element': "amp-animation", src: "https://cdn.ampproject.org/v0/amp-animation-0.1.js", async: '' },
        // { hid: "amp-position-observer", 'custom-element': "amp-position-observer", src: "https://cdn.ampproject.org/v0/amp-position-observer-0.1.js", async: '' },
      ],
      link: [
        { rel: "preload", href: this.src, as: "image" },
      ]
    }
  }
}

</script>

