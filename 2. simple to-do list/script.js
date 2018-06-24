var todoList = new Vue({
    el: "#todoList",
    data: {
        title: "Todo List",
        tasks: [
            {
                name: "Make an App"
            },
            {
                name: "Watch Netflix"
            },
            {
                name: "Read a Book"
            }
        ]
    },
    methods: {
        addTask: function() {
            var input = document.getElementById("taskInput");

            if(input.value) {
                this.tasks.push({
                    name: input.value
                });
            }

            input.value = "";
        },
        removeTask: function(index) {
            this.tasks.splice(index, 1);
        }
    }
});