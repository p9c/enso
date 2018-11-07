<template>
<div class="scs flx fcl">
    <Header page="Beyond BlockChain" />
 <main class="scr fwh flx fcl fii main">
   <section class="flx fcl fii index">
<Bitnodes  :bitnodes="bitnodes"  />
<Coins  />
     </section></main>
  <Footer /></div>
</template>

<script>
//import DescriptionPanel from '~/components/elements/DescriptionPanel.vue'
// import TabList from '~/components/TabList.vue'
// import TabButton from '~/components/TabButton.vue'
// import TabContent from '~/components/TabContent.vue'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Bitnodes from '@/components/Bitnodes.vue'
import Coins from '@/components/Coins.vue'
import axios from '~/plugins/axios'



export default {
    name: 'index',
  components: {
//    DescriptionPanel,
    
    axios,
    Header,
    Footer,
    Bitnodes,
    Coins
  },
  async asyncData () {
    let { data } = await axios.get('http://com-http.us/json/index/bitnodes.json')
  return { bitnodes: data.coins }
  },
  head () {
    return {
      title: 'Index'
    }
  }
}
</script>



<style>
body {
  font-family: Helvetica, sans-serif;
}

main {
  
  

}

p {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
