import hack from './module/_hack.js';
hack();

let app = new Vue({
    el: '#v-app',
    data: {
        input: '',
        output: '',
        seen: false
    }
});
