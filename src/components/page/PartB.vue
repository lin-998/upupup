<template >
    <div class="wrap">
        <div class="floor_value">{{$route.query.value}}</div>
        <div class="list_wrap">
<div v-for="(item,index) in data" :key="index" class="item" >
        <!-- <div class="select">
            <a-icon type="check-circle" />
        </div> -->
    
    <div class="item_title">{{item}}</div>
    <a-icon class="icon" type="right" />
    
        <!-- <div class="remove">
            remove
        </div> -->
    
</div>

        </div>
    </div>
</template>
<script>
export default {

    data() {
        return {
            flag:false,
            data:['Sitting Room','BedRoom1','BedRoom2','Toilet']
        }
    },
    created() {
        
        //console.log(this.$route.query.value)
    },
    methods: {
        selected(){
            this.flag=!this.flag;
        }
    },
}
</script>
<style lang="scss" >
.floor_value{
margin: 0.4rem 0 0.4rem 0;
}
.wrap{
background-color: #f9f9f9;
}
    .item{
        display: flex;
      justify-content: space-between;
      align-items: center;
     height: 2rem;
        padding: 0.4rem 0.4rem 0.4rem 0.4rem;
        background-color: #ffffff;
.item_title{
  
  
}
    }
</style>