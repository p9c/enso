<template>
<div class="pnl "><h3>{{name}} News</h3>
 <div class="cnt ">
<amp-list  id="coin-news"  width="auto"  height="542"  layout="flex-item"   :src="'//'+slug+ '.com-http.us/a/news'"   items="news"  class="m1" v-html='`<template type="amp-mustache"><div class="nws"><amp-img src="//i.com-http.us/`+slug+ `/16" alt="`+name+`"  width="16"  height="16"  layout="fixed"  class="nico"></amp-img><a href="{{link}}" target="_blank"><h5>{{title}}</h5><time>{{date}}</time></a></div></template>`'></amp-list>
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
