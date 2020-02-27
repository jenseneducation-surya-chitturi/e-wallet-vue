<template>
  <div class="home">
     <Card/>
    <CardStack/>
   
    <Top/>
    <h1>hello</h1>
    <button v-on:click="()=>$router.push('About')">Add Card</button>
  </div>
</template>

<script>
// @ is an alias to /src
import CardStack from '@/components/CardStack.vue'
import Top from '@/components/Top.vue'
import Card from '@/components/Card.vue'
export default {
  name: 'Home',
  components: {
    CardStack,
    Card,
    Top
  }
 

}
</script>
<style lang="scss">
.home{
  background-color:white;
}
</style>
