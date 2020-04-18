<template>
    <draggable
            v-bind="dragOptions"
            tag="div"
            class="w-full max-w-md"
            :list="list"
            :value="value"
            @input="emitter"
    >
        <div class="p-1" :key="el.id" v-for="el in realValue">
            <div class="p-2 ml-2 items-center bg-white shadow rounded-lg">
                {{ el.name }}
            </div>
            <menu-builder class="mt-2 ml-4" :list="el.elements" />
        </div>
    </draggable>
</template>

<script>
    import draggable from "vuedraggable";
    export default {
        name: "MenuBuilder",
        methods: {
            emitter(value) {
                this.$emit("input", value);
            }
        },
        components: {
            draggable
        },
        computed: {
            dragOptions() {
                return {
                    animation: 0,
                    group: "description",
                    disabled: false,
                    ghostClass: "ghost"
                };
            },
            // this.value when input = v-model
            // this.list  when input != v-model
            realValue() {
                return this.value ? this.value : this.list;
            }
        },
        props: {
            value: {
                required: false,
                type: Array,
                default: null
            },
            list: {
                required: false,
                type: Array,
                default: null
            }
        }
    }
</script>

<style scoped>

</style>