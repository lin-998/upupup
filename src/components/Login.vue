<template >
    <div class="cover">
       <div class="box1"><span>test</span></div>
       <div class="box2"><span>Smart Inspection System</span></div>
       <div class="btn" @click="login"><span>login</span></div>
       <img  src="../assets/login.png" alt="">
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        login(){
this.$router.push('./home')
        },
    },
}
</script>
<style lang="scss" scoped>
img{
    width: 100%;
    height: 160px;
   margin-top: 120px;
   position: fixed;
   bottom: 0;
}
.cover{
   
   display: flex;
   flex-direction: column;
justify-content: center;
align-items: center;
}
.box1{
    margin-top: 100px;
      display: flex;
        justify-content: center;
align-items: center;
width: 20%;
height: 65px;
 background-color: #fdde07;
span{
    
font-size: 40px;
}
}
.box2{
    margin-top: 10px;
    margin-bottom: 10px;
      display: flex;
        justify-content: center;
align-items: center;
width: 80%;
height: 65px;
span{
    white-space:nowrap;
    line-height: 65px;
font-size: 25px;
font-weight: 400;
}
}
    .btn{
        display: flex;
        justify-content: center;
align-items: center;
    width: 80%;
        height: 40px;
        background-color: #fdde07;
        cursor: pointer;
        span{
            font-size: 30px;
        }
    }
</style>