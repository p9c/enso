<template>
<div class="pnl pnlbg"><h3>{{name}} Basics</h3>
<div class="cnt " id="coin-basics"><table><tbody>
<tr><td>Algorithm</td><td>{{algo}}</td></tr>
<tr><td>Total Coin Supply</td><td>{{cdata.total}}</td></tr>
<tr><td>Difficulty Adjustment</td><td>{{cdata.diff}}</td></tr>
<tr><td>Block Reward Reduction</td><td>{{cdata.rew}}</td></tr>
<tr><td>Proof Type</td><td>{{cdata.proof}}</td></tr>
</tbody></table></div></div></template>

<script>

import AmpTemplate from '@/components/amp/AmpTemplate.js'
export default {
  components: {
    AmpTemplate,
  },

    props: {
    name:String,
    cdata:Object
      }
}
</script>
