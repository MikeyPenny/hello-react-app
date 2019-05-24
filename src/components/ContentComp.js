import React from 'react';
import './contentComp.css';

function ContentComp() {
    return (
        <div className="content-container">
            <div className="row">
                <h1>Say hello<br/> to ReactJS</h1>
            </div>
            <div className="row">
                <p>You will learn a Frontend<br/> framework from scratch, to<br/> become a Ninja Developer</p>
            </div>
            <div className="row">
                <button>Awesome!</button>
            </div>
        </div>
    )
}

export default ContentComp;
