<template>
<div class="pnl fcl pnlbg fii dbl"><h3>{{name}} News</h3>
 <div class="cnt ">
  <amp-list  id="coin-news"  layout="flex-item"  :src="'https://' + slug + '.com-http.us/a/news'"  items= "news"  class="m1" v-html='`<template type="amp-mustache"   id="coin-news"><div class="nws">
    <amp-img src="//i.com-http.us/` + slug + `/16" alt="{{.Coin.Name}}"  width="16"  height="16"  layout="fixed"  class="nico"></amp-img>
    <a href="{{link}}" target="_blank">{{title}}<time>{{date}}</time></a></template>`'></amp-list></div></div>
</template>
  
<script>
import axios from '@/plugins/axios'
import AmpTemplate from '@/components/amp/AmpTemplate.js'


export default {
      name: 'news',
  components: {
    AmpTemplate,
    axios
  },

    props: {
    slug:String,
    name:String
    },
}
</script>
