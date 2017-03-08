angular.module('VSTDA', []);

angular
	.module('VSTDA')
	.controller('todoApp', todoApp);

function todoApp() {

  var vm = this;
 	vm.todos = [];
	vm.addTodo = function(name) {
		vm.todos.push({text:vm.todoName});
		vm.todoName = '';
		//<li class="list-group-item list-group-item-danger">High Priority</li>

	}


};
