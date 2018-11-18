<template><div class="flx frw fwr coins">
    <button v-for="(coin, slug) in coins" :key="slug" :name="coin.name" :on="'tap:AMP.navigateTo(url=\'https://' + coin.slug +  '.com-http.us/\')'" class="coin" >
    <amp-img layout="fixed" :src="'data:image/png;base64, ' + coin.img"  width="32px" height="32px" :alt="coin.name"/>
    </button>  
  </div></template>
<script>
export default {
     props: {
    coins:Array
  },
}
</script><style>
.coins{
justify-content: center;
align-items: center;
  transition: all 24ms ease-in;

}
.coin{
  width: 38px;
height: 38px;
margin: 0;
padding: 0;
background: #fff;
  transition: all 62ms ease-in;

}

.coins:hover .coin{
  opacity: .76;
    transition: all 18ms ease-in;

}
.coins .coin:hover{
  opacity: 1;
  background: #303030;
  box-shadow: 0 0 0 2px #30cf30;
  cursor: pointer;
    transition: all 62ms ease-out;

}
</style>
