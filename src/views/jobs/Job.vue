<template>
  <h1>This is Job Page</h1>
  <div class="job" v-for="job in jobs" :key="job.id">
    <router-link :to="{ name: 'JobDetail', params: { id: job.id } }">
      <h1>{{ job.title }}</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs:[]
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
    .then((response)=>{
      return response.json()
    })
    .then((datas)=>{
      this.jobs = datas;
    })
    .catch((error)=>{
      console.log(error.message());
    })
  },
};
</script>

<style>
.job {
  color: crimson;
  text-shadow: 10px 10px 10px navy;
  font-weight: bold;
  font-size: larger;
  font-family: "monospace";
  font-style: italic;
  margin-bottom: 10px;
  text-transform: uppercase;
}
</style>
