import React from 'react';
import Header from '@components/Header';

const Layaut = ({ children }) => {
    return (
        <div className="Layaut">
            <Header />
            {children}
        </div>
    );
};

export default Layaut;