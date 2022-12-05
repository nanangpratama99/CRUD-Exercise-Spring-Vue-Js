<template>
  <div class="d-flex justify-content-around">
    <form class="border border-primary mt-5 col-8 p-5 rounded">
      <h4>Add Student</h4>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Student Name</label>
          <input type="name" class="form-control" id="name" required />
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Soft Skill</label>
          <input type="text" class="form-control" id="text" required />
        </div>
      </div>
      <div class="form-group">
        <div class="form-row">
          <div class="form-group col-md-3">
            <label for="inputCity">Student Age</label>
            <input type="text" class="form-control" id="inputCity" required />
          </div>
          <div class="form-group col-md-3">
            <label for="inputState">Gender</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4">Hard Skill</label>
            <input type="name" class="form-control" id="name" required />
          </div>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Student Email</label>
          <input type="name" class="form-control" id="name" required />
        </div>
        <div class="form-group col-md-6">
          <label for="inputState">Interest</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option value="male">Data Science</option>
            <option value="female">Network</option>
            <option value="female">Web Frondend</option>
            <option value="female">Web Backend</option>
            <option value="female">Mobile App</option>
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

<style>
</style>