import React, { Component } from 'react';
import { List, Row, Col, Button, Divider } from 'antd';
import { TODO_STATUS } from '../../../../constants';
import TodoPresenter from '../../TodoPresenter';
import { capitalize } from '../../../../utils';

const TodoDoneDisplay = (props) => {
    const { todo, onRemove, onAction } = props;
    const { ts, status, id } = todo;
    const createAt = TodoPresenter.TsToDate(ts);
    const btnType = status === TODO_STATUS.pending ? 'danger' : 'primary';
    const currentState = status === TODO_STATUS.pending ? TODO_STATUS.done : TODO_STATUS.pending;
    const btnText = `Mark as ${capitalize(currentState)}`;

    return (
        <Row type={'flex'} align={'middle'} justify={'space-between'}>
            <Col>
                {`Create at ${createAt}`}
            </Col>

            <Col>
                <Button type={btnType} onClick={() => onAction(id)} size={'small'}>
                    {btnText}
                </Button>
                
                <Divider type="vertical" />

                <Button type={'danger'} onClick={() => onRemove(id)} size={'small'}>
                    {`Remove Taks`}
                </Button>
            </Col>
        </Row>
    );
}

export default TodoDoneDisplay;