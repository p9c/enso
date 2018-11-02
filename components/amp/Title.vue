<template>
<div class="pnl dbl pha lyt lrw">
  <amp-img :src="'//i.com-http.us/' +slug+ '/32'" :alt="name"  width="32px" height="32px" layout="fixed"  class="nic">
  <noscript><img :src="'//i.com-http.us/' +slug+ '/32'" width="32" height="32" :alt="name"></noscript></amp-img>
<h1><amp-fit-text height="40px" width="240px" layout="flex-item" min-font-size="32"> <a :href="'//' +slug+ '.com-http.us/'">{{name}}</a>  {{page}}</amp-fit-text></h1>
</div>
</template>


<script>
import AmpTemplate from '@/components/amp/AmpTemplate.js'
export default {
  components: {
    AmpTemplate,
  },

    props: {
      page:String,
    slug:String,
    name:String
  }
}
</script>







