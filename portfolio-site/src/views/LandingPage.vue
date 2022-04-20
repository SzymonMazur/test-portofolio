<template>
    <main>
        <section class="container pt-5">
            <skum-list></skum-list>
        </section>

    </main>


        <my-footer></my-footer>
</template>

<script>
import SkumList from '@/components/case-studies/SkumList.vue'
import MyFooter from '@/components/My-footer.vue'
export default {
  components: { SkumList, MyFooter, },
    
}
</script>

<style>
.skum-title{
    color: #ECAE12 !important;
    font-weight: bold;
    font-size: 64px;
    font-family: 'Montserrat', sans-serif;
}

.skum-des{
    color: #0D0D0D !important;
    font-weight: 300;
    font-family: 'Montserrat', sans-serif;
}


</style>