import React, {useEffect, useState, useRef} from "react";
import styled from "styled-components";
import {useOnClickOutside} from "./UseOnClickOutside";
interface DropdownMenuParams{ //typescript-example ex interface - but type is preferable
    items: string[];
    categorySelected: Function;
}
interface DropdownParams{
    isOpen: boolean;
    innerRef:any;
}
const Dropdown = styled.ul<DropdownParams> ` //typescript-example ex usage in styled components
display:  ${p => p.isOpen ? "block" : "none"};
position:absolute;
top:20;
left:0;
background-color: var(--clr-grey-10);
margin-bottom: 20px;
min-width: 100px;
border: 2px solid grey;
`
const MenuItem = styled.button`
border:none;
background-color: transparent;
padding:5px;
outline: none;
width:100%;
&:hover{
    background-color: var(--clr-primary-9);
}`
export const DropdownMenu= ({items, categorySelected}:DropdownMenuParams) => {
 const [selectedItem, setSelectedItem]= useState("");
 const [isOpen, setIsOpen] = useState(false);
 const ref= useRef<HTMLDivElement>(null); //typescript-example in useRef -  it’s important to pass null as the default value
 useEffect(() => {
    setSelectedItem(items[0]);
 }, [items])
 const handler = (event:Event) => { //typescript-example in typing the event - we might want to use MouseEvent here but useOnClickOutside expects Event
    setIsOpen(false);
 }
 useOnClickOutside(ref, handler);
 const handleBlur:React.FocusEventHandler<HTMLUListElement> = (event) => { //typescript-example in typing the eventhandler for focus event
        // if the blur was because of outside focus
        // currentTarget is the parent element, relatedTarget is the clicked element
                if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                    setIsOpen(false);
                }
 }
return(
    <div className="dropdownMenu" ref={ref}>
        <button onClick={() => {
            setIsOpen(!isOpen);
        }} style ={{ width: "100%", border: "2px solid grey", padding: "5px",
        fontSize: "1rem", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>{selectedItem} &#128317;</button>
        <Dropdown className="dropdown" isOpen={isOpen} onBlur={handleBlur} innerRef={ref}>
            {
                items.map((item:string, index) => {
                    return(<li key={index}><MenuItem onClick={() => {
                        setSelectedItem(item);
                        setIsOpen(false);
                        categorySelected(item);
                    }}>{item}</MenuItem></li>)
                })
            }
        </Dropdown>
    </div>
)
}
