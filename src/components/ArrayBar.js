import { useEffect, useState } from 'react'
import styled from 'styled-components'



const StyledBar =  styled.div`
    display: flex;
    margin: 10px 5px;
    width: 15px;

    &.pre{
        background-color: ${p => p.theme.color.purple};
    }

    &.sorting{
        background-color: ${p => p.theme.color.red};
        transform: scale(1.2);
        transition: transform 0.2s;
    }

    &.finished{
        background-color: ${p => p.theme.color.blue};
        transition: 0.1s;
    }
`

const ArrayBar = ({index, length, colorKey}) => {
    const [len, setLen] = useState(length);

    const stateKey = ['pre', 'sorting', 'finished']

    useEffect(() => {
        setLen(length);
    }, [length])

    return(
        <div>
            <StyledBar className={stateKey[colorKey]} style={{height: len}}></StyledBar>
        </div>
    )
}

export default ArrayBar;