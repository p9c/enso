<template>
<div class="scs flx fcl">
<CoinBgImage id="coinbg" :slug="slug" :name="name" />
<Header page="Beyond BlockChain" :slug="slug" :name="name" />


<main class="scr fwh flx fcl fii padd main">
<slot />
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
import CoinBgImage from '~/components/elements/CoinBgImage.vue'
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
    CoinBgImage,
    Header,
    Footer,
    Explorer
  },
  props: {
    currentPage: String,
    slug:String,
    name:String,
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
