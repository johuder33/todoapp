import React, { Component } from 'react';
import { Layout } from 'antd';
const { Header } = Layout;

export default class HeaderTodoApp extends Component {
    render() {
        return (
            <Header className={'font-white'}>
                {'My Todo App Demo'}
            </Header>
        );
    }
}