import Vue from 'vue';

const requireComponent = require.context('./../Components/Base', true, /Base[\w-]+\.vue$/);

requireComponent.keys().forEach(filename => {

    //Get component filename
    const importFilename = filename.replace('./', '');

    const component = filename.split(/[\s/]+/);

    //Get component name
    const componentName = component[component.length-1].replace('.vue', '');

    //Register async and dynamic component
    Vue.component(componentName, () => import(`./../Components/Base/${importFilename}`));

});