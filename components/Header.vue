<template>
  <header class="scr hds">
 <Title
      page="BlockChain Explorer"
      :slug="slug"      
      :name="name" />
        <Navigation />
 
  </header>
</template>


<script>

import Title from '@/components/amp/Title.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  components: {
    Title,
    Navigation
  },
    props: {
      page:String,
    slug:String,
    name:String
  }
}
</script>