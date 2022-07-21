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
                localStorage.setItem("tarefas", JSON.stringify(this.tarefas));
            }else {
                alert("O texto da tarefa é obrigatório");
            };
        }
    },
    created()  {
        this.tarefas = localStorage.getItem("tarefas") ? JSON.parse(localStorage.getItem("tarefas")) : this.tarefas;
    }
};

Vue.createApp(tarefasApp).mount('#app');