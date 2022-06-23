import styled from "styled-components"

export const Body = styled.div`
    background-color: ${props => props.theme.color.sky};
    height: 100vh;
`

export const Header = styled.div`
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.color.grass};

.title{
    display: flex;
    height: 130px;
    align-items: center;
    h1{
        color: ${props => props.theme.color.white};
        font-size: 50px;
    }   
}

.butBar{
    max-width: 1300px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;

    .left{
        color: white;
        display: flex;
        justify-content: space-around;
        width: 400px;

        .sliderContainer{
            color: ${p => p.theme.color.black};
            font-weight: 600;
            height: 80px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .valueTag{
                font-size: 18px;
                width: 120%;
                display: flex;
                justify-content: space-between;
            }
        }
    
    }

    .middle{
        width: 300px;
        display: flex;
        justify-content: center;
    }

    .right{
        width: 300px;
        display: flex;
        justify-content: center;
        button{
            height: 50px;
            width: 80px;
            border: none;
            margin-left: 30px;
            border-radius: 20px;
            color: ${p => p.theme.color.white};
            font-size: 20px;
            font-weight: 600;
        }

        .sort{
            background-color: ${p => p.theme.color.red};
        }

        .reset{
            background-color: ${p => p.theme.color.purple};
            

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