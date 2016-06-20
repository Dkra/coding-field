import React, { Component } from 'react'
import Todo from './todo'

export default class TodoList extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const Todos = this.props.todos.map((todo, index) => {
      return <Todo todo={todo} key={index} idx={index} toggleTodo={ this.props.toggleTodoFn } currentFilter={this.props.filter} removeTodo={this.props.removeTodoFn} />
    })

    return (
      <div>
        {Todos}
      </div>
    )
  }
}
