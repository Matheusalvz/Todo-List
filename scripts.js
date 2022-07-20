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
            tarefas: window.tarefas,
            novaTarefa:{
                done: false
            },
        }
    },
    methods: {
        adicionarTarefa: function() {
            if (this.novaTarefa.text) {
                this.tarefas.push(this.novaTarefa);
                this.novaTarefa = {
                    done: false
                }
            }else {
                alert("O texto da tarefa é obrigatório");
            };
        }
    }
};

Vue.createApp(tarefasApp).mount('#app');