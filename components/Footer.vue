<template>
  <footer class="scr fnv">
 <ul class="flx qbtns">
      <li><button src="/" class="top-half left-half animbg">
        <svg class="svg" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
    <polygon fill="#c0c0c0" points="39.4,23 38.6,19 26,21.6 26,8 22,8 22,20.3 8.1,11.3 5.9,14.7 21.1,24.5 9.4,39.8 12.6,42.2 23.9,27.4 32.3,40.1 35.7,37.9 27.3,25.4"/>
    <circle fill="#3075cf" cx="24" cy="24" r="7"/>
    <g fill="#30a5cf">
        <circle cx="24" cy="8" r="5"/>
        <circle cx="39" cy="21" r="5"/>
        <circle cx="7" cy="13" r="5"/>
        <circle cx="11" cy="41" r="5"/>
        <circle cx="34" cy="39" r="5"/>
    </g>
</svg>

        <span>Info</span>
      </button></li>

      <li><button  src="/explorer"  class="top-half left-half animbg">
        
        <svg class="svg" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
    <g fill="#cf75cf">
        <path d="M38,7H10C8.9,7,8,7.9,8,9v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2V9C40,7.9,39.1,7,38,7z"/>
        <path d="M38,19H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,19.9,39.1,19,38,19z"/>
        <path d="M38,31H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,31.9,39.1,31,38,31z"/>
    </g>
</svg>
        <span>Block Explorer</span>
      </button></li>

      <li><button src="/network"  class="top-half left-half animbg">


        <svg class="svg" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
    <path fill="#00BCD4" d="M24,6C14.1,6,6,14.1,6,24s8.1,18,18,18c5.2,0,9.9-2.2,13.1-5.7L24,24V6z"/>
    <path fill="#448AFF" d="M42,24c0-9.9-8.1-18-18-18v18H42z"/>
    <path fill="#3F51B5" d="M24,24l13.1,12.3c3-3.2,4.9-7.5,4.9-12.3H24z"/>
</svg>


        <span>Network</span>
      </button></li>

      <li><button src="/price" class="top-half animbg">
        <svg class="svg" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
    <path fill="#ff7500" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"/>
    <path fill="#ffd500" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"/>
</svg>
         <span>Price</span>
      </button></li>

      <li><button src="/ecosystem" class="top-half animbg">
        <svg class="svg" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
    <path fill="#ff7500" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"/>
    <path fill="#ffd500" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"/>
</svg>
        <span>EcoSystem</span>
      </button></li>
      <li><button src="/ecosystem" class="top-half animbg">
        <svg class="svg" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
    <path fill="#ff7500" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"/>
    <path fill="#ffd500" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"/>
</svg>
        <span>EcoSystem</span>
      </button></li>

  </ul>

                                
                                  </footer>
</template>


<script>




export default {
    name: 'footer',
  components: {

},
       props: {
    // slug:String,
    // name:String,
    // lastblock:Number
  },
}
</script>

<style>






html {
  height: 100%;
  overflow: hidden;
  background: #777;
}
body {
  margin: 150px 0 0;
  height: 100%;
  overflow-y: scroll;
  font-family: sans-serif;
  font-size: 16px;
  perspective: 350px;
}
footer.fnv{
  max-height: 128px;
}
ul.qbtns {
  display:flex;
  padding:50px;
  
  width: 100%;
    justify-content: space-around;
    
  transform-style: preserve-3d;
  list-style:none;
}
.qbtns li{
  display:inline-flex;
  padding:10px;
  flex:1;
    justify-content: space-around;
    
}


.qbtns button {
  position: relative;
  display: flex;
  flex:1;
  padding: 4px 16px;
  border: 0;
  min-width: 48px;
  margin: 10px;
  font-size: 24px;
  font-weight: bold;
  background-color: #aad1ee;
  background-image: radial-gradient(ellipse at top, rgba(255, 255, 255, 0.15) 50%, rgba(0, 0, 0, 0));
  color: #222;
  transform-style: preserve-3d;
  transform: translateZ(18px);
  cursor: pointer;
  user-select: none;
  /* double colon syntax for pseudo elements because IE8 doesn't need to see them (no transforms) */
  /* pushing the button down; done with animations with steps because transitions are too buggy and jumpy */
}
.qbtns button:focus {
  outline: none;
}
.qbtns button::before, .qbtns button::after {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #4098d9;
  transform-origin: 0% 0%;
}
.qbtns button::before {
  content: "";
  height: 18px;
  background: #6aafe1;
  transform: rotateX(-90deg);
}
.qbtns button::after {
  content: "";
  width: 18px;
  transform: rotateY(90deg);
}
.qbtns button.top-half::before {
  top: auto;
  bottom: 0;
  background: #267ebf;
  transform-origin: 100% 100%;
  transform: rotateX(90deg);
}
.qbtns button.left-half::after {
  left: auto;
  right: 0;
  transform-origin: 100% 100%;
  transform: rotateY(-90deg);
}
.qbtns button:active {
  animation: button 80ms steps(20) both;
}
.qbtns button:active::before {
  animation: buttonbefore 80ms steps(20) both;
}
.qbtns button:active::after {
  animation: buttonafter 80ms steps(20) both;
}

@keyframes button {
  to {
    transform: translateZ(9px);
  }
}
@keyframes buttonbefore {
  to {
    height: 9px;
  }
}
@keyframes buttonafter {
  to {
    width: 9px;
  }
}
/* hide pseudo elements in IE9 and IE10 (no 3D transforms) */
@media screen and (min-width: 0\0) {
  .qbtns button::before, .qbtns button::after {
    display: none;
  }
}
/* hide pseudo elements in non-webkit Opera) */
x:-o-prefocus, .qbtns button::before, .qbtns button::after {
  display: none;
}


</style>