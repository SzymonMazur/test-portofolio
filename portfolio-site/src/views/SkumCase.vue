<template>
        <skum-header></skum-header>
    <article class="container">
        <div class="row mt-5">
            <div class="col-lg-6">
                <h5 class="about-project">ABOUT THE PROJECT</h5>
                <p class="about-projext-txt"><strong>Skum</strong> is a <strong>mobile application </strong>that I and two other students created as part of our interaction design exam. 
                    We designed this project from <strong>start</strong> to <strong>final design </strong> through ideation, reasearch and UX design principals. 
                    Since no similar <strong>Norwegian application</strong> has been made before, our <strong>goal</strong> was to design a platform where beer 
                    enthusiasts can discover new beer and share their discoveries with friends.</p>
            </div>
            <div class="col-lg-6">
                <p class="col-12" style="font-weight: 700;">Role</p>

      
                    <div class="col-12 p-0">
                    <p class="col-4 m-0">UX-Design</p>
                    <p class="col-4">Interview</p>
                    <p class="col-3">Wireframe</p>
                    <p class="col-lg-3">Research</p>
                    <p class="col-lg-3">Analysis</p>
                    <p class="col-lg-3">User-scenario</p>
                    </div>
                </div>

            </div>
    </article>
</template>

<script>
import SkumHeader from '@/components/skum-case-study/Skum-header.vue'

export default {
    setup() {
        
    },

    components: {
        SkumHeader
    }
}
</script>

<style scoped>

.container{
    font-family: Montserrat, sans-serif;
}
.about-project{
    color: #0D0D0D;
    font-weight: 700;
}

.about-projext-txt{
    color: rgba(13, 13, 13, .69);
}
</style>