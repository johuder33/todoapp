import React, { Component } from 'react';
import { List } from 'antd';

// TODO: must define propTypes for 'todo' as a Shape of Struct Todo
export default class TodoItem extends Component {
    render() {
        const { todo } = this.props;
        return (
            <List.Item>{todo.description}</List.Item>
        );
    }
}