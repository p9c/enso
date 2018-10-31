<template>
<div class="pnl pnlbg"><h3>{{name}} Specifications</h3>
<div class="cnt ">
<amp-list id="coin-spec" height="110px" layout="flex-item"  :src="'//com-http.us/json/coins/'+slug+ '.json'"  items="coin" single-item class="m1" v-html='`<template type="amp-mustache"  id="coin-spec"><table><tbody><tr><td>Name</td><td>{{name}}</td></tr><tr><td>Symbol</td><td>{{symbol}}</td></tr><tr><td>Start Date</td><td>{{cdata.start}}</td></tr><tr><td>Twitter</td><td>{{cdata.tw}}</td></tr><tr><td>Website Url</td><td>{{cdata.web}}</td></tr></tbody></table></template>`'></amp-list>
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
    name:String,
  }
}
</script>