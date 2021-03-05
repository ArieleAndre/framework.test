import React from 'react';

import {Container} from './styles';

const Menu = () => {
    return (
        <Container>
            <ul>
                <li><a href="/">Principal</a></li>
                <li><a href="/postagens">Postagens</a></li>
                <li><a href="/albuns">Albuns</a></li>
                <li><a href="/to-do">To-Do</a></li>
            </ul>
        </Container>
    );
}

export default Menu;
