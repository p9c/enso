<template>
<div class="pnl src">
  <form method="GET"  class="p4"  action="/explorer/search"  target="_top">
  <input type="text" class="flb"  placeholder="Search Height, Hash, TxID, Address"  name="chsrc">
  <input type="submit" value="Search" class="btn btn-primary"></form>
</div>
</template>


<script>
import AmpTemplate from '@/components/amp/AmpTemplate.js'
export default {
  components: {
    AmpTemplate,
  }
}
</script>







