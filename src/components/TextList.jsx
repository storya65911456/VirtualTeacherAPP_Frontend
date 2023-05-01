import React from 'react';
import Text from './Text';

const TextList = ({ val }) => {
    return val?.data.map((message, index) => {
        return <Text key={index} message={message} />;
    });
};

export default TextList;
