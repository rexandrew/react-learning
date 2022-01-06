import React from 'react';
import './Modal.css';
export default function Modal(props){
    return (
    <div className="modal-backdrop">
        <div className ="modal" style = {{
            border: "4px solid",
            borderColor: "#ff4500",
            textAlign: "center"
            }}>
            {props.children}
            {/* <button onClick={props.closeModal}>Close Modal</button> */}
        </div>

    </div>)
}