<template>
    <div class="container">
      <div class="card flex m-2">
        <div class="card-header">Name</div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
            <div class="d-flex row">
              <router-link to="/update">
              <button href="#" class="btn btn-primary mr-3">Update</button>
            </router-link>
            <button href="#" class="btn btn-danger">Delete</button>
            <img class="logo-gender" src="../assets/male.png" alt="gender" />
            </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "CardS",
};
</script>

<style scoped>
.logo-gender {
  width: 40px;
  justify-content: flex-end;
  margin-left: 180px
}
</style>