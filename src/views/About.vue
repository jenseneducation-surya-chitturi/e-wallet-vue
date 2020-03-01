<template>

  <div class="about">
        <Top msg="Add New Card"/>
<h4>NEW CARD</h4>
   <Card v-bind:card="card" v-bind:class="card"/>
    <CardForm v-bind:card="card" @option="changeVendor"/>
      
     <button v-on:click="()=>$router.push('/')">Add Card</button>
    
  </div>
</template>

<script>
import CardForm from '@/components/CardForm.vue'
import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
export default {
  name: 'About',

   components: {
    CardForm,
    Card,
    Top
  },
  data: () => ({
    card: {
      id:Date.now(),
      chip: require("../assets/chip-light.svg"),
      cardNumber: "XXXX XXXX XXXX XXXX",
      cardHolder: "",
      month: "",
      year: "",
      vendor: "bitcoin",
      color:"#ccc"

    }
  })
 
  }


</script>

<style lang="scss">
body{
 display: block;
}
.about {
  width: 100%;
  margin: auto;
  padding: 2rem;
  max-width: 1000px;
  background: white;
}
h4{
  color:rgb(161, 152, 152)
}
button {
    width: 40%;
    padding: 20px;
    margin-top:25px;
    margin-right: 50px;
    border: 3px solid black;
    text-align: center;
    border-radius: 10px;
    color:black;
    transition: 0.7s;
    text-decoration: none;
    font-size: 20px;
    
    &:hover {
      color:white;
      background: #000;
      transition: 0.7s;
    
    
    }
  }
</style>
