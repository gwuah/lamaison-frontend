<template>
  <div class="manager">

    <nav class="navbar navbar-expand-md navbar-light bg-white absolute-top">
      <div class="container">

        <button class="navbar-toggler order-2 order-md-1" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse order-3 order-md-2" id="navbar">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown active">
              <router-link to='/manager/home'>Home</router-link>
            </li>
            <li class="nav-item dropdown">
              <router-link to='/manager/listing'>Listing</router-link>
            </li>
          </ul>
        </div>

        <a id="brand_name" class="navbar-brand mx-auto order-1 order-md-3" href="index.html">LAMAISON</a>

        <div class="collapse navbar-collapse order-4 order-md-4" id="navbar">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <router-link to='/manager/settings'>Settings</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Welcome, Gwuah</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view></router-view>

  </div>
</template>

<style scoped>
li a {
  margin-right: 20px;
}

li {
  line-height: 160px;
  margin-top: 10px;
}
#brand_name {
  margin-left: 20px;
}

#stats__container {
  margin-top: 60px;
}

@media print{
  .show{display: block}
  *,:after,:before{text-shadow:none!important;box-shadow:none!important;}
  a:not(.btn){text-decoration:underline;}
  .container{min-width:992px!important;}
  .navbar{display:none;}
  }
  *,:after,:before{box-sizing:border-box;}
  nav{display:block;}
  ul{margin-bottom:1rem;}
  ul{margin-top:0;}
  a{color:#007bff;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects;}
  a:hover{color:#0056b3;text-decoration:underline;}
  button{border-radius:0;}
  button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color;}
  button,input{margin:0;font-family:inherit;font-size:inherit;line-height:inherit;}
  button,input{overflow:visible;}
  button{text-transform:none;}
  button,html [type=button]{-webkit-appearance:button;}
  [type=button]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none;}
  .container{width:100%;padding-right:10px;padding-left:10px;margin-right:auto;margin-left:auto;}
  @media (min-width:576px){
  .container{max-width:540px;}
  }
  @media (min-width:768px){
  .container{max-width:720px;}
  }
  @media (min-width:992px){
  .container{max-width:960px;}
  }
  @media (min-width:1200px){
  .container{max-width:1220px;}
  }
  .order-1{order:1;}
  .order-2{order:2;}
  .order-3{order:3;}
  .order-4{order:4;}
  @media (min-width:768px){
  .order-md-1{order:1;}
  .order-md-2{order:2;}
  .order-md-3{order:3;}
  .order-md-4{order:4;}
  }
  .form-control{display:block;width:100%;padding:.375rem .75rem;font-size:.875rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;}
  @media screen and (prefers-reduced-motion:reduce){
  .form-control{transition:none;}
  }
  .form-control::-ms-expand{background-color:transparent;border:0;}
  .form-control:focus{color:#495057;background-color:#fff;border-color:#343a40;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25);}
  .form-control::-webkit-input-placeholder{color:#6c757d;opacity:1;}
  .form-control:-ms-input-placeholder,.form-control::-ms-input-placeholder{color:#6c757d;opacity:1;}
  .form-control::placeholder{color:#6c757d;opacity:1;}
  .form-control:disabled{background-color:#e9ecef;opacity:1;}
  .form-inline{display:flex;flex-flow:row wrap;align-items:center;}
  @media (min-width:576px){
  .form-inline .form-control{display:inline-block;width:auto;vertical-align:middle;}
  }
  .form-control-rounded{border-radius:1rem;}
  .form-control:focus{box-shadow:none;}
  .collapse:not(.show){display:none;}
  .dropdown{position:relative;}
  .dropdown-toggle:after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:"";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent;}
  .dropdown-toggle:empty:after{margin-left:0;}
  .nav-link{display:block;padding:.5rem 1rem;}
  .nav-link:focus,.nav-link:hover{text-decoration:none;}
  .navbar{position:relative;padding:.5rem 1rem;}
  .navbar,.navbar>.container{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;}
  .navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap;}
  .navbar-brand:focus,.navbar-brand:hover{text-decoration:none;}
  .navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none;}
  .navbar-nav .nav-link{padding-right:0;padding-left:0;}
  .navbar-nav {position:static;float:none;}
  .navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center;}
  .navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem;}
  .navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none;}
  .navbar-toggler:not(:disabled):not(.disabled){cursor:pointer;}
  .navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:"";background:no-repeat 50%;background-size:100% 100%;}
  @media (max-width:767.98px){
  .navbar-expand-md>.container{padding-right:0;padding-left:0;}
  }
  @media (min-width:768px){
  .navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start;}
  .navbar-expand-md .navbar-nav{flex-direction:row;}
  .navbar-expand-md .navbar-nav .dropdown-menu{position:absolute;}
  .navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem;}
  .navbar-expand-md>.container{flex-wrap:nowrap;}
  .navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto;}
  .navbar-expand-md .navbar-toggler{display:none;}
  }
  .navbar-light .navbar-brand,.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9);}
  .navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5);}
  .navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7);}
  .navbar-light .navbar-nav .active>.nav-link{color:rgba(0,0,0,.9);}
  .navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1);}
  .navbar-light .navbar-toggler-icon{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,0,0,0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");}
  .navbar{border-bottom:1px solid rgba(0,0,0,.1);}
  .navbar-brand{font-family:PT Serif,serif;text-transform:lowercase;font-weight:700;}
  .navbar,.navbar *{transition:all .25s ease-in-out;}
  .navbar .search{width:114px;}
  .navbar .search:focus{width:300px;content:"Type here";}
  @media (min-width:768px){
  .navbar-brand{font-size:2.5rem;}
  }
  a{transition:all .25s ease-in-out;}
  .bg-white{background-color:#fff!important;}
  .mr-auto,.mx-auto{margin-right:auto!important;}
  .ml-auto,.mx-auto{margin-left:auto!important;}
  @media (min-width:576px){
  .mr-sm-2{margin-right:.5rem!important;}
  }
  /*! CSS Used fontfaces */
  @font-face{font-family:'PT Serif';font-style:normal;font-weight:700;src:local('PT Serif Bold'), local('PTSerif-Bold'), url(https://fonts.gstatic.com/s/ptserif/v9/EJRSQgYoZZY2vCFuvAnt66qfVyvVp8NAyIw.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}
  @font-face{font-family:'PT Serif';font-style:normal;font-weight:700;src:local('PT Serif Bold'), local('PTSerif-Bold'), url(https://fonts.gstatic.com/s/ptserif/v9/EJRSQgYoZZY2vCFuvAnt66qWVyvVp8NAyIw.woff2) format('woff2');unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}
  @font-face{font-family:'PT Serif';font-style:normal;font-weight:700;src:local('PT Serif Bold'), local('PTSerif-Bold'), url(https://fonts.gstatic.com/s/ptserif/v9/EJRSQgYoZZY2vCFuvAnt66qcVyvVp8NAyIw.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}
  @font-face{font-family:'PT Serif';font-style:normal;font-weight:700;src:local('PT Serif Bold'), local('PTSerif-Bold'), url(https://fonts.gstatic.com/s/ptserif/v9/EJRSQgYoZZY2vCFuvAnt66qSVyvVp8NA.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}

</style>

<script>


export default {
  name: 'ManagerApplication',
  components: {
  },
  data() {
    return {
      activeView: 'home',
      dropdown3: true,
      dropdown4: false
    }
  },
  methods: {
    showOneHideRest() {

    }
  },

  mounted() {
    this.$router.push({name: 'Home'})
  }
}
</script>

