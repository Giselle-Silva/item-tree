import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';

import { secondaryMain } from '../../context/secondaryMain';

export default function CheckBoxItens(props) {

    const { checkBoxMain } = useContext(secondaryMain);

    return (
        <div>
            <div className="item-checkbox">
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        label={props.label}
                        id={props.id}
                        name={props.name}
                        onClick={function (e) { props.clickSecondary(checkBoxMain, props.dataSecondary) }}
                    />
                </Form.Group>
            </div>
        </div>
    )
}