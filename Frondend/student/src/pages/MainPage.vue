<template>
  <div>
    <BennerImage class="img"></BennerImage>
    <BtnAdd></BtnAdd>
    <div class="card">
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import BennerImage from "@/components/BennerImage.vue";
import BtnAdd from "@/components/BtnAdd.vue";
import Footer from "@/components/Footer.vue";
import Card from "../components/Card.vue";

export default {
  name: "MainPage",
  components: {
    BennerImage,
    BtnAdd,
    Card,
    Footer,
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: none;
}
</style>