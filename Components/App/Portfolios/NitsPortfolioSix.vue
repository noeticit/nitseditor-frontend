<template>
    <div class="w-full">
        <div class="text-center md:text-4xl text-2xl font-bold text-blue-800 md:px-32 py-8 md:py-16">
            <div class="lg:px-48 tracking-wide font-ubuntu">{{title}}</div>
        </div>
        <nits-column :gap="4" :cols="1">
            <div class="px-64 py-12 ">
                <div class="relative py-10">

<!--                    <div style="width: 675px;height: 675px" class=" border border-dashed border-gray-600 rounded-full"></div>-->
<!--                    <div  v-for="(item,index) in content">-->
<!--                        <div @mouseover="active = index"  :class="item.style + ' ' + (active === index ? '-translate-y-3 shadow-lg scale-110' : '')">-->
<!--                            <img :src="item.icon">-->
<!--                            <div class="mx-auto text-center mt-2 text-blue-800 font-bold text-base antialiased tracking-wide font-ubuntu">{{item.name}}</div>-->
<!--                        </div>-->
<!--                        <transition enter-active-class="transition duration-700 ease-out transform" enter-class="-translate-x-4 scale-150 opacity-0" enter-to-class="translate-x-0 scale-100 opacity-100" leave-active-class="transition duration-150 ease-in transform" leave-class="translate-x-0 opacity-100" leave-to-class="-translate-x-3 opacity-0">-->
<!--                            <div v-if="active === index" class="absolute top-0 ml-40 mt-16" style="width: 324px;height: 600px">-->
<!--                                <div class="py-4 mt-16 text-center font-bold text-sm text-red-600 antialiased font-ubuntu">-->
<!--                                    {{item.name}}-->
<!--                                </div>-->
<!--                                <div class="py-4 text-center text-xs text-blue-800 antialiased font-ubuntu">-->
<!--                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.-->
<!--                                </div>-->
<!--                                <div>-->
<!--                                    <img class="mx-auto" style="width:323px;height: 300px" :src="item.image">-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </transition>-->
<!--                    </div>-->
                    <ul class='circle-container'>
                      <li v-for="(item, index) in content"><img :src='item.icon' alt="..." /></li>
                    </ul>
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
        }
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
    @include on-circle($item-count: 8, $circle-size: 30em, $item-size: 6em);
    margin: 5em auto 0;
    border: solid 5px tomato;

    img {
      display: block;
      max-width: 100%;
      border-radius: 50%;
      filter: grayscale(100%);
      border: solid 5px tomato;
      transition: .15s;

      &:hover,
      &:active {
        filter: grayscale(0);
      }
    }
  }
</style>