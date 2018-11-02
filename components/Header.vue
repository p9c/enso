<template>
  <header class="scr hds frw">
 <Title
      page="BlockChain Explorer"
      :slug="slug"      
      :name="name" />
        <Navigation />
        <Search />
   </header>
</template>


<script>

import Title from '@/components/amp/Title.vue'
import Search from '@/components/Search.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  components: {
    Title,
    Search,
    Navigation
  },
    props: {
      page:String,
    slug:String,
    name:String
  }
}
</script>