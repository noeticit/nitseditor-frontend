<template>
    <div class="toggle-wrapper">
        <label class="toggle">
            <input type="checkbox" :checked="(mode === 'dark') ? 'checked' : false" @change="$emit('toggle')">
            <span class="toggler round"></span>
        </label>
    </div>
<!--            <div class="flex justify-center items-center">-->
<!--                <div class="relative rounded-full w-12 h-6 transition duration-200 ease-linear">-->
<!--                    <label for="toggle" class="absolute left-0 bg-white border-2 mb-2 w-6 h-6 rounded-full transition transform duration-100 ease-linear cursor-pointer"></label>-->
<!--                    <input type="checkbox" id="toggle" name="toggle" class="appearance-none w-full h-full active:outline-none focus:outline-none" :checked="(mode === 'dark') ? 'checked' : false" @change="$emit('toggle')"/>-->
<!--                </div>-->
<!--            </div>-->
</template>

<script>
    export default {
        name: "NitsToggleButton",
        props : ['mode']
    }
</script>

<style scoped>
    @import url('https://use.fontawesome.com/releases/v5.8.1/css/all.css');
    .toggle{
        position: relative;
        display: inline-block;
        width: 50px;
        height: 20px;
        /*background: #FF0000;*/
    }
    .toggle input{
        opacity: 0;
        width: 0;
        height: 0;
    }
    .toggler{
        position: absolute;
        cursor: pointer;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: #152020;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }
    .toggler:before{
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 2px;
        bottom: 0px;
        background: #FFF;
        -webkit-transition: 0.4s;
        transition: 0.4s;

    }
    input:checked + .toggler{
        background: #2196F3;
    }
    input:focus + .toggler {
        box-shadow: 0 0 2px #2196F3;
    }
    input:checked + .toggler:before{
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
    .toggler.round {
        border-radius: 33px;
    }
    .toggler.round:before{
        border-radius: 50%;
    }


</style>