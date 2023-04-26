import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

const Modal = ({ Visible, Close, Modal }) => {
    const go = useNavigate();

    const userRef = useRef(null);

    const portalTarget = document.getElementById('root');

    const [VT, setVT] = useState([]);

    const date = new Date();

    const send = () => {
        const val = userRef.current.value;
        if (val === '') return;
        setVT((prevVT) => {
            return [...prevVT, { date, val }];
        });
        userRef.current.value = null;
    };

    if (Visible) {
        {
            /* 回選單 */
        }
        if (Modal == 1) {
            return createPortal(
                <div className='fixed inset-0 flex items-center justify-center bg-[#242424]'>
                    <div
                        id='Modal'
                        className='flex h-5/6 w-5/6 items-center justify-center border shadow-lg shadow-cyan-500/50'
                    >
                        <div>
                            <div>確定要回選單?</div>
                            <button
                                onClick={() => {
                                    Close(false);
                                    go('/home');
                                }}
                            >
                                確定
                            </button>
                            <button
                                onClick={() => {
                                    Close(false);
                                }}
                            >
                                取消
                            </button>
                        </div>
                    </div>
                </div>,
                portalTarget
            );
        }
        {
            /* 虛擬教師 */
        }
        if (Modal == 2) {
            return createPortal(
                <div className='fixed inset-0 flex items-center justify-center'>
                    <div
                        id='Modal'
                        className='h-5/6 w-5/6 border shadow-lg shadow-cyan-500/50'
                    >
                        {/* 頭 */}
                        <div className='h-10 w-full border-b border-dashed'>
                            <label
                                className='ml-auto flex h-full w-fit items-center p-2'
                                onClick={() => {
                                    Close(false);
                                }}
                            >
                                Close
                            </label>
                        </div>
                        {/* 身 */}
                        <div className='h-3/4 w-full overflow-auto p-3'>
                            <ul>
                                {VT.map((message, index) => {
                                    return (
                                        <li className='m-2 bg-gray-700 p-1' key={index}>
                                            <span className='text-xs'>
                                                {message.date.toString()}
                                            </span>
                                            <br></br>
                                            <span>{message.val}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        {/* 腳 */}
                        <div className='mt-4 flex items-center justify-center'>
                            <input
                                className='h-10 w-3/5 p-2'
                                type='text'
                                ref={userRef}
                                placeholder='請輸入問題'
                            ></input>
                            <button className='h-fit w-fit' onClick={send}>
                                Send
                            </button>
                        </div>
                    </div>
                </div>,
                portalTarget
            );
        }
        {
            /* 登出 */
        }
        if (Modal == 3) {
            return createPortal(
                <div className='fixed inset-0 flex items-center justify-center bg-[#242424]'>
                    <div
                        id='Modal'
                        className='flex h-5/6 w-5/6 items-center justify-center border shadow-lg shadow-cyan-500/50'
                    >
                        <div>
                            <div>確定要登出?</div>
                            <button
                                onClick={() => {
                                    Close(false);
                                    go('/home');
                                }}
                            >
                                確定
                            </button>
                            <button
                                onClick={() => {
                                    Close(false);
                                }}
                            >
                                取消
                            </button>
                        </div>
                    </div>
                </div>,
                portalTarget
            );
        }
        {
            /* 退出測驗 */
        }
        if (Modal == 4) {
            return createPortal(
                <div className='fixed inset-0 flex items-center justify-center bg-[#242424]'>
                    <div
                        id='Modal'
                        className='flex h-5/6 w-5/6 items-center justify-center border shadow-lg shadow-cyan-500/50'
                    >
                        <div>
                            <div>確定要退出測驗?</div>
                            <button
                                onClick={() => {
                                    Close(false);
                                    go('/home');
                                }}
                            >
                                確定
                            </button>
                            <button
                                onClick={() => {
                                    Close(false);
                                }}
                            >
                                取消
                            </button>
                        </div>
                    </div>
                </div>,
                portalTarget
            );
        }
    }
    {
        /* 退出確認 */
    }
};

export default Modal;
