<template>
 <article id="blocks" class="lyt pnl qdl qdh pnlbg">
   <h3>Last {{ name }} Blocks</h3>
  <div class="cnt ">
   <ul class="blcks">
     <li>Height</li>
   <li class="hsh">Hash</li>
   <li>Difficulty</li>
   <li>Confirmations</li>
   <li class="txs">Transactions</li>
   <li >Time</li>
   </ul>
     <amp-list  id="last-blocks" layout="flex-item" :src="'//' + slug + '.com-http.us/a/last'" items="d" class="cgl" v-html='`<template type="amp-mustache"><ul class="blck">
     {{#height}}<li><a href="/explorer/b/{{height}}">{{height}}</a></li>{{/height}}
     {{#hash}}<li class="hash"><a href="/explorer/hash/{{hash}}">{{hash}}</a></li>{{/hash}}
     {{#difficulty}}<li>{{difficulty}}</li>{{/difficulty}}
     {{#confirmations}}<li>{{confirmations}}</li>{{/confirmations}}
     <li class="txs popover popover-left"><button>Txs</button>
     <ul class="popover-container txc">{{#tx}}<li><a href="/explorer/tx/{{.}}">{{.}}</a></li>{{/tx}}</ul></li>
     {{#time}}<li>{{time}}</li>{{/time}}
     </ul></template>`'></amp-list></div></article> 
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
