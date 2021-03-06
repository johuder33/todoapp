import React, { Component } from 'react';
import { List } from 'antd';
import TodoItem from '../TodoItem';

// TODO: must define propTypes for 'todos';
export default class TodoList extends Component {
    render() {
        const { todos, onRemove, onDone, onPending } = this.props;
        return (
            <div>
                <List
                    dataSource={todos}
                    renderItem={todo => <TodoItem todo={todo} onPending={onPending} onRemove={onRemove} onDone={onDone} />}
                />
            </div>
        );
    }
}