<template>
    <div class="card-stack">
        <card v-for="card in cards" :key="card.id"
        v-bind:card="card"
     @changeCard="$emit('changeCard', card)"/>
    </div>
</template>
<script>
import Card from "@/components/Card";
export default {
  name: "CardStack",
  components: { Card },
  computed: {
    cards() {
      return this.$root.$data.cards;
    }
  }
}
</script>
<style lang="scss">
.card-stack {
    margin: 2rem 0 12rem;
    display: grid;
    grid-auto-rows: 4rem;
    .card{
        overflow: hidden;
        transform: scale(1);
         &:hover {
      transform: scale(1.03);
      box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0),
        0 1px 15px 0 rgba(0, 0, 0, 0.19);
    }
    }
}
</style>
