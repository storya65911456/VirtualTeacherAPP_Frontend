import React from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogout } from '../slices/userSlice';

const Modal = ({ Visible, Close, Modal }) => {
    const go = useNavigate();

    const portalTarget = document.getElementById('root');

    const UserDispatch = useDispatch();

    const submitData = useSelector((state) => state.submit);

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
            /* 登出 */
        }
        if (Modal == 2) {
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
                                    UserDispatch(setLogout());
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
        if (Modal == 3) {
            console.log(submitData);
            return createPortal(
                <div className='fixed inset-0 flex items-center justify-center bg-[#242424]'>
                    <div
                        id='Modal'
                        className='flex h-5/6 w-5/6 items-center justify-center border shadow-lg shadow-cyan-500/50'
                    >
                        <div>test</div>
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
