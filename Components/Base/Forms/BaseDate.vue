<template>
    <div class="flex-col justify-start w-full">
        <label class="mt-2 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">{{ label }}</label>
        <div class="relative">
            <div
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 pr-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 flex flex-wrap"
                    :class="errorDisplay ? 'border-red-500 focus:bg-white focus:border-red-500': ''"
            >
                <input
                        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        :class="errorDisplay ? 'border-red-500 focus:bg-white focus:border-red-500': ''"
                        type="date"
                        @focus="datepicker = true"
                        :placeholder="placeholder" v-model="date" ref="input_date"
                >
            </div>
            <button v-if="datepicker" @click="datepicker = false" tabindex="-1" class="fixed inset-0 h-full w-full bg-black opacity-0 cursor-default"></button>
            <div v-if="datepicker" ref="dropdown" class="absolute left-0 mt-2 py-2 max-w-md bg-white rounded-lg shadow-xl flex-col">
                <div class="flex w-full justify-center">
                    <div class="block h-8 p-2 text-gray-800 z-10 flex items-center">
                        <div class="absolute left-0 flex items-center px-2 text-gray-700" @click="previousMonth()">
                            <svg class="hover:bg-indigo-500 hover:text-white fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path class="heroicon-ui" d="M5 11h16a1 1 0 010 2H5l6 5a1 1 0 01-2 2l-7-7a1 1 0 010-2l7-7a1 1 0 012 2l-6 5z"/>
                            </svg>
                        </div>
                        <div class="block w-full px-2 text-center items-center hover:bg-indigo-500 hover:text-white" @click="showYears(year)">
                            {{ months[month] }} {{ year }}
                        </div>
                        <div class="absolute right-0 flex items-center px-2 text-gray-700" @click="nextMonth()">
                            <svg class="hover:bg-indigo-500 hover:text-white fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path class="heroicon-ui" d="M19 13H3a1 1 0 010-2h16l-6-5a1 1 0 112-2l7 7a1 1 0 010 2l-7 7a1 1 0 01-2-2l6-5z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="flex w-full justify-center">
                    <div class="block w-1/5 h-8 w-8 px-2 pt-1 text-gray-800 hover:bg-indigo-500 hover:text-white z-10">M</div>
                    <div class="block w-1/5 h-8 w-8 px-2 pt-1 text-gray-800 hover:bg-indigo-500 hover:text-white z-10">T</div>
                    <div class="block w-1/5 h-8 w-8 px-2 pt-1 text-gray-800 hover:bg-indigo-500 hover:text-white z-10">W</div>
                    <div class="block w-1/5 h-8 w-8 px-2 pt-1 text-gray-800 hover:bg-indigo-500 hover:text-white z-10">T</div>
                    <div class="block w-1/5 h-8 w-8 px-2 pt-1 text-gray-800 hover:bg-indigo-500 hover:text-white z-10">F</div>
                    <div class="block w-1/5 h-8 w-8 px-2 pt-1 text-gray-800 hover:bg-indigo-500 hover:text-white z-10">S</div>
                    <div class="block w-1/5 h-8 w-8 px-2 pt-1 text-gray-800 hover:bg-indigo-500 hover:text-white z-10">S</div>
                </div>
                <div class="flex w-full justify-center" v-for="item in calendar">
                    <div v-for="element in item"
                         class="block w-1/5 h-8 w-8 px-2 pt-1 text-gray-800 hover:bg-indigo-500 hover:text-white z-10"
                         :class="selected(element.date) ? '' : 'bg-gray-200'"
                         @click.prevent="selectElement(element.date)">{{ element.date }}</div>
                </div>
            </div>
            <button v-if="yearPicker" @click="yearPicker = false" tabindex="-1" class="fixed inset-0 h-full w-full bg-black opacity-0 cursor-default"></button>
            <div v-if="yearPicker" ref="dropdown" class="absolute left-0 mt-2 py-2 max-w-md bg-white rounded-lg shadow-xl flex-col">
                <div class="flex w-full justify-center">
                    <div class="block h-8 p-2 text-gray-800 z-10 flex items-center">
                        <div class="absolute left-0 flex items-center px-2 text-gray-700" @click="yearRange(startYear - 1)">
                            <svg class="hover:bg-indigo-500 hover:text-white fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path class="heroicon-ui" d="M5 11h16a1 1 0 010 2H5l6 5a1 1 0 01-2 2l-7-7a1 1 0 010-2l7-7a1 1 0 012 2l-6 5z"/>
                            </svg>
                        </div>
                        <div class="block w-full px-2 text-center items-center hover:bg-indigo-500 hover:text-white">
                            Select Year
                        </div>
                        <div class="absolute right-0 flex items-center px-2 text-gray-700" @click="yearRange(lastYear + 1)">
                            <svg class="hover:bg-indigo-500 hover:text-white fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path class="heroicon-ui" d="M19 13H3a1 1 0 010-2h16l-6-5a1 1 0 112-2l7 7a1 1 0 010 2l-7 7a1 1 0 01-2-2l6-5z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="flex w-full justify-center" v-for="items in yearRangeData">
                    <div v-for="element in items"
                         class="block w-1/4 h-8 w-8 px-2 pt-1 text-gray-800 hover:bg-indigo-500 hover:text-white z-10"
                         :class="selected(element.year) ? '' : 'bg-gray-200'"
                         @click.prevent="selectYearElement(element.year)">{{ element.year }}
                    </div>
                </div>
            </div>
            <span v-if="hint" class="text-xs text-gray-400 font-medium">{{ hint }}</span>
            <span v-if="errorDisplay" class="text-xs text-pink-600 font-medium">{{ errorDisplay }}</span>
        </div>
    </div>
