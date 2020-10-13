import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LS = {};
LS.navFixedItem_LINK = styled.div`
    a {
        font-family: 'Corben', cursive;
        color: rgb(86, 132, 216);
        font-size: 100px;
        font-weight: 800px;
        line-height: 1.5;
        text-decoration: none;
        position: absolute;
        right: 0px;
        bottom: 0px;
        padding: 0 .5em;
    }
`

export default function AddNewButton() {
    return(
        <LS.navFixedItem_LINK>
            <Link to='/newBirthday'>
                +
            </Link>
        </LS.navFixedItem_LINK>
    )
}