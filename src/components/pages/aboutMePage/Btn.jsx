import React from 'react';

const Btn = ({up,down}) => {

    return (
        <div className="controls">
        <button 
        className="down-button"
        onClick={()=>down()}
        >
            <i className="fas fa-arrow-down"></i>
        </button>

        <button 
        className="up-button"
        onClick={()=>up()}
        >
            <i className="fas fa-arrow-up"></i>
        </button>
    </div>
    );
}
 
export default Btn;