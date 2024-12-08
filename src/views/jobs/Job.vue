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
      jobs: [
        {
          id: 1,
          title: "manager",
          detail: "male",
        },
        {
          id: 2,
          title: "supervisor",
          detail: "creative coder supervisor",
        },
        {
          id: 3,
          title: "project manager",
          detail: "dataland project manager",
        },
        {
          id: 4,
          title: "ceo",
          detail: "my wife",
        },
      ],
    };
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
