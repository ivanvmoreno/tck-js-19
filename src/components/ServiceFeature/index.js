import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from  '../_common/colors';
import arrow from '../../assets/img/arrow.svg';

const FeatureWrapper = styled.div`
    border: 1px solid ${colors.lightGrey};
`;

const FeatureInformationWrapper = styled.div`
    display: flex;
    
    @media (max-width: 576px) {
        flex-direction: column;
    }
`;

const FeatureImg = styled.img`
    flex-shrink: 0;
    align-self: flex-start;
    max-width: 25vw;

    @media (max-width: 576px) {
        max-width: 100%;
    }

    @media (min-width: 576px) and (max-width: 992px) {
        max-width: 35vw;
    }
`;

const FeatureDescription = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 2rem 1rem 0 2rem;

    @media (max-width: 576px) {
        margin: 2rem;
    }

    @media (min-width: 992px) {
        justify-content: space-between;
    }
`;

const FeatureTitle = styled.h2`
    margin: 0;
    color: ${colors.oceanBlue};
    font-weight: 300;
`;

const FeatureExcerpt = styled.div`
    margin: 1rem 0;
`;

const MoreInfoButton = styled.button`
    all: initial;
    position: relative;
    cursor: pointer;
    color: ${colors.lightBlue};
    font-family: Roboto, 'sans-serif';
    font-weight: 300;

    &:after {
        content: url('${arrow}');
        position: absolute;
        display: inline-block;
        margin-left: .75rem;

        ${props => props.open && (`
            transform: rotate(180deg);
            transform-origin: 50% 50%;
        `)}
    }

    @media (max-width: 576px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
        padding: 1rem 1rem 1.5rem 1rem;
        text-align: center;

        &:after {
            bottom: 0;
            margin: 0;
        }
    }

    @media (min-width: 992px) {
        padding-bottom: 2rem;
    }
`;

const MoreInformationWrapper = styled.div`
    max-height: 0;
    overflow: hidden;
    margin: 0 10vw;
    transition: max-height .2s ease-out;

    ${props => props.open && (`
        max-height: 500vh;
        transition: max-height .2s ease-in;
    `)}

    @media (min-width: 576px) and (max-width: 992px) {
        margin: 0 5vw;
    }
`;

const FeaturesTitle = styled.h2`
    padding-top: 1rem;
    margin-bottom: 0;
    font-weight: 300;
    
    @media (max-width: 576px) {
        margin-top: 0;
        padding: 0 0 1rem 0;
    }
`;

const FeaturesList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 1rem 0;
    padding: 0;

    @media (max-width: 576px) {
        flex-direction: column;
    }
`;

const Feature = styled.li`
    margin: 1.25rem;
    max-width: 20vw;

    @media (max-width: 576px) {
        margin: .5rem 0 .5rem 1.5rem;
        max-width: 100%;
    }

    @media (min-width: 576px) and (max-width: 992px) {
        min-width: 10vw;
    }
`;

export default class ServiceFeature extends Component {
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
        const { imgSrc, title, description, features } = this.props;
        return(
            <FeatureWrapper>
                <FeatureInformationWrapper>
                    <FeatureImg src={ imgSrc } alt={ title }></FeatureImg>
                    <FeatureDescription open={ this.state.open }>
                        <FeatureTitle>{ title }</FeatureTitle>
                        <FeatureExcerpt>
                            { window.screen.width > 992 ? (description.slice(0,300) + '...') : (description.slice(0,80) + '...') }
                        </FeatureExcerpt>
                        <MoreInfoButton onClick={ this.handleCollapsibleSwitch } open={ this.state.open }>Más información y condiciones</MoreInfoButton>
                    </FeatureDescription>
                </FeatureInformationWrapper>
                <MoreInformationWrapper open={ this.state.open }>
                        <FeaturesTitle>Incluye</FeaturesTitle>
                        <FeaturesList>
                            { features.map((feature, index) => <Feature key={ index }>{ feature }</Feature>) }
                        </FeaturesList>
                </MoreInformationWrapper>
            </FeatureWrapper>
        );
    }
}