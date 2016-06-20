import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import style from './components/style.sass'
import TodoList from './components/todoList'

// import { StyleRoot } from 'radium'
// import SweetAlert from 'react-bootstrap-sweetalert'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      todos: [],
      filter: 'All'
    }
  }

  addTodo () {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          text: this.state.value,
          isComplete: false,
          visibilityFilter: 'Todo'
        }
      ]
    })

    console.log('this.state.todos:', this.state.todos);
  }

  removeAll () {
    this.setState({ todos: [] })
  }

  removeSpecificTodo (index) {
    const todos = [ ...this.state.todos ]
    todos.splice(index, 1)
    this.setState({todos})
  }

  toggleTodo(index) {
    let Todos = [ ...this.state.todos ]
    Todos[index].isComplete = !Todos[index].isComplete
    Todos[index].visibilityFilter = Todos[index].isComplete ? 'Done' : 'Todo'

    this.setState({
      todos: Todos
    })
  }

  render() {
    return (
      <div>
        <h1>My Todo App [ React ]</h1>

        <div className="tool-list">
          <input type="text" className="todoText" val={ this.state.value } onChange={(e) => this.setState({value: e.target.value})}></input>
          <button className="btn btn-default" onClick={ this.addTodo.bind(this) }> Add </button>
          <button className="btn btn-default" onClick={ this.removeAll.bind(this) }> Remove All</button>
          <a className={this.state.filter === 'All' ? 'active filter-option' : 'filter-option'} onClick={ () => this.setState({filter: 'All'}) } >All</a>
          <a className={this.state.filter === 'Todo' ? 'active filter-option' : 'filter-option'} onClick={ () => this.setState({filter: 'Todo'}) } >Todo</a>
          <a className={this.state.filter === 'Done' ? 'active filter-option' : 'filter-option'} onClick={ () => this.setState({filter: 'Done'}) } >Done</a>
        </div>

        <TodoList todos={ this.state.todos } filter={ this.state.filter } toggleTodoFn={ this.toggleTodo.bind(this) } removeTodoFn={ this.removeSpecificTodo.bind(this) }/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.fluid-container'))
