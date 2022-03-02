const App = {
    data() {
        return {
            placeholderString: 'Введите название заметки',
            title: 'Список заметок',
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2']
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNewNote(){
            if (this.inputValue !== ''){
                this.notes.push(this.inputValue)
                this.inputValue=''
            }
        },
        toUpperCase(item) {
            return  item.toUpperCase()
        },
        removeNote(idx){
            this.notes.splice(idx, 1)
        },
        doubleCount(){
            console.log('doubleCount')
            return this.notes.length*2
        }
    },
    computed: {
        doubleCountComputed(){
            console.log('doubleCountComputed')
            return this.notes.length*2
        }
    },
    watch: {
        inputValue(value){
            console.log('input value changed',value)
        }
    }
}
Vue.createApp(App).mount('#app')
