<template>
<amp-iframe :title="name +' Trends - Interest over time'"  :src="'https://trends.google.com/trends/embed/explore/TIMESERIES?req=%7B%22comparisonItem%22%3A%5B%7B%22keyword%22%3A%22' + slug + '%22%2C%22geo%22%3A%22%22%2C%22time%22%3A%22today%2012-m%22%7D%5D%2C%22category%22%3A0%2C%22property%22%3A%22%22%7D&tz=-120&eq=q%3D' + slug + '%26date%3Dtoday%2012-m'"      height="360"    width="auto"  layout="flex-item"  frameborder="0"  sandbox="allow-scripts allow-same-origin"><amp-img :src="'//i.com-http.us/' +slug+  '/128'" width="128px" height="128px" layout="fixed"  placeholder></amp-img></amp-iframe>
</template>


<script>

import AmpTemplate from '@/components/amp/AmpTemplate.js'
export default {
  components: {
    AmpTemplate,
  },

    props: {
    slug:String,
    name:String
  }
}
</script>


