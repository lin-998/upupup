<template >
    <div >
        <div class="nav">
            <div class="left_icon"><a-icon type="select" /></div>
            
         <div class="right_icon"><a-icon type="camera" /></div>
  
      </div>
      <div class="content_wrap">
      <ul class="list_message">
         <li>Job NO:2020/20390/BOC</li>
         <li>Assigned Inspector:David Chow</li>
         <li>S9 Florrssa Park Giffard Mansion</li>
         <li>Florissa Park Giggard Mansion</li>
          </ul>
          <div class="card1">
              <form action="">
   <h6>1a. Type of Building/Land Use</h6>

<ul class="card_list">
    <li>Resident</li>
    <li>Composite</li>
    <li>Industrial</li>
    <li>Office</li>
    <li>Retail</li>
    <li>Agricultural</li>
    <li>Others</li>
    <li><input type="text" placeholder="Please State" class="input"></li>
</ul>
</form>

 


          </div>
          <form action="">
                <h6>3.Composition</h6>
                <div class="composition">
                <div class="com com_input1">  <input  class="input1" type="text"><span>-storey</span></div>
                <div class="com com_input2">  <input  class="input2" type="text"><span>-purposes</span></div>
                <div class="com com_input3">  <input  class="input3" type="text"><span>-storey</span></div>
                <div class="com com_input4">  <input  class="input4" type="text"><span>-purposes</span></div>
                </div> 
                </form>
               
            
                      <form action="">
                           <h6>4.Facilities Provided</h6>
<input class="fa_input4" type="text " placeholder="Please state">
                  </form>    
                       <form action="">
                           <h6>5.Lifts</h6>
                           <div class="input_wrap">
                               <input class="lift_input1" type="text">
                               <div class="service"><input  class="lift_input2" type="text"><span>Service</span></div>
<div class="vehice"><input  class="lift_input3" type="text"><span>Vehice</span></div>
</div>
</form>
                 <div class="btn">
                     <div class="btn_left" @click="readOnly"><span>{{save}}</span></div>
                       <div @click="complete" class="btn_right"><span>Mark as Completed</span></div>
                     </div>   
                     </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
             current: ['mail'],
             save:"Save Only"
        }
    },
    methods: {
        complete(){
            this.$router.push('/Floor');
        },
        readOnly(){
this.save="Read Only"
        },
      
    },
}
</script>
<style lang="scss" scoped >
.switch_class{
    background-color: #fbe04b;
}
.content_wrap{
    padding: 0 0.4rem 0 0.8rem;
}
.nav{
    display: flex;
   
    justify-content: space-evenly;
    align-items: center;
      background: rgba($color: #2e3140, $alpha: 0.8);
      height: 1rem;
      .left_icon,.right_icon{
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 50%;
   &.left_icon:hover{
         
border-bottom: 4px solid  #fbe04b;
      } 
      &.right_icon:hover{
         
border-bottom: 4px solid  #fbe04b;
      }
      }
   
      
}
    .card_list{
        margin-top: 20px;
        li{
            
           
            line-height: 0.6rem;
            height: 0.6rem;
            padding-left: 0.6rem;
            margin-bottom: 0.04rem;
            background-color: #eeeeee;
        }
        li:nth-child(7){
           margin-bottom:0;
        }
        .input{
            height: 0.6rem;
        }
    }
    .card3{
      
    }
    .composition{
        display: grid;
      grid-template-columns: 1fr 2fr;
    
      grid-template-rows: 1fr 2fr ;
        .com{
            display: flex;
            justify-content: center;
            align-items: center;
           .input1,.input3{
            display: block;
            height: 0.8rem;
            width: 0.8rem;
        }
        .input2,.input4{
display: block;
            height: 0.8rem;
            width: 2rem;
        }
        }
        
    
    }
    .btn{
        display: flex;
        margin: 0.4rem 0 0 0;
        background-color: #ffffff;
        .btn_left{
        width: 3.5rem;
        height: 0.8rem;
        background-color: #252839;
        display: flex;
        justify-content: center;
        align-items: center;
      margin-right: 0.4rem;
      cursor: pointer;
      input{
          display: block;
          width: 100%;
      }
        span{
            color: #ffffff;
        }
    }
         .btn_right{
         width: 3.5rem;
        height: 0.8rem;
        background-color: #fdde07;
        display: flex;
        justify-content: center;
        align-items: center;
         cursor: pointer;
         span{
             white-space: nowrap;
         }
       
    }
    }
    
   
    .card4{
        margin-left: 0.4rem;
       
    }
    .fa_input4{
           display: block;
           width: 6rem;
           height: 1rem;
       }
    .card5{
   
      
    }
    .input_wrap{
        display: flex;
        justify-content: space-between;
.lift_input1, .lift_input2,.lift_input3{
display: block;
width: 0.8rem;
height: 0.8rem;
       }
      
       .service,.vehice{
           display: flex;
           justify-content: center;
           align-items: center;

       }
      
    }
        
</style>