<template>
  <article class="pnlbg block">
             <amp-list 
   id="block"                
     layout="flex-item"
       items="d" single-item class="cgl" 
     :src="'//localhost:9998/a/e/mazacoin/b/' +lastblock"
      [src]="'//localhost:9998/a/e/mazacoin/b/' + blockHeight"
  v-html='`<template type="amp-mustache" id="block">
    <div class="blockdata">
      <h4>Block Data</h4>
{{#b}}
<table class="table table-hover"><tbody>
{{#b.bits}}<tr><td ><strong>Bits</strong></td><td>{{b.bits}}</td></tr>{{/b.bits}}
{{#b.confirmations}}<tr><td ><strong>Confirmations</strong></td><td>{{confirmations}}</td></tr>{{/b.confirmations}}
{{#b.difficulty}}<tr><td ><strong>Difficulty</strong></td><td>{{difficulty}}</td></tr>{{/b.difficulty}}
{{#b.hash}}<tr><td ><strong>Hash</strong></td><td><a href="/explorer/hash/{{b.hash}}">{{b.hash}}</a></td></tr>{{/b.hash}}
{{#b.height}}<tr><td ><strong>Height</strong></td><td><a href="/explorer/b/{{b.height}}">{{b.height}}</a></td></tr>{{/b.height}}
{{#b.merkleroot}}<tr><td ><strong>Merkle root</strong></td><td>{{merkleroot}}</td></tr>{{/b.merkleroot}}
{{#b.nextblockhash}}<tr><td ><strong>Next block hash</strong></td><td><a href="/explorer/hash/{{b.nextblockhash}}">{{b.nextblockhash}}</a></td></tr>{{/b.nextblockhash}}
{{#b.nonce}}<tr><td ><strong>Nonce</strong></td><td>{{b.nonce}}</td></tr>{{/b.nonce}}
{{#b.pow_algo}}<tr><td ><strong>POW algo</strong></td><td>{{b.pow_algo}}</td></tr>{{/b.pow_algo}}
{{#b.pow_algo_id}}<tr><td ><strong>POW algo id</strong></td><td>{{b.pow_algo_id}}</td></tr>{{/b.pow_algo_id}}
{{#b.pow_hash}}<tr><td ><strong>POW hash</strong></td><td>{{b.pow_hash}}</td></tr>{{/b.pow_hash}}
{{#b.previousblockhash}}<tr><td ><strong>Previous block hash</strong></td><td><a href="/explorer/hash/{{b.previousblockhash}}">{{b.previousblockhash}}</a></td></tr>{{/b.previousblockhash}}
{{#b.size}}<tr><td ><strong>Size</strong></td><td>{{b.size}}</td></tr>{{/b.size}}
{{#b.time}}<tr><td ><strong>Time</strong></td><td>{{b.time}}</td></tr>{{/b.time}}
{{#b.version}}<tr><td ><strong>Version</strong></td><td>{{b.version}}</td></tr>{{/b.version}}
{{#b.tx}}<tr><td><strong>TXs</strong></td><td><ul class="txs">
{{#b.tx}}<a href="/tx/{{.}}">{{.}}</a>{{/b.tx}}</ul></td></tr>{{/b.tx}}
</tbody></table>
{{/b}}
</div>
<div class="wtxs">
  <h4>Transactions</h4>
<div class="wtxw">
  {{#t}}
	<table class="table table-hover"><tbody>
{{#t.blockhash}}<tr><td ><strong>Block hash</strong></td><td><a href="/explorer/hash/{{t.blockhash}}">{{t.blockhash}}</a></td></tr>{{/t.blockhash}}
{{#blocktime}}<tr><td ><strong>Block time</strong></td><td>{{blocktime}}</td></tr>{{/blocktime}}
{{#confirmations}}<tr><td ><strong>Confirmations</strong></td><td>{{confirmations}}</td></tr>{{/confirmations}}
{{#hex}}<tr><td ><strong>Hex</strong></td><td>
  
      <small>{{hex}}</small>


</td></tr>{{/hex}}
{{#locktime}}<tr><td ><strong>Locktime</strong></td><td>{{locktime}}</td></tr>{{/locktime}}
{{#time}}<tr><td ><strong>Time</strong></td><td>{{time}}</td></tr>{{/time}}
{{#txid}}<tr><td ><strong>TXid</strong></td><td>{{txid}}</td></tr>{{/txid}}
{{#version}}<tr><td ><strong>Version</strong></td><td>{{version}}</td></tr>{{/version}}
{{#vin}}<tr> <td ><strong>Value in</strong></td><td>{{#vin}}{{#coinbase}}<strong>Coinbase: </strong><small>{{coinbase}}</small><br>{{/coinbase}}{{#sequence}}<strong>Sequence: </strong>{{sequence}}{{/sequence}}{{/vin}}</td></tr>{{/vin}}
{{#vout}}<tr><td ><strong>Value out</strong></td><td>{{#vout}}{{#n}}<strong>N: </strong>{{n}} {{/n}}<br>
{{#scriptPubKey}}{{#addresses}}<strong>Addresses: </strong><a href="/explorer/addr/{{.}}">{{.}}</a> {{/addresses}}<br>
{{#asm}}<strong>ASM: </strong><small>{{asm}}</small>{{/asm}}<br>
{{#hex}}<strong>hex: </strong>{{hex}} {{/hex}}<br>
{{#reqSigs}}<strong>ReqSigs: </strong>{{reqSigs}} {{/reqSigs}}<br>
{{#type}}<strong>Type: </strong>{{type}} {{/type}}<br>
{{/scriptPubKey}}<hr>
{{#value}}<strong>Value: </strong>{{value}} {{/value}}<br>{{/vout}}</td></tr>{{/vout}}
</tbody>
</table>
{{/t}}</div>
</div></template>`'></amp-list>
  </article>
    

  <!-- <button on="tap:{{txid}}">Click to see hex</button>
<amp-lightbox id="{{txid}}" layout="nodisplay" class="pnl pnlbg lbx">
      <small>{{hex}}</small>
    <button on="tap:{{txid}}.close">Close</button>
</amp-lightbox> -->
</template>


<script>

import AmpTemplate from '@/components/amp/AmpTemplate.js'
export default {
  components: {
    AmpTemplate,
  },

    props: {
    slug:String,
    lastblock:Number
     }
}
</script>

