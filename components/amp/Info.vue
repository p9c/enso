<template>
<div class="pnl pnlbg fii fcl" amp-fx="fade-in">
  <h3>{{name}} getInfo</h3>


  <amp-list layout="flex-item" :src="'https://' + slug +'.com-http.us/a/info'" items="d" single-item class="cgl"  v-html='`<template type="amp-mustache"  id="coin-info"><table class="table table-hover"><tbody><tr><td>Blocks:</td><td>{{blocks}}</td></tr><tr><td>Difficulty:</td><td>{{difficulty}}</td></tr><tr><td>Current Block Size:</td><td>{{currentblocksize}}</td></tr><tr><td>Current Block Tx:</td><td>{{currentblocktx}}</td></tr><tr><td>Difficulty Scrypt:</td><td>{{difficulty_scrypt}}</td> </tr><tr><td>Difficulty SHA256d:</td><td>{{difficulty_sha256d}}</td></tr></tbody></table></template>`'></amp-list>
</div>
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

