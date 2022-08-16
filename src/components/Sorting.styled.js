import styled from "styled-components"

export const Body = styled.div`
    background-color: ${props => props.theme.color.sky};
    min-height: 100vh;
    height: fit-content;
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
    }   
}

.butBar{
    max-width: 1300px;
    width: 100%;
    display: flex;
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
            position: relative;

            input {
                -webkit-appearance: none;
                width: 120px;
                height: 8px;
                border-radius: 8px;
                margin: 8px 0px;
            }

            input:focus{
                outline: none;
            }

            .speed{
                background: linear-gradient(to right, ${p => p.theme.color.yellow} ${p => p.theme.param.speed}%, 
                                                      ${p => p.theme.color.white}  ${p => p.theme.param.speed}%);
            }

            .numBar{
                background: linear-gradient(to right, ${p => p.theme.color.yellow} ${p => p.theme.param.numBar}%, 
                                                      ${p => p.theme.color.white}  ${p => p.theme.param.numBar}%);
            }
            
            input::-webkit-slider-thumb {
                -webkit-appearance: none;
                width: 10px;
                height: 20px;
                background-color: ${props => props.theme.color.blush};
                border-radius: 10px;
            }

            

            .valueTag{
                font-size: 18px;
                width: 120%;
                display: flex;
                justify-content: space-between;
            }

        }
    
    }

    .middle{
        display: flex;
        justify-content: center;
    }

    .right{
        width: 350px;
        display: flex;
        justify-content: center;
        button{
            border: none;
            margin: 0px 30px;
            border-radius: 20px;
            color: ${p => p.theme.color.white};
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

@media screen and (min-width: 768px){
    .butBar{
        justify-content: space-between;
    }
    .right{
        order: 2;
        margin: 10px 0px;
        button{
            height: 50px;
            width: 80px;
        } 
    }

    .middle{
        order:1;
    }
}

@media screen and (max-width: 768px){
    .butBar{
        justify-content: center;
    }
    .right{
        order: 1;
        margin: 10px 0px;
        button{
            height: 40px;
            width: 70px;
        } 
    }

    .middle{
        order:2;
    }
}

` 
