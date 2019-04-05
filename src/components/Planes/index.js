import React, { Component } from 'react';
import styled from 'styled-components';
import Plan from '../Plan';
import Stars from '../Stars';
import { colors } from '../_common/colors';

const PlanesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 576px) {
        margin: 0 5vw;
    }

    @media (min-width: 576px) and (max-width: 992px) {
        margin: 0 7.5vw;
    }
`;

const HeadingWrapper = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 992px) {
        flex-direction: column;
        margin-bottom: 2rem;
    }
`;

const PlanesHeading = styled.h2`
    color: ${colors.oceanBlue};
    margin: 2.5rem 0;
    font-size: 30px;
    font-weight: 300;
    text-align: center;
    margin-right: 2rem;

    @media (max-width: 992px) {
        margin-bottom: 1rem;
        margin-right: 0;
    }
`;

const SelectorWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    & > div {
        margin: .25rem;
    }
`;

export default class Planes extends Component {
    state = {
        selectedPlan: ''
    }

    handlePlanClick = planId => {
        this.setState({
            selectedPlan: planId
        });
    }

    render() {
        return(
            <PlanesWrapper>
                <HeadingWrapper>
                    <PlanesHeading>HOTEL Mieres del Camín Apartamentos</PlanesHeading>
                    <Stars count={4} />
                </HeadingWrapper>
                <SelectorWrapper>
                    <Plan heading='Solo Alojamiento' features={['Sin régimen', 'Botella de agua de bienvenida']} value='plan-1' selected={this.state.selectedPlan === 'plan-1'} handleClick={this.handlePlanClick}>Test</Plan>
                    <Plan heading='Alojamiento y Desayuno' features={['Desayuno buffet completo']} value='plan-2' selected={this.state.selectedPlan === 'plan-2'} handleClick={this.handlePlanClick}>Test</Plan>
                    <Plan heading='Media Pensión' features={['Desayuno buffet completo', 'Cena buffet', 'No incluye']} value='plan-3' selected={this.state.selectedPlan === 'plan-3'} handleClick={this.handlePlanClick}>Test</Plan>
                    <Plan heading='Todo Incluido' features={['Dispondrás de comida y bebida todo el día y durante toda tu estancia', 'Restaurante buffet', 'Snack Bar', 'Servicio de bares (marcas nacionales)']} value='plan-4' selected={this.state.selectedPlan === 'plan-4'} handleClick={this.handlePlanClick}>Test</Plan>
                    <Plan heading='Unlimited Services' features={['Restaurante buffet con bebidas Premium', 'Restaurante a la carta (una cena por estancia)', 'Snack Bar con bebidas Premium', 'Minibar incluido', 'Acceso a SPA y 45 minutos de masaje por persona', 'Actividades deportivas (acuáticas sin motor)', 'Caja fuerte', 'Parking gratuito', 'Lavandería']} value='plan-5' selected={this.state.selectedPlan === 'plan-5'} handleClick={this.handlePlanClick}>Test</Plan>
                </SelectorWrapper>
            </PlanesWrapper>
        );
    }
}