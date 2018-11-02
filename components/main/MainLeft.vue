<template><section class="sms sml">
 
 <Basics :slug="slug" :name="name" :cdata="cdata"  />


<Info :slug="slug" :name="name" />

<Specs :slug="slug" :name="name"  :algo="algo"  :symbol="symbol"  :cdata="cdata"  />


</section></template>


<script>


import Info from '@/components/amp/Info.vue'

import Specs from '@/components/amp/Specs.vue'

import Basics from '@/components/amp/Basics.vue'


export default {
  name: 'left',
    components: {
      Info,
    Specs,
    Basics,
   },
    props: {
    slug:String,
    name:String,
    symbol:String,
    algo:String,
     cdata:Object,
    }
}
</script>