import React, { useState, useEffect, useContext } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';

import CheckBoxItens from './CheckBoxItens';

import { secondaryMain } from '../../context/secondaryMain';

import Arrow from '../../assets/images/arrow.png';

export default function CheckBoxList() {

    const [names, setNames] = useState({});
    const { setCheckBoxMain } = useContext(secondaryMain);

    useEffect(() => {

        const listNames = async () => {

            const baseUrl = window.location.href;

            await axios.get(`${baseUrl}/data.json`)
                .then(response => {
                    setNames(response.data);

                }).catch(function (error) {
                    console.log(error);
                });
        }
        listNames();

    }, [])

    const handlerClickArrow = (i) => {

        let iconArrow = document.querySelector('.iconarrow' + i);
        let listSecondary = document.querySelector('.list-secondary' + i)

        if (iconArrow.classList.contains('open-arrow')) {
            iconArrow.classList.remove('open-arrow');
            iconArrow.classList.add('close-arrow');
        }
        else {
            iconArrow.classList.remove('close-arrow');
            iconArrow.classList.add('open-arrow');
        }

        if (listSecondary.classList.contains('open-list')) {
            listSecondary.classList.remove('open-list');
            listSecondary.classList.add('close-list');

            setCheckBoxMain('');
        }
        else {
            listSecondary.classList.remove('close-list')
            listSecondary.classList.add('open-list');

            setCheckBoxMain(i);
        }
    }

    const handlerClickCheckBoxMain = (i) => {

        let checkboxes = document.querySelectorAll('.list-secondary' + i + ' li input[type="checkbox"]');
        let checkBoxMain = document.querySelector('#check-box-main' + i);

        if (checkBoxMain.checked === true || checkBoxMain.indeterminate === true) {
            for (let checkbox of checkboxes) {
                checkbox.checked = checkboxes.checked = true;
            }
        }
        else {
            for (let checkbox of checkboxes) {
                checkbox.checked = checkboxes.checked = false;
            }
        }
    }

    const handlerClickBoxSecondary = (idMain, idSecondary) => {
        let checkBoxSecondary = document.querySelector('#checkbox-secondary' + idSecondary);
        let checkBoxMain = document.querySelector('#check-box-main' + idMain);

        if (checkBoxSecondary.checked === true) {
            checkBoxMain.checked = true;
            checkBoxMain.indeterminate = true;

        }
        else {
            checkBoxMain.checked = false;
            checkBoxMain.indeterminate = false;
        }
    }

    return (
        <div>
            <ul className="listGroup">
                {

                    Object.keys(names).map((keyName, i) => (
                        <li className="travelcompany-input" key={i}>
                            <div className="item-checkbox">
                                <div className="checkbox-main" id={'checkbox-main' + i}>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check
                                            type="checkbox"
                                            id={'check-box-main' + i}
                                            name={'check-box-main' + i}
                                            label={names[keyName].name}
                                            value="0"
                                            onClick={(e) => { handlerClickCheckBoxMain(i) }}
                                        />
                                    </Form.Group>

                                    <div>
                                        <img src={Arrow} alt="seta" className={'icon-arrow iconarrow' + i + ' close-arrow'} onClick={(e) => { handlerClickArrow(i) }} />
                                    </div>
                                </div>
                            </div>

                            <ul className={'list-secondary' + i + ' listSecondary close-list'}>
                                {
                                    Object.keys(names[keyName].children).map((keys, i) => (
                                        <li className="travelcompany-input checkbox-secondary" key={i}>
                                            <CheckBoxItens
                                                label={names[keyName].children[keys].name}
                                                name={'checkbox-secondary' + i}
                                                id={'checkbox-secondary' + i}
                                                dataSecondary={i}
                                                clickSecondary={handlerClickBoxSecondary}
                                            />
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}