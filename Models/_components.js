import Vue from 'vue';

/*
 |--------------------------------------------------------------------------
 | Base components dynamic and async import.
 |--------------------------------------------------------------------------
 |
 | Import all the base vue components starting with letter 'Base' into it.
 | Dynamic import of all those files are generated with respective component name
 |
 */

const requireBaseComponent = require.context('./../Components/Base', true, /Base[\w-]+\.vue$/);

requireBaseComponent.keys().forEach(filename => {

    //Get file location to import
    const importFilename = filename.replace('./', '');

    //Split the file path to get the component/filename
    const component = filename.split(/[\s/]+/);

    //Get file/component name
    const componentName = component[component.length-1].replace('.vue', '');

    //Register async and dynamic component
    Vue.component(componentName, () => import(/* webpackChunkName: "base-component" */ `./../Components/Base/${importFilename}`));

});


const requireAppComponent = require.context('./../Components/App', true, /App[\w-]+\.vue$/);

requireAppComponent.keys().forEach(filename => {

    //Get file location to import
    const importFilename = filename.replace('./', '');

    //Split the file path to get the component/filename
    const component = filename.split(/[\s/]+/);

    //Get file/component name
    const componentName = component[component.length-1].replace('.vue', '');

    //Register async and dynamic component
    Vue.component(componentName, () => import(/* webpackChunkName: "base-component" */ `./../Components/App/${importFilename}`));

});