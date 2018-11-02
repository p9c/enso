<template><div class="pnl fcl pnlbg">
  
  <div class="cnt basics"><figure>
  <amp-img :src="'//i.com-http.us/' + slug + '/128'" :alt="name"  width="128px" height="128px" layout="fixed"  class="nic">
  <noscript><img :src="'//i.com-http.us/' +slug+ '/128'" width="128" height="128" :alt="name"></noscript></amp-img></figure>
<h1><amp-fit-text height="40px" width="240px" layout="flex-item" min-font-size="32"> <a :href="'//' +slug+ '.com-http.us/'">{{name}}</a></amp-fit-text></h1>
<p class="desc" v-html="cdata.desc" />
</div>

<ul class="sts">
  <li><a href="#" class="orange">blocks</a></li>
  <li class="stm"><a href="#" class="green">transactions</a></li>
  <li><a href="#" class="red">price</a></li>
  </ul>

</div></template>

<script>

import AmpTemplate from '@/components/amp/AmpTemplate.js'
export default {
  components: {
    AmpTemplate,
  },

    props: {
      slug:String,
    name:String,
    cdata:Object
      }
}
</script>
