import React, { Component } from 'react';
import { Select } from 'antd';
import TodoPresenter from '../TodoPresenter';
import { capitalize } from '../../../utils';
const { Option } = Select;

// TODO: must define propTypes for todoForm
export default class TodoFilter extends Component {
    constructor(props) {
        super(props);

        this.select = this.makeSelect();
    }

    makeSelect() {
        const { options } = this.props;

        const keys = Object.keys(options);
        const defaultOption = keys[0];

        const opts = keys.map((key, index) => {
            var label = options[key];
            return (
                <Option key={`${key}-${index}`} value={key}>{capitalize(label)}</Option>
            );
        });

        return (
            <Select defaultValue={defaultOption} onChange={(value) => TodoPresenter.onFilter.call(this, value)}>
                {opts}
            </Select>
        );
    }

    render() {
        return (
            <div>
                <h2>
                    Filter by status
                </h2>
                {this.select}
            </div>
        );
    }
}