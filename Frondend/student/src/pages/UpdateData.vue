<template>
  <div>
    <BennerImage></BennerImage>
    <Form></Form>
    <Footer></Footer>
  </div>
</template>

<script>
import BennerImage from "@/components/BennerImage.vue";
import Form from "@/components/Form.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "UpdateData",
  components: {
    BennerImage,
    Form,
    Footer,
  },
};
</script>

<style>
</style>