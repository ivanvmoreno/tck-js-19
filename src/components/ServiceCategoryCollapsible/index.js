import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from  '../_common/colors';
import arrow from '../../assets/img/arrow.svg';

const CollapsibleWrapper = styled.div`
    max-width: 100%;
    border: 1px solid ${colors.lightGrey};
    background-color: white;

    ${props => props.open && (`
        padding-bottom: 1rem;
    `)}
`;

const CollapsibleHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin-left: 1rem;
    color: ${colors.lightBlue};

    @media (max-width: 576px) {
        flex-direction: column;
        justify-content: center;
        margin-left: 0;
    }
`;

const HeaderText = styled.h2`
    padding-left: 2rem;
    font-size: 24px;
    font-weight: 300;
    position: relative;

    &:before {
        content: url('${arrow}');
        left: 0;
        position: absolute;
        display: inline-block;

        ${props => props.open && (`
            transform: rotate(180deg);
            transform-origin: 50% 50%;
        `)}
    }
`;

const ExclusiveTag = styled.span`
    align-self: flex-start;
    text-transform: uppercase;
    background-color: ${colors.brightRed};
    color: ${colors.white};
    padding: .5rem 1.5rem;
    font-size: .75rem;
    font-weight: 200;
    letter-spacing: 2px;

    @media (max-width: 576px) {
        order: -1;
        margin: 0 auto;
    }
`;

const CollapsibleContent = styled.div`
    max-height: 0;
    overflow: hidden;
    padding: 0 1rem;
    transition: max-height .2s ease-out;

    & > div {
        &:not(:first-of-type) {
            margin-top: 1rem;
        }
    }

    ${props => props.open && (`
        max-height: 500vh;
        transition: max-height .2s ease-in;
    `)}
`;

export default class ServiceCategoryCollapsible extends Component {
    state = {
        open: false
    }

    handleCollapsibleSwitch = () => {
        this.setState(oldState => ({
           open: !oldState.open 
        }));
    }

    componentWillMount() {
        if (this.props.defaultOpen) {
            this.setState({
                open: true
            });
        }
    }

    render() {
        const { title, exclusive, children } = this.props;
        return(
            <CollapsibleWrapper open={ this.state.open }>
                <CollapsibleHeader exclusive={ exclusive } onClick={ this.handleCollapsibleSwitch }>
                    <HeaderText open={ this.state.open }>{ title }</HeaderText>
                    { exclusive && <ExclusiveTag>{ exclusive }</ExclusiveTag> }
                </CollapsibleHeader>
                <CollapsibleContent open={ this.state.open }>{ children }</CollapsibleContent>
            </CollapsibleWrapper>
        );
    }
}