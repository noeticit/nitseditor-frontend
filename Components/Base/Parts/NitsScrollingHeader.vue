<template>
    <div class="bg-gray-600">
        <header class="nav-scrolled">Abuzaid</header>
        <section  class="home-intro">
            <p>
                Look through courses and browse them by category. With one click mark the desired category on the sidebar and apply filtering without reloading the page and interfering its display.
                Enable course filtering by price, category, subcategory, status, levels, and ratings.
            </p>

        </section>
        <section class="home-intro"></section>
        <section class="home-intro"></section>
        <section class="home-intro"></section>

    </div>

</template>

<script>
    console.log('hello')

    const header = document.querySelector("header");
    const sectionOne = document.querySelector(".home-intro")

    const sectionOneOptions = {};

    const sectionOneObserver = new IntersectionObserver
    (function (
        entries,
        sectionOneObserver
    ) {
entries.forEach(entry => {
    if (!entry.isIntersecting){
        header.classList.add("nav-scrolled");
    }else {
        header.classList.remove("nav-scrolled")
    }
});

    },
        sectionOneObserver);
    sectionOneObserver.observe(sectionOne);

    // window.onscroll = function () {
    //     var top = window.scrollY;
    //     console.log(top);
    //     if(top >= 50){
    //         header.classList.add('active')
    //
    //     }else{
    //         header.classList.remove('active')
    //     }
    //
    // }

    export default {
        name: "NitsScrollingHeader"
    }
</script>

<style scoped>
    .home-intro{
        position: relative;
        padding: 8rem;
        height: 100vh;
        border-bottom: rgba(0,0,0,0.1) solid 1px;
    }
    header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 4rem;
        text-align: center;
        padding: 1.5rem;
        z-index: 100;
        background: transparent;
        border-bottom: rgba(0,0,0,0.1) solid 1px;
    }
    header.active{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 4rem;
        text-align: center;
        padding: 1.5rem;
        z-index: 100;
        background: white;
        border-bottom: rgba(0,0,0,0.1) solid 1px;
    }

</style>