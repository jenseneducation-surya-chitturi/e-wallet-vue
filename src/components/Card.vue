<template>
  <div class="card">
     <div class="light">
      <img src="../assets/chip-light.svg" alt="chip" />


     </div>
     <!-- <div>
   <input type="text"><br>{{cardReg.cardNumber}}
   <h6>CARDHOLDER NAME</h6><input type="text"> <input type="text">{{cardReg.cardHolder}}
   <h5>VALID UNTIL</h5>{{cardReg.validThru}}
</div> -->
  </div>
</template>
<script>
export default {
   name:"Card"
}

</script>
<style lang="scss">
.card {
  width: 40%;
  height: 350px;
  background-color: grey;
  margin-left: 29%;
  border-radius: 12px;
}
.light {
  padding: 40px 0px 0px 60px;
}

</style>