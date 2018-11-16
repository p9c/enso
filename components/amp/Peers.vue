<template>
<div class="pnl pnlbg fcl fii ftw"><h3>{{name}} Peers</h3>
 <div class="cnt peers">
  <amp-list  id="coin-peers"  layout="flex-item"  :src="'//' + slug + '.com-http.us/a/peer'"  items= "d"  class="m1" v-html='`<template type="amp-mustache"   id="coin-peers">
      {{#addr}}<section>
        <h6>{{addr}}</h6>
<table class="table table-hover"><tbody>
{{#addr}}<tr><td ><strong>Addr</strong></td><td>{{addr}}</td></tr>{{/addr}}
{{#addrloca}}<tr><td ><strong>Addrloca</strong></td><td>{{addrloca}}</td></tr>{{/addrloca}}
{{#banscore}}<tr><td ><strong>Banscore</strong></td><td>{{banscore}}</td></tr>{{/banscore}}
{{#bytesrecv}}<tr><td ><strong>Bytesrecv</strong></td><td>{{bytesrecv}}</td></tr>{{/bytesrecv}}
{{#bytessent}}<tr><td ><strong>Bytessent</strong></td><td>{{bytessent}}</td></tr>{{/bytessent}}
{{#conntime}}<tr><td ><strong>Conntime</strong></td><td>{{conntime}}</td></tr>{{/conntime}}
{{#inbound}}<tr><td ><strong>Inbound</strong></td><td>{{inbound}}</td></tr>{{/inbound}}
{{#inflight}}<tr><td ><strong>Inflight</strong></td><td>{{inflight}}</td></tr>{{/inflight}}
{{#lastrecv}}<tr><td ><strong>Lastrecv</strong></td><td>{{lastrecv}}</td></tr>{{/lastrecv}}
{{#lastsend}}<tr><td ><strong>Lastsend</strong></td><td>{{lastsend}}</td></tr>{{/lastsend}}
{{#pingtime}}<tr><td ><strong>Pingtime</strong></td><td>{{pingtime}}</td></tr>{{/pingtime}}
{{#services}}<tr><td ><strong>Services</strong></td><td>{{services}}</td></tr>{{/services}}
{{#startingheight}}<tr><td ><strong>Starting height</strong></td><td>{{startingheight}}</td></tr>{{/startingheight}}
{{#subver}}<tr><td ><strong>Subver</strong></td><td>{{subver}}</td></tr>{{/subver}}
{{#synced_blocks}}<tr><td ><strong>Synced blocks</strong></td><td>{{synced_blocks}}</td></tr>{{/synced_blocks}}
{{#synced_headers}}<tr><td ><strong>Synced headers</strong></td><td>{{synced_headers}}</td></tr>{{/synced_headers}}
{{#version}}<tr><td ><strong>Version</strong></td><td>{{version}}</td></tr>{{/version}}
{{#whitelisted}}<tr><td ><strong>Whitelisted</strong></td><td>{{whitelisted}}</td></tr>{{/whitelisted}}
</tbody></table>
      </section>
      {{/addr}}
</template>`'></amp-list></div></div>
</template>

<script>
import axios from '@/plugins/axios'
import AmpTemplate from '@/components/amp/AmpTemplate.js'


export default {
      name: 'peer',
  components: {
    AmpTemplate,
    axios
  },

    props: {
    slug:String,
    name:String
  //   },
  // async asyncData () {
  //  let { data } = await axios.get('http://' + slug + '.com-http.us/a/peer')
  //   return { peer:data.d }

  }
}
</script>
