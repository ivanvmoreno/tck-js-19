import React from 'react';
import styled from 'styled-components';
import ServiceCategoryCollapsible from '../ServiceCategoryCollapsible';
import ServiceFeature from '../ServiceFeature';
import img1 from '../../assets/img/img1.png';
import img2 from '../../assets/img/img2.png';

const ExtrasWrapper = styled.div`
    margin: 1rem 0;

    & > div {
        &:not(:first-of-type) {
            margin-top: 1rem;
        }
    }
`;

export default function Extras(props) {
    return(
        <ExtrasWrapper>
            <ServiceCategoryCollapsible title='Mejora tu estancia' exclusive='exclusivo hoteles.com' defaultOpen={true}>
                <ServiceFeature title='Olvídese de la rutina' description='Cras vehicula vestibulum dapibus. Pellentesque auctor dolor et purus facilisis maximus. Mauris eget urna luctus, imperdiet neque nec, aliquet lorem.' features={['Baño javanés Mandi Susu tradicional: evocación de los baños que tomaban las princesas de las cortes y palacios de Java Central, en Indonesia, con antiguas recetas en las que se mezclaba la leche y las especias.','Baño floral balinés: con aceite de almendra dulce y aromas de jazmín.','Baño oceánico: con sal marina y gajos de mandarina o lima.','Baño de pies floral: baño aromático de pies, con pétalos y aromas.','Baño de vapor herbal: baño de vapor con hierbas del sudeste asiático.','Rain shower.']} imgSrc={img1}></ServiceFeature>
                <ServiceFeature title='Experiencias y programas SPA con agua' description='Las experiencias spa de agua tienen una presencia muy especial en SPA Sensations. No es extraño si consideramos que la mayor parte del planeta, así como del propio cuerpo humano, están compuestos de agua.' features={['Baño javanés Mandi Susu tradicional: evocación de los baños que tomaban las princesas de las cortes y palacios de Java Central, en Indonesia, con antiguas recetas en las que se mezclaba la leche y las especias.','Baño floral balinés: con aceite de almendra dulce y aromas de jazmín.','Baño oceánico: con sal marina y gajos de mandarina o lima.','Baño de pies floral: baño aromático de pies, con pétalos y aromas.','Baño de vapor herbal: baño de vapor con hierbas del sudeste asiático.','Rain shower.']} imgSrc={img2} defaultOpen={true}></ServiceFeature>    
            </ServiceCategoryCollapsible>
            <ServiceCategoryCollapsible title='Servicios de habitación' exclusive='exclusivo hoteles.com'>
                <ServiceFeature title='Olvídese de la rutina' description='Las experiencias spa de agua tienen una presencia muy especial en SPA Sensations. No es extraño si consideramos que la mayor parte del planeta, así como del propio cuerpo humano, están compuestos de agua.' features={['Baño javanés Mandi Susu tradicional: evocación de los baños que tomaban las princesas de las cortes y palacios de Java Central, en Indonesia, con antiguas recetas en las que se mezclaba la leche y las especias.','Baño floral balinés: con aceite de almendra dulce y aromas de jazmín.','Baño oceánico: con sal marina y gajos de mandarina o lima.','Baño de pies floral: baño aromático de pies, con pétalos y aromas.','Baño de vapor herbal: baño de vapor con hierbas del sudeste asiático.','Rain shower.']} imgSrc={img1}></ServiceFeature>    
            </ServiceCategoryCollapsible>
        </ExtrasWrapper>
    );
}