</template>

<script>
    let date = new Date();
    let moment = require('moment');
    export default {
        name: "InputDate",
        props: {
            label: String,
            hint: {
                type: String,
                default: () => ''
            },
            error: {
                type: Array,
                default: () => []
            },
            placeholder: String,
            value: String,
        },
        data() {
            return {
                datepicker: false,
                yearPicker: false,
                months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                years: ['1980', '1981', '1982', '1983'],
                month: date.getMonth(),
                year: date.getFullYear(),
                calendar: [],
                yearRangeData: [],
                startYear: '',
                lastYear: '',
                date: ''
            }
        },
        created() {
            this.yearRange(this.year);
        },
        methods: {
            getCalendarDays(month, year) {
                const startDay = moment().month(month).year(year).startOf('month').startOf('week');
                const endDay = moment().month(month).year(year).endOf('month').endOf('week');

                this.calendar = [];
                var index = startDay.clone();
                while (index.isBefore(endDay, 'day')) {
                    this.calendar.push(
                        new Array(7).fill(0).map(
                            function(n, i) {
                                return {date: index.add(1, 'day').date()};
                            }
                        )
                    );
                }
            },
            showYears(year) {
                this.yearPicker = true;
                this.datepicker = false;
                this.yearRange(year);
            },
            nextMonth() {
                this.month++;
                if (this.month > 11) {
                    this.month = 0;
                    this.year++;
                }
            },
            previousMonth() {
                this.month--;
                if (this.month < 0) {
                    this.month = 11;
                    this.year--;
                }
            },
            yearRange(year) {
                let lastDigit = year % 10;
                this.startYear = Number(year.toString().replace(lastDigit.toString(), '0')) - 1;
                let startYearRange = Number(year.toString().replace(lastDigit.toString(), '0')) - 1;
                this.lastYear = Number(year.toString().replace(lastDigit.toString(), '0')) + 10;
                let endYearRange = Number(year.toString().replace(lastDigit.toString(), '0')) + 10;

                this.yearRangeData = [];
                while (startYearRange <= endYearRange) {
                    this.yearRangeData.push(
                        new Array(4).fill(0).map(
                            function(n, i) {
                                return {year: startYearRange++};
                            }
                        )
                    );
                }
            },
            selected(date) {
                return true;
            },
            selectElement(date) {
                this.date = this.year+'-'+(("0" + (this.month+1)).slice(-2))+'-'+("0" + (date)).slice(-2);
                this.$emit('input', ("0" + (date)).slice(-2)+'/'+(("0" + (this.month+1)).slice(-2))+'/'+this.year);
            },
            selectYearElement(year) {
                this.year = year;
                this.yearPicker = false;
                this.datepicker = true;
            }
        },
        computed: {
            errorDisplay() {
                if(this.error.length)
                    return this.error.join(', ');
                else
                    return '';
            },
        },
        watch: {
            month: {
                immediate: true,
                handler() {
                    this.getCalendarDays(this.month, this.year)
                }
            },
            year: {
                handler() {
                    this.getCalendarDays(this.month, this.year)
                }
            }
        }
    }
</script>

<style scoped>

</style>
