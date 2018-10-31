<template>
<div class="pnl dbl pha lyt lrw">
  <amp-img :src="'//i.com-http.us/' +slug+ '/64'" :alt="name"  width="64px" height="64px" layout="fixed"  class="nic">
  <noscript><img :src="'//i.com-http.us/' +slug+ '/64'" width="64" height="64" :alt="name"></noscript></amp-img>
<h1><amp-fit-text height="64px" width="240px" layout="flex-item" min-font-size="32"> <a :href="'//' +slug+ '.com-http.us/'">{{name}}</a>  {{page}}</amp-fit-text></h1>
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







