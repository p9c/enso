<template>
  <section class="lyt iflx frw fii">
<amp-iframe 
    sandbox="allow-scripts"
    layout="fill"
    frameborder="0"
    src="https://com-http.us/coins" >
<BTCAnim /></amp-iframe>
</section>
</template>
<script>

import BTCAnim from '@/components/amp/BTCAnim.vue'
export default {
  components: {
    BTCAnim,
  },
  //      props: {
  //   coins:Array
  // },

}
 //   console.log(coins)

</script>


<style>
    .lightbox {
      background: rgba(0,0,0,0.8);
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .lightbox h1 {
      color: white;
    }

</style>
