import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data(){ return {
    cards: [
      {
        id:'1',
        cardNumber:'9876 6565 4387 6543',
        cardHolder:'Olle Olofsson',
        month:"2",
        year:"25",
        cvv:'100',
        vendor:'bitcoin',
        bgcolor:"yellow"
      },
      {
        id:'2',
        cardNumber:'3456 4749 7989 8989',
        cardHolder:'abdul kalam',
        month:"4",
        year:"25",
        cvv:'200',
        vendor:'ninja',
        bgcolor:"purple"
      },
      {
        id:'3',
        cardNumber:'6638 7388 4432 4843',
        cardHolder:'alex karls',
        month:"7",
        year:"25",
        cvv:'300',
        vendor:'evil',
        bgcolor:"grey"

      },
      {
        id:'4',
        cardNumber:'7245 2022 8482 4749',
        cardHolder:'max carlsson',
        month:"9",
        year:"25",
        cvv:'400',
        vendor:'blockchain',
        bgcolor:"brown"
      }
    ]
  }},
  mounted(){
    this.$root.$on("addcard", card =>{
      this.cards.push(card); 
    })
  },

  render: h => h(App)
}).$mount('#app')
