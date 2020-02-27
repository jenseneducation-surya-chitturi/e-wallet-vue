<template>

  <div class="about">
   <h1>ADD NEW CARD</h1>
<h4>NEW CARD</h4>
   <Card/>
    <CardForm/>
        <Top/>
      
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
  }
  }


</script>

<style lang="scss">

.about{
  background-color: blue;
}
</style>
