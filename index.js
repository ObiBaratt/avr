import Vue from 'vue';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactApp from './react-app/src/App';
import VueApp from './vue-app/src/App.vue';

// Initialize React
ReactDOM.render(<ReactApp />, document.getElementById('react-app'));

// Initialize Vue
new Vue({
  render: h => h(VueApp),
}).$mount('#vue-app');

// Initialize Angular