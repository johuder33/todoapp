import React, { Component } from 'react';
import { Layout } from 'antd';
import './todos.css';
import TodosList from './TodoList';
import TodoForm from './TodoForm';
const { Sider, Content } = Layout;

export default class Todos extends Component {
    render() {
        const { todos } = this.props;
        return (
            <Layout>
                <Sider>
                    {'Some filter :D'}
                </Sider>
                <Content className={'todos-container'}>
                    <TodoForm />
                    <TodosList todos={todos} />
                </Content>
            </Layout>
        );
    }
}