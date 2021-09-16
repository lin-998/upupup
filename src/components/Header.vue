<template >
    <div>
        <div class="bar">
          <a-icon @click="back" type="left" class="left" />
          <div class="title">{{title}}</div>
         <span  @click="submit" class="iconfont icon-feiji " :class="flag?'switch1':'switch2'"></span>

      </div>
      <div class="nav">
           <a-menu v-model="current" mode="horizontal" class="tab">
      <a-menu-item key="mail" @click="goPartA"> <a-icon type="pic-left" /></a-menu-item>
      <a-menu-item key="app" @click="goFloor"> <a-icon type="border-outer" /> </a-menu-item>
 <a-menu-item key="partb" disabled > <a-icon type="pic-right" /></a-menu-item>
     
    </a-menu>
  
      </div> 
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
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
       back(){
    window.history.back(-1);
  }
    },
}
</script>
<style lang="scss" scoped>
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