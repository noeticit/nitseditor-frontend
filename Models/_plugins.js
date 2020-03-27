// import Vue from 'vue';

const fs = require('fs');

fs.readFile('./../sample.vue', 'utf8', function(err, contents) {
    console.log(contents);
});