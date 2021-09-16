<template >
    <div class="floor">
        <ul class="list_message">
          <li>Job NO:2020/20390/BOC</li>
          <li>Assigned Inspector:David Chow</li>
          <li>S9 Florrssa Park Giffard Mansion</li>
          <li>Florissa Park Giggard Mansion</li>
          </ul>
          <img src="../../assets/floor.png" alt="">
          <div><input v-model="inputValue" class="floor_input" type="text" placeholder="Floor Plan A"></div>
          <div class="btn_Mark" @click="goPartB"><span>Mark Inspection Spot</span></div>
          
    </div>
</template>
<script>
export default {
    data() {
        return {
            inputValue:'',
        }
    },
    created() {
        
    },
    computed:{

    },
    methods: {
          goPartB(){
              //console.log(this.inputValue);
              const value=this.inputValue;
this.$router.push(`PartB?value=${value}`)
      },
    },
}
</script>
<style lang="scss" scoped >
.floor{
margin: 0.2rem 0.2rem 0 0.2rem;
}
img{
    height: 5rem;
    width: 7rem;
border: 1px solid #e4e4e4;
}
.list_message{

}
.floor_input{
    display: block;
    border: none;
    height: 0.5rem;
    margin: 0.2rem 0 0.2rem 0;
}

    .btn_Mark{
        background-color: #fdde07;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 6.5rem;
        height: 0.9rem;
    }
</style>