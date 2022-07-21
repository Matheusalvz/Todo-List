const tarefasApp = {
    data() {
        return {
            tarefas: [],
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