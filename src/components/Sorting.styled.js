import styled from "styled-components"

export const Body = styled.div`
    background-color: ${props => props.theme.color.white};
    height: 100vh;
`

export const Header = styled.div`
    z-index: 1;
    height: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.color.purple};

.title{
    display: flex;
    height: 140px;
    align-items: center;
    h1{
        color: ${props => props.theme.color.white};
        font-size: 50px;
    }   
}

.butBar{
    max-width: 1000px;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: top;

    .left{
        color: white;
        width: 250px;
    }

    .middle{
        display: flex;
        justify-content: center;
    }

    .right{
        display: flex;
        button{
            height: 50px;
            width: 80px;
            border: none;
            margin: 0px 10px;
            border-radius: 20px;
            color: ${p => p.theme.color.white};
            font-size: 20px;
            font-weight: 600;
        }

        .sort{
            background-color: ${p => p.theme.color.blue};
        }

        .reset{
            background-color: ${p => p.theme.color.blue};
            

        }
        
        button:hover{
            transform: scale(0.95);
        }
    }
}
`


export const Section = styled.div`
    display: flex;
    justify-content: center;
    z-index: 0;
`