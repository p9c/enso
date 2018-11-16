<template>
<div class="pnl fcl pnlbg"><h3>Last Transactions</h3>
<div class="cnt ">
  <amp-list width="auto" layout="flex-item" :src="'https://'+slug+ '.com-http.us/a/rawpool'" items="d" class="cgl" v-html='`<template type="amp-mustache" id="coin-tx"><a href="//`+slug+`.com-http.us/explorer/tx/{{.}}">{{.}}</a></template>`'></amp-list>
  </div></div>
</template>

<script>
import AmpTemplate from '@/components/amp/AmpTemplate.js'
export default {
  components: {
    AmpTemplate,
  },

    props: {
    slug:String
  }
}
</script>





