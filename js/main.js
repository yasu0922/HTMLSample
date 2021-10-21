var app = new Vue({
    el: '#app',
    data(){
        return {
            message: 'Hello Vue.js!'
        }
    },
    methods: {
        btnClicked() {
            console.log('Vue クリックされた')
        },
        btnClickedEvent(e){
            console.log(e)
        },
        btnClickedArgsEvent(int, e){
            console.log(int, e)
        }
    }

})

function btnClicked() {
    console.log('JSクリックされた')
}

const clickEvent = document.getElementById('clickEvent')
clickEvent.addEventListener('click', (e) => {
    console.log(e)
})

const prevent = document.getElementById('prevent')
prevent.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e)
})