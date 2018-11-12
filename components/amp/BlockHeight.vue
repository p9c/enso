<template>
<div class="flx frw foa fjcsb blh">
<h3 class="flx frw fii pnlh pnlhd">Block Height  </h3>
<input id="blockHeight-input" class="flx fii " type="number" min="0" :max="lastblock"  :placeholder="lastblock" :value="lastblock" [value]="blockHeight" on="input-throttled:AMP.setState({ blockHeight: event.value })">
</div>
</template>

<script>


export default {
  components: {
  },

    props: {
    slug:String,
    lastblock:Number
     }
}
</script>








<style>


input[type="number"] {
    border: none;
      padding: 15px 0 15px 30px;

        font-size: 2.6rem;

line-height:2.6rem;

}

input[type="number"]:focus {
    border: none;
    
}

input[type=number]::-webkit-inner-spin-button { 
	opacity: 1;
	width: 32px;
  height: 32px;
  padding: 18px;
  position: relative;
  border-radius: 58px;
	border: 10px solid #303030;
  background:#303030;
  /*
	-webkit-appearance: none;
    background: #eee url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAKUlEQVQYlWNgwAT/sYhhKPiPT+F/LJgEsHv37v+EMGkmkuImoh2NoQAANlcun/q4OoYAAAAASUVORK5CYII=") no-repeat 50% 50%; 
*/
     
}



/* Override browser form filling */
input:-webkit-autofill {
    background: black;
    color: red;
}




</style>