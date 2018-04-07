import React, { Component } from 'react';
import { Layout } from 'antd';
const { Content } = Layout;

export default class ContentTodoApp extends Component {
    render() {
        const { children } = this.props;
        return (
            <Content>
                {children}
            </Content>
        );
    }
}