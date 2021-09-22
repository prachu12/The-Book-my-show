import React from "react";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

export const NextArrow = (props) => {
    // const {className, style, onClick}= props;
    return (
        <>
        <div 
        className={props.className}
        style={{ ...props.style, backgroundColor: "black"}}
        onClick={props.onClick}
        
        
        />
        </>
    );
    

};

export const PrevArrow = (props) => {
    return (
        <>
        <div 
        className={props.className}
        style={{ ...props.style, backgroundColor: "black"}}
        onClick={props.onClick}
        />

        <span className="icon IoIosArrowBack"><IoIosArrowBack /></span>
        
        </>
    );

};