<template>
<div class="scs flx fcl">
<!-- <CoinBgImage id="coinbg" :src="'data:image/png;base64, ' + imgs.img256" :alt="name + ' BackGround'"/> -->
<Header page="Beyond BlockChain" :slug="slug" :name="name" />

<main class="scr fwh flx fcl fii padd main">



<section class="flx fcl fii index">


<AppNavContent option="info">
        <Info :slug="slug" :name="name" :symbol="symbol" :algo="algo" :cdata="cdata" />
</AppNavContent>

<AppNavContent selected option="explorer">
      <Explorer :slug="slug" :symbol="symbol" :name="name" :algo="algo" :lastblock="lastblock" />
</AppNavContent>

<AppNavContent option="network">
      <Network :slug="slug" :name="name" />
</AppNavContent>

<AppNavContent option="eco">
      <Eco :slug="slug" :name="name" />
</AppNavContent>




</section>
</main>




<Footer />
</div>
</template>


<script>

// import SiteTitleBar from '~/components/SiteTitleBar.vue'
import AppNavBar from '~/components/elements/AppNavBar.vue'
import AppNavButton from '~/components/elements/AppNavButton.vue'
import AppNavContent from '~/components/elements/AppNavContent.vue'
// import HeroImage from '~/components/HeroImage.vue'
import DescriptionPanel from '~/components/elements/DescriptionPanel.vue'
import axios from '~/plugins/axios'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Explorer from '@/components/pages/Explorer.vue'




export default {
  components: {
    // SiteTitleBar,
    AppNavBar,
    AppNavButton,
    AppNavContent,
    DescriptionPanel,
    Header,
    Footer,
    Explorer
  },
  props: {
    currentPage: String,
    slug:String,
    name:String,
        algo:String,
        symbol:String,
        cdata:Object,
        lastblock:Number
  }
}

</script>


<style>

body {
  font-family: Helvetica, sans-serif;
  border: 0;
  margin: 0;
  padding: 0;
}

p + p {
  margin-top: .5rem;
}

.svg-icon-size {
  width: 48px;
  height: 48px;
}

.home-page {
  z-index: 0;
}

main {
  /*max-width: 600px;*/
  margin: auto;
}

.app__anchor_to_bottom {
  position: fixed;
  bottom: 90px;
  width: 100%;
  z-index: 0;
}

</style>
