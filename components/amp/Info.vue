<template>
<div class="pnl sid"><h3>Info</h3>
<div class="cnt ">
  <amp-list  height="300" layout="fixed-height" :src="'//' + slug +'.com-http.us/a/mining'" items="d" single-item class="cgl"  v-html='`<template type="amp-mustache"  id="coin-info"><table><tbody><tr><td>Blocks:</td><td>{{blocks}}</td></tr><tr><td>Difficulty:</td><td>{{difficulty}}</td></tr><tr><td>Current Block Size:</td><td>{{currentblocksize}}</td></tr><tr><td>Current Block Tx:</td><td>{{currentblocktx}}</td></tr><tr><td>Difficulty Scrypt:</td><td>{{difficulty_scrypt}}</td> </tr><tr><td>Difficulty SHA256d:</td><td>{{difficulty_sha256d}}</td></tr></tbody></table></template>`'></amp-list>
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

