import React from 'react';
import '@styles/NotFound.scss';

const NotFound = () => {

    document.body.classList.add('NotFound-background');

    return (
        <div id="background">
            <div className="top-nt">
                <h1 className="title-nt">404</h1>
                <h3 className="sub-title-nt">pagina no encontrada</h3>
            </div>
            <div className="container-nt">
                <div className="ghost-copy-nt">
                    <div className="one-nt"></div>
                    <div className="two-nt"></div>
                    <div className="three-nt"></div>
                    <div className="four-nt"></div>
                </div>
                <div className="ghost-nt">
                    <div className="face-nt">
                        <div className="eye-nt"></div>
                        <div className="eye-right-nt"></div>
                        <div className="mouth-nt"></div>
                    </div>
                </div>
                <div className="shadow-nt"></div>
            </div>
        </div>   
    );
};

export default NotFound;