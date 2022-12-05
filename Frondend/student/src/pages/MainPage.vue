<template>
  <div class="">
    <BennerImage class="img"></BennerImage>
    <BtnAdd></BtnAdd>
    <div class="d-flex flex-wrap col-4">
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

<style>
</style>