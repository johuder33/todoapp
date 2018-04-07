import React, { Component } from 'react';
import { List } from 'antd';
import TodoMetaDisplay from '../TodoMetaDisplay';

// TODO: must define propTypes for 'todo' as a Shape of Struct Todo
export default class TodoDoneDisplay extends Component {
    render() {
        const { todo, onRemove, onPending } = this.props;
        const { status, description } = todo;

        return (
            <div className={'wide'}>
                <div className={'space-bottom'}>
                    <strike>{description}</strike>
                </div>
                <TodoMetaDisplay onRemove={onRemove} onAction={onPending} todo={todo} onClick={() => null} />
            </div>
        );
    }
}