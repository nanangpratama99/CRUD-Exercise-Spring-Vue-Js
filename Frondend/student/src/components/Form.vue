<template>
  <div class="d-flex justify-content-around">
    <form class="border border-primary mt-5 col-8 p-5 rounded">
      <center>
        <h4 class="mb-3">Add Student</h4>
      </center>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="name">Student Name</label>
          <input type="name" class="form-control" id="name" required />
        </div>
        <div class="form-group col-md-6">
          <label for="softskill">Soft Skill</label>
          <input type="text" class="form-control" id="softskill" required />
        </div>
      </div>
      <div class="form-group">
        <div class="form-row">
          <div class="form-group col-md-3">
            <label for="age">Student Age</label>
            <input type="text" class="form-control" id="age" required />
          </div>
          <div class="form-group col-md-3">
            <label for="gender">Gender</label>
            <select id="gender" class="form-control">
              <option selected>Choose...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4">Hard Skill</label>
            <input type="text" class="form-control" id="hardskill" required />
          </div>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Student Email</label>
          <input type="email" class="form-control" id="email" required />
        </div>
        <div class="form-group col-md-6">
          <label for="interest">Interest</label>
          <select id="interest" class="form-control">
            <option selected>Choose...</option>
            <option value="datascience">Data Science</option>
            <option value="network">Network</option>
            <option value="webfrontend">Web Frontend</option>
            <option value="webbackend">Web Backend</option>
            <option value="mobileapp">Mobile App</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label for="exampleFormControlTextarea1">Self Descriptions</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormS",


};
</script>

<style scoped>

</style>