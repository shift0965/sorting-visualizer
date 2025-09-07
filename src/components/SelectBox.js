import styled from "styled-components";
import { useState } from "react";

const StyledBox = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 50px;
    color: ${p => p.theme.color.white};
    margin-bottom: 10px;

.selected{
    padding-left: 18px;
    font-size: 22px;
    font-weight: 600;
    background-color: ${p => p.theme.color.green};
    position: relative;
    display: flex;
    width: 250px;
    height: 50px;
    align-items: center;
    border-radius: 20px;
    z-index:20;
    cursor: pointer;
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
    transition: 0.4s;
}

.box_btn .bar:nth-child(2){
    left: 19px;
    rotate: -45deg;
    transition: 0.4s;
}

.box_btn.active .bar:nth-child(1){
    left: 19px;
    transition: 0.4s;
}

.box_btn.active .bar:nth-child(2){
    left: 7px;
    transition: 0.4s;
}


.option_container{
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: ${p => p.theme.color.green};
    border-radius: 12px;
    overflow: hidden;

    transform: scaleY(0.2);
    top: -20px;
    opacity: 0;
    transition:all, 0.5s;
}

.option_container.active{
    transform: scaleY(1);
    z-index: 10;
    top: 60px;
    opacity: 0.9;
    transition:all, 0.5s;
}

.option{
    height: 45px;
    cursor: pointer;
}

.option:hover{
    background-color: ${p => p.theme.color.red};
    transition: 0.3s;
}

label{
    font-size: 22px;
    font-weight: 600;
    padding-left: 18px;
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

    const algorithms = ["Bubble sort", "Selection sort", "Merge sort", "Insertion sort", "Quick sort"];
    

    const Trigger = (e) => {
        setActive(!active);
    }

    const Selecting = (e) => {
        setIndex(e.target.id);
        setActive(false);
    }

    return(
        <StyledBox>
            <div className = "selected" onClick={Trigger}>
                {algorithms[Index]}
                <div className = {`box_btn ${active? "active":""}`}>
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