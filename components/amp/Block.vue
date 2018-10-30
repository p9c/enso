<template>
  <article :class="'pnl block' +slug">
  <amp-list id="block"  layout="flex-item"  :src="'//' +slug +'.com-http.us/a/' + type +'/'+ value"  items="d" single-item class="cgl" v-html='`<template type="amp-mustache" id="block"><table class="table table-hover"><tbody>
{{#bits}}<tr><td ><strong>Bits</strong></td><td>{{bits}}</td></tr>{{/bits}}
{{#confirmations}}<tr><td ><strong>Confirmations</strong></td><td>{{confirmations}}</td></tr>{{/confirmations}}
{{#difficulty}}<tr><td ><strong>Difficulty</strong></td><td>{{difficulty}}</td></tr>{{/difficulty}}
{{#hash}}<tr><td ><strong>Hash</strong></td><td><a href="/explorer/blockhash/{{hash}}">{{hash}}</a></td></tr>{{/hash}}
{{#height}}<tr><td ><strong>Height</strong></td><td><a href="/explorer/block/{{height}}">{{height}}</a></td></tr>{{/height}}
{{#merkleroot}}<tr><td ><strong>Merkle root</strong></td><td>{{merkleroot}}</td></tr>{{/merkleroot}}
{{#nextblockhash}}<tr><td ><strong>Next block hash</strong></td><td><a href="/explorer/blockhash/{{nextblockhash}}">{{nextblockhash}}</a></td></tr>{{/nextblockhash}}
{{#nonce}}<tr><td ><strong>Nonce</strong></td><td>{{nonce}}</td></tr>{{/nonce}}
{{#pow_algo}}<tr><td ><strong>POW algo</strong></td><td>{{pow_algo}}</td></tr>{{/pow_algo}}
{{#pow_algo_id}}<tr><td ><strong>POW algo id</strong></td><td>{{pow_algo_id}}</td></tr>{{/pow_algo_id}}
{{#pow_hash}}<tr><td ><strong>POW hash</strong></td><td>{{pow_hash}}</td></tr>{{/pow_hash}}
{{#previousblockhash}}<tr><td ><strong>Previous block hash</strong></td><td><a href="/explorer/blockhash/{{previousblockhash}}">{{previousblockhash}}</a></td></tr>{{/previousblockhash}}
{{#size}}<tr><td ><strong>Size</strong></td><td>{{size}}</td></tr>{{/size}}
{{#time}}<tr><td ><strong>Time</strong></td><td>{{time}}</td></tr>{{/time}}
{{#version}}<tr><td ><strong>Version</strong></td><td>{{version}}</td></tr>{{/version}}

{{#tx}}<tr><td ><strong>TXs</strong></td><td><li><a href="/explorer/tx/{{.}}">{{.}}</a></li></td></tr>{{/tx}}
</tbody></table></template>`'></amp-list>
  </article>
</template>


<script>

import AmpTemplate from '@/components/amp/AmpTemplate.js'
export default {
  components: {
    AmpTemplate,
  },

    props: {
    slug:String,
    type:String,
    value:String
     }
}
</script>







