import React, { Component } from 'react'
import { Layout } from 'antd';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import { Switch, Route } from 'react-router-dom';
import './layout.css';

const Placeholder = (props) => <h1>{props.name}</h1>;

export default class LayoutTodoApp extends Component {
    render() {
        return (
            <Layout className={'expand'}>
                <Header />
                    {/* let's route our app */}
                <Content>
                    <Switch>
                        <Route exact path={'/todos'} render={() => <Placeholder name={'Todos'} />} />
                        <Route path={'/todos/:id'} render={() => <Placeholder name={'Single todo with Id'} />} />
                    </Switch>
                </Content>
                <Footer />   
            </Layout>
        );
    }
}