import React, { Component } from 'react';
import { List } from 'antd';
import TodoPendingDisplay from './TodoPendingDisplay';
import TodoDoneDisplay from './TodoDoneDisplay';
import './todoitem.css';

const ComponentByStatus = {
    pending: TodoPendingDisplay,
    done: TodoDoneDisplay
}

// TODO: must define propTypes for 'todo' as a Shape of Struct Todo
export default class TodoItem extends Component {
    render() {
        const { todo, onRemove, onDone, onPending } = this.props;
        const { status } = todo;
        const TodoItemDisplay = ComponentByStatus[status];

        return (
            <List.Item>
                <TodoItemDisplay onRemove={onRemove} onDone={onDone} onPending={onPending} todo={todo} />
            </List.Item>
        );
    }
}