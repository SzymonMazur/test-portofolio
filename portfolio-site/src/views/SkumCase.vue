<template>
  <skum-header></skum-header>
  <main class="container">
      <section>
          <!-- Section for about this project -->
    <div class="row mt-5">
      <div class="col-md-6 col-12">
        <h5 class="about-project mb-3 fs-6">ABOUT THE PROJECT</h5>
        <p class="about-projext-txt">
          <strong>Skum</strong> is a <strong>mobile application </strong>that I
          and two other students created as part of our interaction design exam.
          We designed this project from <strong>start</strong> to
          <strong>final design </strong> through ideation, reasearch and UX
          design principals. Since no similar
          <strong>Norwegian application</strong> has been made before, our
          <strong>goal</strong> was to design a platform where beer enthusiasts
          can discover new beer and share their discoveries with friends.
        </p>
      </div>
      <div class="col-12 col-md-6 justify-content-around ">
        <div class="row ">
          <p class="" style="font-weight: 700">Role</p>
          <p class="col-6 col-md-4">UX-Design</p>
          <p class="col-6 col-md-4">Interview</p>
          <p class="col-6 col-md-4">Wireframe</p>
          <p class="col-6 col-md-4">Research</p>
          <p class="col-6 col-md-4">Analysis</p>
          <p class="col-6 col-md-4">User-scenario</p>
        </div>
        <div class="row mt-3">
            <p class="col" style="font-weight: 700">Date</p>
            <p>2020 - 8 Weeks</p>
        </div>
      </div>
    </div>
    </section>
    <!-- End of section -->

    <!-- The process section -->
    <article class="the-process-container mt-5">
        <h3 class="fs-4" style="font-weight: 700">THE PROCESS</h3>
        <img class="img-fluid mt-5" src="../assets/images/UUU-model.png" alt="UUU model">

    </article>

  </main>

</template>

<script>
import SkumHeader from "@/components/skum-case-study/Skum-header.vue";

export default {
  setup() {},

  components: {
    SkumHeader,
  },
};
</script>

<style scoped>

.container {
  font-family: Montserrat, sans-serif;
}

.fs-4{
    color: #0d0d0d;
}
.about-project {
  color: #0d0d0d;
  font-weight: 700;
}

.about-projext-txt {
  color: rgba(13, 13, 13, 0.69);
}
</style>
