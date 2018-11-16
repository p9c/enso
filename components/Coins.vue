<template>
  <section class="lyt">
    <div class="pnl cnt ">

        <amp-lightbox id="coins" layout="nodisplay">
    <div class="lightbox" on="tap:my-lightbox.close" role="button" tabindex="0">
  
<amp-iframe 
    sandbox="allow-scripts allow-same-origin"
    layout="flex-item"
    frameborder="0"
    src="https://com-http.us/coins">
</amp-iframe>

    </div>
  </amp-lightbox>
  
  <button class="ampstart-btn caps m2" on="tap:coins" role="button" tabindex="0">All Coins Madness!!!</button>


    </div>
</section>
</template>




<script>

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