import React, { Component } from 'react';
import { Layout } from 'antd';
import './todos.css';
import TodosList from './TodoList';
import TodoForm from './TodoForm';
import TodoFilter from './TodoFilter';
import { TODO_STATUS } from '../../constants';
const { Sider, Content } = Layout;

export default class Todos extends Component {
    render() {
        const { todos, filter, markTodoAsDone, markTodoAsPending, removeTodo } = this.props;

        return (
            <Layout>
                <Sider className={'letter-white'}>
                    <TodoFilter options={TODO_STATUS} />
                </Sider>
                <Content className={'todos-container letter-white'}>
                    <div>
                        <h3>
                            {`Displaying all ${filter} task`}
                        </h3>
                    </div>
                    <TodoForm />
                    <TodosList todos={todos} onDone={markTodoAsDone} onPending={markTodoAsPending} onRemove={removeTodo} />
                </Content>
            </Layout>
        );
    }
}