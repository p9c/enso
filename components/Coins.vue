<template>
  <section class="lyt">
    <div class="pnl cnt ">



   <button class="btn btn-pri caps m2" on="tap:coins" role="button" tabindex="0">
    All Coins Madness!!
  </button>
    </div>
</section>
</template>




<script>
import AmpTemplate from '@/components/amp/AmpTemplate.js'
import axios from '~/plugins/axios'

export default {
  components: {
    AmpTemplate,
    axios
  },
  async asyncData () {
    let { data } = await axios.get('http://com-http.us/json/index/coins.json')
  return { coins: data.coins }
  },
}
</script>

