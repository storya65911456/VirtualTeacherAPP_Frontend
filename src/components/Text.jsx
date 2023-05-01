import React from 'react';

const Text = ({ message }) => {
    return (
        <>
            {!message.fromUser && (
                <li className='m-2 bg-gray-700 p-1'>
                    <span>虛擬教師</span>
                    <span className='text-xs'>{message?.date}</span>
                    <br></br>
                    <span>{message?.val}</span>
                </li>
            )}
            {message.fromUser && (
                <li className='m-2 bg-gray-700 p-1'>
                    <span>使用者</span>
                    <span className='text-xs'>{message?.date}</span>
                    <br></br>
                    <span>{message?.val}</span>
                </li>
            )}
        </>
    );
};

export default Text;
