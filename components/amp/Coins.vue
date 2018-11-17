<template>
<div class="flx frw fwr coins">
    <button v-for="(coin, slug) in coins" :key="slug" :name="coin.name" :on="'tap:AMP.navigateTo(url=\'https://' + coin.slug +  '.com-http.us/\')'" class="flx fcl fooa coin" >
    <amp-img layout="fixed" :src="'data:image/png;base64, ' + coin.img"  width="32px" height="32px" :alt="coin.name"/>
    </button>  
  </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
    name: 'coins',
  components: {
    axios,
  },
     props: {
    coins:Array
  },

}
</script>



<style>
.coins{
justify-content: center;
align-items: center;
}

.coin{
  width: 38px;
height: 38px;
margin: 3px;
padding: 3px;
background: #fff;
}
.coin:hover{
  background: #303030;
  box-shadow: 0 0 0 2px #30cf30;
}
</style>
