<template>
  <div>
    <div class="container">
      <div class="card flex m-2">
        <div class="card-header">Name</div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <router-link to="/update">
            <button href="#" class="btn btn-primary mr-3">Update</button>
          </router-link>
          <button href="#" class="btn btn-danger">Delete</button>
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

<style>
</style>