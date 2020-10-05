<template>
    <div class="w-full">
        <div class="text-center md:text-4xl text-2xl font-bold text-blue-800 md:px-32 py-8 md:py-16">
            <div class="lg:px-48 tracking-wide font-ubuntu">{{title}}</div>
        </div>
        <nits-column :gap="4" :cols="1">
            <div class="px-64">
                <div class="relative w-full ">

<!--                    <div style="width: 675px;height: 675px" class=" border border-dashed border-gray-600 rounded-full"></div>-->
                    <div class='circle-container relative'>
                       <div v-for="(item,index) in content">
                           <div  @mouseover="active = index">
                               <img :src="item.icon" :class="(active === index ? '-translate-y-3 shadow-lg scale-150 bg-white p-2 rounded-full' : '')">
                               <div :class="(active === index ? '-translate-y-3 scale-110' : '')" class="mx-auto text-center mt-2 text-blue-800 font-bold text-base antialiased tracking-wide font-ubuntu">{{item.name}}</div>
                           </div>
                       </div>


                    </div>
                    <div class="absolute top-0 w-full flex justify-center md:mt-12">
                        <transition  enter-active-class="transition duration-700 ease-out absolute top-0  transform flex justify-center" enter-class="-translate-x-4 scale-150 opacity-0" enter-to-class="translate-x-0 scale-100 opacity-100" leave-active-class="transition duration-150 ease-in transform" leave-class="translate-x-0 opacity-100" leave-to-class="-translate-x-3 opacity-0">
                            <div class="mx-auto" style="width: 324px;height: 600px">
                                <div class="py-4 mt-16 text-center font-bold text-sm text-red-600 antialiased font-ubuntu">
                                    {{name}}
                                </div>
                                <div class="py-4 text-center text-xs text-blue-800 antialiased font-ubuntu">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </div>
                                <div>
                                    <img class="mx-auto" style="width:250px; height: 250px" :src="logo">
                                </div>
                            </div>
                        </transition>
                    </div>

                    <!--                    <ul class='circle-container'>-->
<!--                      <li v-for="(item, index) in content"><img :src='item.icon' alt="..." /></li>-->
<!--                    </ul>-->
                </div>
            </div>
        </nits-column>
    </div>

</template>

<script>
    export default {
        name: "NitsPortfolioSix",
        props: {
            title: {
                type: String,
                required: true
            },
            content: Array,
        },
        data() {
            return {
                active: 0,
                timer: '',
            }
        },
        created() {
            this.timer = setInterval(() => {
                if(this.active === 11)
                    this.active = 0;
                else
                    this.active++;
            }, 3000);
        },
        destroy() {
            clearInterval(this.timer);
        },
        computed: {
            logo() {
                console.log(this.content[this.active].image)
                return this.content[this.active].image;
            },
            name() {
                return this.content[this.active].name;
            }
        },
    }
</script>

<style scoped lang="scss">

  @mixin on-circle($item-count, $circle-size, $item-size) {
    position: relative;
    width:  $circle-size;
    height: $circle-size;
    padding: 0;
    border-radius: 50%;
    list-style: none;

    > * {
      display: block;
      position: absolute;
      top:  50%;
      left: 50%;
      width:  $item-size;
      height: $item-size;
      margin: -($item-size / 2);

      $angle: (360 / $item-count);
      $rot: 0;

      @for $i from 1 through $item-count {
        &:nth-of-type(#{$i}) {
          transform:
              rotate($rot * 1deg)
              translate($circle-size / 2)
              rotate($rot * -1deg);
        }

        $rot: $rot + $angle;
      }
    }
  }

  .circle-container {
    @include on-circle($item-count: 12, $circle-size: 40em, $item-size: 5em);
    margin: 5em auto 0;
    border: dashed 2px gray;

    img {
      display: block;
      max-width: 100%;
      border-radius: 50%;
      /*filter: grayscale(100%);*/
      /*border: solid 5px tomato;*/
      transition: .15s;

      &:hover,
      &:active {
        filter: grayscale(0);
      }
    }
  }
</style>