<template>
  <div>
    <BennerImage></BennerImage>
    <router-link to="/">
      <button class="ml-3 btn btn-primary my-3">Back</button>
    </router-link>
    <Form></Form>
    <Footer></Footer>
  </div>
</template>
<script>
import BennerImage from "../components/BennerImage.vue";
import Form from "../components/Form.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "AddData",
  components: {
    BennerImage,
    Form,
    Footer,
  },
};
</script>

<style scoped>
</style>>