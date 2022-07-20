var tarefas = [
    {
        text: 'Aprender HTML, CSS e Javascript',
        done: true
    },
    {
        text: 'Aprender o básico de Vue JS',
        done: false
    },
]

const tarefasApp = {
    data() {
        return {
            tarefas: window.tarefas
        }
    }
};

Vue.createApp(tarefasApp).mount('#app');