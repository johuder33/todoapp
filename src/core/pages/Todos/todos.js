import React, { Component } from 'react';
import { Layout } from 'antd';
import './todos.css';
import TodosList from './TodoList';
import TodoForm from './TodoForm';
const { Sider, Content } = Layout;

export default class Todos extends Component {
    render() {
        const { todos, markTodoAsDone, markTodoAsPending, removeTodo } = this.props;
        return (
            <Layout>
                <Sider>
                    {'Some filter :D'}
                </Sider>
                <Content className={'todos-container'}>
                    <TodoForm />
                    <TodosList todos={todos} onDone={markTodoAsDone} onPending={markTodoAsPending} onRemove={removeTodo} />
                </Content>
            </Layout>
        );
    }
}