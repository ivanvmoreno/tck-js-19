import React from 'react';
import styled from 'styled-components';
import star from '../../assets/img/star.svg';

const StarsWrapper = styled.div`
`;

const Star = styled.span`
    &:before {
        content: url('${star}');
        display: inline-block;
        float: left;
        margin-right: .35rem;
    }
`;

export default function Stars(props) {
    const starsArray = [];
    for (let i = 0; i < props.count; i++) {
        starsArray.push(<Star key={i} />);
    }

    return <StarsWrapper>{ starsArray }</StarsWrapper>;
}