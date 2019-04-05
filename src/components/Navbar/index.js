import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from '../_common/colors';

const NavbarWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    background-color: ${colors.white};
    border: 1px solid ${colors.lightGrey};

    @media (max-width: 992px) {
        justify-content: center;
    }
`;

const NavbarButton = styled(NavLink)`
    all: initial;
    margin-right: 1rem;
    padding: .75rem 2rem;
    color: #4BA7EE;
    cursor: pointer;
    font-family: Roboto, 'sans-serif';

    &.${props => props.activeClassName} {
        color: ${colors.oceanBlue};
        border-bottom: 2px solid ${colors.oceanBlue};
    }
`;

export default function Navbar() {
    return(
        <NavbarWrapper>
            <NavbarButton exact to='/' activeClassName='active'>Planes</NavbarButton>
            <NavbarButton exact to='/extras' activeClassName='active'>Extras</NavbarButton>
        </NavbarWrapper>
    );
}