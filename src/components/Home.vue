<template >
    <div class="home_wrap">
      <div class="bar">
          <a-icon @click="back" type="left" class="left" />
          <div class="title">{{title}}</div>
         <button :disabled="disabled" class="subBtn" @click="submit"><span  class="iconfont icon-feiji " :class="flag?'switch1':'switch2'"></span></button>

      </div>
      <div class="nav">
           <a-menu v-model="current" mode="horizontal" class="tab">
      <a-menu-item key="mail" @click="goPartA"> <a-icon type="pic-left" /></a-menu-item>
      <a-menu-item key="app" @click="goFloor"> <a-icon type="border-outer" /> </a-menu-item>
 <a-menu-item key="oll" disabaled > <a-icon type="pic-right" /></a-menu-item>
     
    </a-menu>
  
      </div>
      <div class="child_router-view">
        <router-view></router-view>
        </div>
        <div class="cover" v-show="valid">
          <div>
    <a-spin tip="Submiting...">
    </a-spin>
  </div>
        </div>
    </div>
    
</template>
<script>
export default {

    data() {
    return {
      current: ['mail'],
      title:"Job Report-PartA",
      flag:false,
      valid:false,
      disabled:true,
    };
  },
  methods: {
      goFloor(){
this.$router.push('/Floor')
this.title="Floor Plan"
      },
      goPartA(){
this.$router.push('/PartA')
this.title="Job Report-PartA"
      },
    
        submit(){
this.flag=true;
this.valid=true;
  },
  back(){
    window.history.back(-1);
  }
  },
  watch:{
    $route(to,from){
if(to.path=='/PartB'){
  this.disabled=false;
  this.title="Job Report-PartB"
}if(to.path=='/PartA'){
  this.disabled=true;
}if(to.path=='/Floor'){
  this.disabled=true;
  this.title="Floor Plan"
}
    },
    valid(){
      setTimeout(() => {
        this.valid=false;
      }, 3000);
    }
  }
  
    

}
</script>
<style lang="scss" scoped>


.subBtn{
background-color: #ffffff;
border: none;
}

.cover{
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba($color: #2e3140, $alpha: 0.8);
 width: 100%;
 height: 100%;
 position: fixed;
 top: 0;
 bottom: 0;
}
.bar{
  margin-top: 20px;
    display: flex;
        justify-content: space-around;
        .title{
font-weight: 700;
        }
        .left{
          margin-right: 30px;
        }
        .icon-feiji{
          margin-left: 30px;
        
        }
        .switch2{
          opacity: 0.8;
        }
        .switch1{
opacity: 1;
cursor: pointer;
        }
}
    .nav{
      
        .tab{
            width: 100%;
              display: flex;
        justify-content: space-around;
        }
    }
</style>