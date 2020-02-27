import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data(){ return {
    cardReg: [
      {
        cardNumber:'9876 6565 4387 6543',
        cardHolder:'Olle Olofsson',
        validThru:'12/4',
        cvv:'521',
        vendor:'bitcoin'
      },
      {
        cardNumber:'9876 6565 4387 6543',
        cardHolder:'Olle Olofsson',
        validThru:'12/4',
        cvv:'521',
        vendor:'bitcoin'
      },
      {
        cardNumber:'9876 6565 4387 6543',
        cardHolder:'Olle Olofsson',
        validThru:'12/4',
        cvv:'521',
        vendor:'bitcoin'
      },
    ]
  }},

  render: h => h(App)
}).$mount('#app')
