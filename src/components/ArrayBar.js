import { useEffect, useState } from 'react'
import styled from 'styled-components'



const StyledBar =  styled.div`
    display: flex;
    width: 13px;
    margin: 10px 5px;
    border-radius: 6px;
    height : ${(props) => props.height + 'px'};

    @media only screen and (max-width: 768px){
        height: 10px;
        margin: 5px 10px;
        width: ${(props) => props.height*0.7 + 'px'};
    }

    &.pre{
        background-color: ${p => p.theme.color.skin};
        z-index: 2;
    }

    &.sorting{
        background-color: ${p => p.theme.color.yellow};
        transform: scale(1.1);
        transition: transform 0.2s;
        z-index: 2;
    }

    &.finished{
        background-color: ${p => p.theme.color.blush};
        transition: 0.1s;
        z-index: 2;
    }

    
`

const ArrayBar = ({index, length, colorKey}) => {
    const [len, setLen] = useState(length);

    const stateKey = ['pre', 'sorting', 'finished']

    useEffect(() => {
        setLen(length);
    }, [length])

    return(
        <StyledBar className={stateKey[colorKey]} height={len}></StyledBar>
    )
}

export default ArrayBar;