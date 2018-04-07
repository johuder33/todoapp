import React, { Component } from 'react';
import { List, Row, Col } from 'antd';
import TodoMetaDisplay from '../TodoMetaDisplay';

// TODO: must define propTypes for 'todo' as a Shape of Struct Todo
export default class TodoPendingDisplay extends Component {
    render() {
        const { todo, onRemove, onDone } = this.props;
        const { status, description } = todo;

        return (
            <div className={'wide'}>
                <div className={'space-bottom'}>
                    {description}
                </div>
                <TodoMetaDisplay onRemove={onRemove} onAction={onDone} todo={todo} onClick={() => null} />
            </div>
        );
    }
}