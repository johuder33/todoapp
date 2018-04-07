import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';
import RenderConditional from '../../RenderConditional';
import TodoPresenter from '../TodoPresenter';
import './todoform.css';
const InputWithButton = Input.Search;

// TODO: must define propTypes for todoForm
export default class TodoForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            todo: '',
            error: ''
        };
    }

    render() {
        const { error, todo } = this.state;

        return (
            <Row type={'flex'}>
                <Col span={24}>
                    <Row>
                        <div>
                            <InputWithButton
                                placeholder={'New Todo'}
                                enterButton={'Add Todo'}
                                value={todo}
                                onChange={(event) => TodoPresenter.onChangeValueForm.call(this, event)}
                                onSearch={(value) => TodoPresenter.onSaveTodo.call(this, value)}
                            />
                            <RenderConditional condition={Boolean(error)}>
                                <span className={'error-hint'}>{error}</span>
                            </RenderConditional>
                        </div>
                    </Row>
                </Col>
            </Row>
        );
    }
}