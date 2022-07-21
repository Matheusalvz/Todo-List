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
    created() {
        this.tarefas = localStorage.getItem("tarefas") ? JSON.parse(localStorage.getItem("tarefas")) : this.tarefas;
    },
    updated() { //Atualiza no local storage quando a lista está vazia ou se a tarefa está feita
        localStorage.setItem("tarefas", JSON.stringify(this.tarefas));
    }
};

Vue.createApp(tarefasApp).mount('#app');