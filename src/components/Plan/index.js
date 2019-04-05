import React from 'react';
import styled from 'styled-components';
import { colors } from '../_common/colors';
import hollowCircle from '../../assets/img/hollow-circle.svg';

const PlanWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 12rem;
    padding: 1rem;
    border: 1px solid ${colors.skyBlue};
    cursor: pointer;
    background-color: ${colors.white};

    ${props => props.selected && (`
        border-color: ${colors.steelBlue};
    `)}

    @media (max-width: 992px) {
        flex: 1;
        padding: 1rem 2.5rem;
    }
`;

const PlanHeading = styled.h3`
    text-align: center;
    position: relative;
    color: ${colors.oceanBlue};
    font-weight: 400;
    
    &:after {
        content: "";
        position: absolute;
        width: 40%;
        left: 30%;
        bottom: -1.5rem;
        border-bottom: 1px solid ${colors.skyBlue};
    }
`;

const PlanFeaturesList = styled.ul`
    padding: 1rem;
`;

const PlanFeature = styled.li`
    margin: .5rem 0;
`;

const SelectButton = styled.div`
    max-width: 100%;
    position: relative;
    padding: 1rem 2rem;
    margin-top: auto;
    background-color: ${colors.lightGrey};
    opacity: .35;
    border: 1px solid ${colors.white};

    &:before {
        content: "";
        position: absolute;
        width: 18px;
        height: 18px;
        left: 1rem;
        background-color: ${colors.white};
        border-radius: 50%;
        display: inline-block;
    }

    ${props => props.selected && (`
        opacity: 1;
        border-color: ${colors.oceanBlue};

        &:before {
            border-color: ${colors.limeGreen};
            content: url('${hollowCircle}');
            background-color: ${colors.limeGreen};
        }

        & > div {
            color: ${colors.oceanBlue};
        }
    `)}
`;

const ButtonText = styled.div`
    text-align: center;
`;

export default function Plan(props) {
    const { handleClick, selected, heading, value, features } = props;
    return(
        <PlanWrapper onClick={() => handleClick(value)} selected={selected}>
            <PlanHeading>{ heading }</PlanHeading>
            <PlanFeaturesList>
                { features.map((feature, index) => <PlanFeature key={index}>{feature}</PlanFeature>) }
            </PlanFeaturesList>
            <SelectButton selected={selected}>
                <ButtonText>Elegir régimen</ButtonText>
            </SelectButton>
        </PlanWrapper>
    );
}