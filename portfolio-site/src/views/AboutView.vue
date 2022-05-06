<template>

    <div class="container px-4 mt-3 mt-md-5 pb-5">
        <div class="row gx-5">
            <div class="col-12 col-md-6 p-0">
                <img class=" img-fluid profile-img" src="../assets/images/profile-img.png" alt="">
            </div>
            <div class="col-12 col-md-6 mt-4 mb-4 ">
                <h1 class="welcomeTxt mx-lg-5">Wagwan,
                    I am Szymon</h1>

                <p class="fs-4 mx-lg-5 mt-5">I am passionate about design and technology, 
                    based in Oslo and studying Interactive Design 
                    at Kristiania University College</p>
                    <a class="mx-lg-5 fs-3 " href="https://www.linkedin.com/in/szymon-mazur-07554b15b/"><i class="bi bi-linkedin"></i></a>
            </div>
        </div>

        <div class="row mt-5 pt-5">
            <article class="col-12 col-md-8">
                <p class="fs-4">I am an adventurous guy who loves learning new things. I've been backpacking in South-America for 4 months, 
                        and that gave me a new perspective on a lot of things. I do a lot of sports activities in my sparetime, 
                        but my broken knee had made it a bit difficult the last two years.  </p>
            </article>
        </div>
        
        <div class="row mt-5 align-middle pt-5">
            <article class="col-12 col-md-6">
                <h2 class="text-center">Education</h2>
                <h4 class="mt-5"><i class="bi bi-bank"></i> Høyskolen</h4>
            </article>
            <article class="col-12 col-md-6">
                <h2 class="text-center">Experience</h2>
            </article>
        </div>
    </div>

 
</template>

<style scoped>

.row{
  font-family: Montserrat, sans-serif;
}

.welcomeTxt{
    font-weight: 600;
    color: #153136;
    font-size: 64px;
}

.profile-img{
    border-radius: 1rem ;
    min-width: 20rem;
}
.bi-linkedin{
    color: #153136 ;
}
.bi-linkedin:hover{
    color:#0C6EFD;
}

@media screen and (max-width: 768px) {
    .welcomeTxt{
    font-size: 32px;

}
}
@media screen and (max-width: 425px) {
  .profile-img{
    border-radius: 0rem ;
}
}
</style>