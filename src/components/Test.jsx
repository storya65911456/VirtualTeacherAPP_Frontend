import { current } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';

const Test = () => {
    console.log('render');
    const [value, setValue] = useState(false);
    const [obj, setObj] = useState([{ name: 'bruce', data: '0' }]);

    return (
        <>
            <h1>App</h1>
            <button
                onClick={() => {
                    setObj((prevObj) => {
                        return [...prevObj, { name: 'json', data: '1' }];
                    });
                    console.log(obj);
                }}
            >
                重新Render
            </button>
        </>
    );
};

export default Test;
