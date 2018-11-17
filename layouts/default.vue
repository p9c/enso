<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
:root {
--blue: #3075cf;
--light-blue: #30a5cf;

--green: #30cf30;
--orange: #ff7500;
--yellow: #ffd500  ;
--red: #cf3030;
--purple: #cf30cf;

--dark: #303030;
--dark-gray:#4d4d4d;
--gray:#808080;
--light-gray:#c0c0c0;

	--base:#cfcfcf;
--light:#c3c3c3;
  --lighter: #f3f3f3;
  --extra-light: #fcfcfc;

  --border-light: rgba(255, 255, 255, .62);
  --border-dark: rgba(0,0,0, .38);

  --trans-light: rgba(255, 255, 255, .24);
  --trans-dark: rgba(0,0,0, .24);
  --trans-gray: rgba(48,48,48, .38);

  --text:'Ubuntu';
  --name:'Abel';
  --title:'Ubuntu';
  --big-title:'Vollkorn SC';
    
  --pri: var(--blue);
  --sec: var(--light-blue);
}





html{
  font-family: var(--text), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after{
  position: relative;
  box-sizing: border-box;
  margin: 0;
}

body{
  color: 	 var(--base);
    background:  var(--dark-gray);
}





/* GRID */



.scs{
  width:100%;
  height:100vh;
  padding: 10px 5px;
  overflow: hidden;
}
.scr{
  position:relative;
    width:100%;
    height:100%;
    background:  var(--trans-gray);
    border: 1px solid var(--trans-light);
    border-radius: 1px;
}
.hds{
  height:60px;
}
.fts{
  height:38px;
   transition: all 62ms ease-in;
}

.fts:hover{
  height:62px;
  transition: all 38ms ease-in;
}

main.main{
  position: relative;
  margin: 10px 0;
  padding: 30px 15px;
    flex: 1;
    justify-content: flex-start; 
    /* align-items: stretch; 
    align-content: stretch;  */
    overflow-y: auto;
overflow-x: hidden;
    border-radius: 1px;
}



.mwo{
max-width: 300px;
}

.mwt{
max-width: 600px;
}


/* GRID HELP */ 
.flx{
  display: flex;
}
.iflx{
  display: inline-flex;
}

.foi{
  flex: 0;
}
.fii{
  flex: 1;
}
.ftw{
  flex: 2;
}
.fte{
  flex: 3;
}
.fooa{
  flex: 0 0 auto;
}
.fioa{
  flex: 1 0 auto;
}
.foia{
flex:0 1 auto;
}
.frw{
  flex-direction: row;
}
.fcl{
  flex-direction: column;
}
.fwr{
  flex-wrap: wrap;
}
.fjcsb{
  justify-content: space-between;
}.fjcc{
  justify-content: center;
}
.fai{
  align-items: center;
}



.fwh{
  width: 100%;
  height: 100%;
}


/* HELP */
.marm{
  margin: 5px;
}
.mars{
  margin: 10px;
}
.mar{
  margin: 15px;
}
.marg{
  margin: 20px;
}
.mard{
  margin: 30px;
}
.mrbt{
  margin-bottom: 30px;
}
.padm{
  padding: 5px;
}
.pads{
  padding: 10px;
}
.pad{
  padding: 15px;
}
.padb{
  padding: 20px;
}
.padd{
  padding: 30px;
}

.pdbt{

}
ul{
  padding: 0;
  list-style: none;
}



/* TYPO */


a {
  color: #3075cf;
  outline: 0;
  text-decoration: none;
}

a:focus {
  box-shadow: 0 0 0 .1rem rgba(87,85,217,.2);
}

a.active,a:active,a:focus,a:hover {
  color: var(--dark-gray);
  text-decoration: none;
}

h1,h2,h3,h4,h5,h6 {
       font-family:  var(--titles);
  color: inherit;
  font-weight: 500;
  line-height: 1;
  margin:0;
}
.h1,.h2,.h3,.h4,.h5,.h6 {
  font-weight: 500;
}
.h1,h1 {
  font-size: 32px;
}
.h2,h2 {
  font-size: 28px;
}
.h3, h3 {
  font-size: 24px;
}
.h4,h4 {
  font-size: 18px;
}

.h5, h5 {
    font-size: 16px;
}

.h6,h6 {
  font-size: 14px;
}

p {
  margin: 0 0 1rem;
}


small {
  font-size: 80%;
  font-weight: 400;
  word-break: break-all;
}


/* BUTTONS */ 
ul.sts {
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: row;
  box-shadow:
  0px -1px 1px 0px var(--trans-dark);

}
ul.sts li{
  display: flex;
  flex: 1;
  flex-direction: column;
}
ul.sts li button{
  flex:1;
  padding: 25px 0 20px;
  transition: all 111ms ease-in;
  font-size:16px;
  color: var(--dark-gray);
  text-align: center;
  justify-content: center;
  align-items: center;
border: none;
  background: var(--base);
  cursor: pointer;

  transition: box-shadow 111ms ease-in;
  }

  ul.sts li button:hover{
    padding: 22px 0 20px;
    color: var(--lighter);
    transition: all 99ms ease-in;
    transition: box-shadow 77ms ease-in;
    }
  
  ul.sts li button.orange{
    box-shadow:inset 0 0px 0px  var(--dark), inset 0 5px 0 var(--orange);
}
ul.sts li button.orange:hover{
  box-shadow:  inset 0 5px 10px  var(--dark),inset 0 99px 0 var(--orange);
}
ul.sts li button.red{
        box-shadow: inset 0 0px 0px  var(--dark), inset 0 5px 0 var(--red);
}
ul.sts li button.red:hover{
      box-shadow:  inset 0 5px 10px  var(--dark), inset 0 99px 0 var(--red);
}
ul.sts li button.green{
  box-shadow:inset 0 0px 0px  var(--dark), inset 0 5px 0 var(--green);
}
ul.sts li button.green:hover{
    box-shadow:  inset 0 5px 10px  var(--dark),inset 0 99px 0 var(--green);
}
ul.sts li button.blue{
  box-shadow:inset 0 0px 0px  var(--dark), inset 0 5px 0 var(--blue);
}
ul.sts li button.blue:hover{
    box-shadow:  inset 0 5px 10px  var(--dark),inset 0 99px 0 var(--blue);
}
ul.sts li button.light-blue{
  box-shadow:inset 0 0px 0px  var(--dark), inset 0 5px 0 var(--light-blue);
}
ul.sts li button.light-blue:hover{
    box-shadow:  inset 0 5px 10px  var(--dark),inset 0 99px 0 var(--light-blue);
}
 
ul.sts li button.purple{
  box-shadow:inset 0 0px 0px  var(--dark), inset 0 5px 0 var(--purple);
}
ul.sts li button.purple:hover{
    box-shadow:  inset 0 5px 10px  var(--dark),inset 0 99px 0 var(--purple);
}
ul.sts li button.yellow{
  box-shadow:inset 0 0px 0px  var(--dark), inset 0 5px 0 var(--yellow);
}
ul.sts li button.yellowblue:hover{
    box-shadow:  inset 0 5px 10px  var(--dark),inset 0 99px 0 var(--yellow);
}                 




/* HELP */

.plhd{
  width: 100%;
  height: 100%;
  background: #cfcfcf;
  justify-content: center;
  align-items: center;
}



/* BLOCKS */

.block{
  display: flex;
  flex: 1;
  flex-direction: column;
}

.block div[role="list"]{
display: flex;
height: 100%;
flex-direction: column;
flex: 1;
}
.block div[role="listitem"]{
display: flex;
height: 100%;
flex-direction: row;
flex: 1;
}
.blockdata{
  display: flex;
margin: 0 30px 0 0;
  flex: 1;
  flex-direction: column;
}
.wtxs{
  display: flex;
  flex: 1;
  flex-direction: column;
  
}

.block h4{
  background: var(--orange);
  color: var(--lighter);
}

.wtxw{
  display: flex;
  padding: 30px;
  flex: 1;
  flex-direction: column;
  overflow-y: auto;

  background: var(--light-gray);

  border-radius: 0 0 3px 3px;
  
  box-shadow: inset  0 0 5px 3px var(--trans-dark);
}

.wtxw h5{
  background: var(--light-blue);
  color: var(--lighter);
}


.lbx{
  min-width: 100%;
  width: 100%;
  margin: 0;
  justify-content: center;
  align-items: center;
  color: var(--dark);
  font-size: 2vh;
}
















/* PANELS */

.pnl{
  margin: 0 15px 30px;
  min-width: 300px;
border-radius: 1px;
transition: all 55ms ease-in;
}

.pnl.dbl{
  min-width: 600px;
}
.pnl.tpl{
  min-width: 900px;
}

.pnlbg{
background: #fcfcfc; /* Old browsers */
background: -moz-linear-gradient(top, rgba(252,252,252,.62) 62%, rgba(257,257,257,.62) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, rgba(252,252,252,.62) 62%,rgba(257,257,257,.62) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, rgba(252,252,252,.62) 62%,rgba(257,257,257,.62) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fcfcfc', endColorstr='#cfcfcf',GradientType=0 ); /* IE6-9 */
border: 1px solid var(--border-dark);
box-shadow: inset 1px 0 3px rgba(0,0,0,.9);
transition: all 55ms ease-in;
color: #303030;
}



.pnlbg:hover{
  box-shadow: inset 1px 0 1px rgba(0,0,0,.62);
  transition: all 33ms ease-in;
}
.pnlhd{
  margin: 0;
  padding:20px 30px 7px;

 border-bottom:  1px solid var(--trans-dark);
border-radius: 1px;
  background: rgba(48,48,48,.48);
  box-shadow: inset 1px 1px 1px rgba(243,243,243,.5);


justify-content: space-between;
align-items: center;

  margin: 0;

font-family: var(--title);
color: #404040;
  line-height: 1;
text-shadow: 0px 1px 0px rgba(243,243,243,.5);

}


/*****/


.bitnode header{
    box-shadow:  inset 0 5px 10px  var(--dark),inset 0 0px 0 var(--gray);
border: none;
  background: var(--light);
    color: var(--dark-gray);
  cursor: pointer;
    transition: all 162ms ease-out;

}

.bitnode header:hover{
    box-shadow:  inset 0 5px 10px  var(--dark),inset 0 99px 0 var(--gray);
        transition: all 62ms ease-in;

}
.bitnode h3 a{
  padding-left: 15px;
  color: var(--dark);
  text-shadow: 0 0px 0 var(--trans-light);
}
.bitnode header:hover, h3 a{
  text-shadow: 0 1px 0 var(--trans-light);
}


/* NAV */ 

.nav svg{
width: 100%;
width: 100%;
max-height: 100%;
background-color: rgba(48,48,48, .62);
}
.nav span{
display: none;
}
.nav svg:hover{
  box-shadow: inset 0 0 2px 1px rgba(30,30,30,.62);
}

/* SEARCH */



.tps input{
  padding-left: 30px;
  font-size: 14px;
  line-height: 20px;
  border: none;

      justify-content: center;
    align-items: center;
}
.sfi {
  background: var(--base);
   color: #c0c0c0;
    
}
.sfi:focus {
  background: var(--lighter);
   color: #4d4d4d;
    
}
.sbt{
  border-radius: 0 5px 5px 0;

background-color:var(--blue); 
color: #cfcfcf; 

  text-align: center;
  
}

 /* FX */

 .animbg , .animhbg:hover{
-webkit-animation:change-color 111s ease 11s infinite normal;
-moz-animation:change-color 111s ease 11s infinite normal;
-ms-animation:change-color 111s ease 11s infinite normal;
animation:change-color 111s ease 11s infinite normal;
}

@-webkit-keyframes change-color {
0%{ background-color:var(--blue); color: #cfcfcf; }
9%{ background-color: var(--base); color:#303030;}
15%{ background-color:var(--dark); color: #c3c3c3; }
22%{ background-color:var(--light); color:#303030; }
32%{ background-color:var(--light-blue); color: #c0c0c0; }
42%{ background-color:var(--blue) ;color: #c3c3c3;}
52%{ background-color:var(--red); }
62%{ background-color:var(--green); }
72%{ background-color:var(--dark); color: #c0c0c0}
82%{ background-color:var(--orange);color: #4d4d4d;}
90%{ background-color:var(--yellow);color: #808080;}
93%{ background-color: var(--base); color:#303030;}
99%{ background-color:var(--blue); color: #cfcfcf; }
}

@keyframes change-color {
0%{ background-color:var(--blue); color: #cfcfcf; }
9%{ background-color: var(--base); color:#303030;}
15%{ background-color:var(--dark); color: #c3c3c3;}
22%{ background-color:var(--light);color:#303030; }
32%{ background-color:var(--light-blue) ; color: #c0c0c0;}
42%{ background-color:var(--blue); color: #c3c3c3; }
52%{ background-color:var(--red); }
62%{ background-color:var(--green) ;}
72%{ background-color:var(--dark); color: #c0c0c0; }
82%{ background-color:var(--orange); color: #4d4d4d;}
90%{ background-color:var(--yellow);color: #808080; }
93%{ background-color: var(--base); color:#303030;}
99%{ background-color:var(--blue); color: #cfcfcf; }
}


.table {
  border-collapse: collapse;
  border-spacing: 0;
  text-align: left;
  width: 100%;
}
.table.table-striped tbody tr:nth-of-type(odd) {
  background: #cfcfcf;
}
.table tbody tr.active,.table.table-striped tbody tr.active {
  background: #f0f1f4;
}
.table.table-hover tbody tr:hover {
  background: #f0f1f4;
}
.table.table-scroll {
  display: block;
  overflow-x: auto;
  padding-bottom: .75rem;
  white-space: nowrap;
}
.table td,.table th {
  border-bottom: .05rem solid #e7e9ed;
  padding: .6rem .4rem;
}
.table th {
  border-bottom-width: .1rem;
}


</style>
