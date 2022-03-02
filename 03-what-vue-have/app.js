Vue.createApp({
    data: () => ({
        myHtml: '<h1>Vue 3 App </h1>',
        title: 'Я есть Грут',
        person: {
            firstName: "Akzhol",
            lastName: "Kanybekuly",
            age: 30
        },
        items: [1,2,3,4,5,6,7]
    }),
    methods: {
        addItem(){
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
        }
    },
    computed: {
        evenItems(){
            return this.items.filter(i => i % 2 === 0)
        }
    }
}).mount('#app')