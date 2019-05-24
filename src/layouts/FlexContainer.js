import React from 'react';
import './flexContainer.css';

function FlexContainer(props) {
    return (
        <div className="container dark-bg-color">    
            {props.children}
        </div>
    )
}

export default FlexContainer;