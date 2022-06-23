import styled from "styled-components";
import { useState } from "react";

const StyledBox = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 50px;
    color: ${p => p.theme.color.white};

.selected{
    padding-left: 15px;
    font-size: 22px;
    background-color: ${p => p.theme.color.blue};
    position: relative;
    display: flex;
    width: 300px;
    height: 50px;
    align-items: center;
    border-radius: 8px;
    z-index:20;
}

.box_btn{
    position: absolute;
    width: 50px;
    height: 50px;
    right: 0px;
    display: flex;
    flex-direction: column;
    cursor:pointer;
    z-index: 99;
}

.box_btn .bar{
    position: absolute;
    width: 20px;
    height: 4px;
    background: ${p => p.theme.color.red};
    border-radius: 5px;
    top: 23px;
}

.box_btn .bar:nth-child(1){
    left: 7px;
    rotate: 45deg;
    transform: rotate(45deg);
    transition: 0.3s;
}

.box_btn .bar:nth-child(2){
    left: 19px;
    rotate: 45deg;
    transform: rotate(-45deg);
    transition: 0.3s;
}

.box_btn.active .bar:nth-child(1){
    left: 19px;
    rotate: 45deg;
    transform: rotate(45deg);
    transition: 0.3s;
}

.box_btn.active .bar:nth-child(2){
    left: 7px;
    rotate: 45deg;
    transform: rotate(-45deg);
    transition: 0.3s;
}


.option_container{
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: ${p => p.theme.color.blue};
    border-radius: 8px;
    overflow: hidden;

    max-height: 50px;
    top: 0px;
    opacity: 0;
    transition:all, 0.5s;
}

.option_container.active{
    z-index: 10;
    max-height: 500%;
    top: 60px;
    opacity: 0.95;
    transition:all, 0.5s;
}

.option{
    height: 45px;
    cursor: pointer;
}

.option:hover{
    background-color: ${p => p.theme.color.yellow};
    transition: 0.3s;
}

label{
    font-size: 22px;
    padding-left: 15px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

input{
    display: none;
}
`

const SelectBox = ({Index, setIndex}) => {
    
    const [active, setActive] = useState(false);

    const algorithms = ["bubble", "selection"];
    

    const Trigger = (e) => {
        setActive(!active);
    }

    const Selecting = (e) => {
        setIndex(e.target.id);
        setActive(false);
    }

    return(
        <StyledBox>
            <div className = "selected">
                {algorithms[Index]}
                <div className = {`box_btn ${active? "active":""}`} onClick={Trigger}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>

            <div className={`option_container ${active? "active":""}`}>

                {algorithms.map((item, index) => (
                    <div className="option" key={index}>
                    <input type="radio" id={index} name="algorighm" onClick={Selecting}></input>
                        <label htmlFor={index}>{item}</label>
                    </div>
                ))}
            </div>

        </StyledBox>
    )
    
}


export default SelectBox;