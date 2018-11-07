<template>
<div class="flx fcl fii pnlbg"><h3 class="pnlhd pnlh">{{name}} Specifications</h3>
<div class="padd pnlbg">


<table class="table">
<tbody>
  <tr><td>Name</td><td>{{name}}</td></tr>
  <tr><td>Symbol</td><td>{{symbol}}</td></tr>
  <tr><td>Start Date</td><td>{{cdata.start}}</td></tr>
 <tr><td>Twitter</td><td>{{cdata.tw}}</td></tr> 
  <tr><td>Website Url</td><td>{{cdata.web}}</td></tr>

<tr><td>Algorithm</td><td>{{algo}}</td></tr>
<tr><td>Total Coin Supply</td><td>{{cdata.total}}</td></tr>
<tr><td>Difficulty Adjustment</td><td>{{cdata.diff}}</td></tr>
<tr><td>Block Reward Reduction</td><td>{{cdata.rew}}</td></tr>
<tr><td>Proof Type</td><td>{{cdata.proof}}</td></tr>
</tbody></table>

</div></div>
</template>
      
    



<script>


export default {
  components: {

},

    props: {
    slug:String,
    algo:String,
    symbol:String,
    name:String,
        cdata:Object
  }
}
</script>