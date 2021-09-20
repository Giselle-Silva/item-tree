import React, { useState } from 'react';

import CheckBoxList from '../../components/CheckBox/CheckBoxList';

import Logo from '../../assets/images/hiplataform-logo.png';

import { secondaryMain } from '../../context/secondaryMain';

export default function Home() {

    const [checkBoxMain, setCheckBoxMain] = useState();

    return (
        <div className="container-fluid">
            <h1 className="logo">
                <img src={Logo} alt="Logotipo Hiplataform" />
            </h1>


            <secondaryMain.Provider value={
                {
                    checkBoxMain, setCheckBoxMain,
                }
            }>
                <CheckBoxList />
            </secondaryMain.Provider>

        </div>
    )
}