import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLazyGetQAQuery } from '../services/QAServices';
import { setDefaultVTData, setVTData } from '../slices/VTSlice';
import TextList from './TextList';

const ModalVT = ({ Visible, Close, Modal }) => {
    const userRef = useRef(null);

    const portalTarget = document.getElementById('root');

    const VTData = useSelector((state) => state.vt);

    const dispatch = useDispatch();

    const date = new Date();

    const [getQAQuery, { isLoading, isFetching }] = useLazyGetQAQuery();

    const send = async () => {
        const val = userRef.current.value;
        if (val === '') return;
        userRef.current.value = null;
        dispatch(
            setVTData({
                date: date.toString(),
                val: val,
                fromUser: true
            })
        );
        const { data } = await getQAQuery(val);
        dispatch(
            setVTData({
                date: date.toString(),
                val: data.toString(),
                fromUser: false
            })
        );
    };
    // console.log(isFetching);
    {
        /* 虛擬教師 */
    }
    if (Visible && Modal == 4) {
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
                                dispatch(setDefaultVTData());
                            }}
                        >
                            Close
                        </label>
                    </div>
                    {/* 身 */}
                    <div className='h-3/4 w-full overflow-auto p-3'>
                        <ul>
                            <TextList val={VTData} Loading={isFetching} />
                            {isFetching && <span>請稍後</span>}
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
                        <button
                            className='h-fit w-fit'
                            onClick={send}
                            disabled={isFetching}
                        >
                            {isFetching ? '稍後' : 'Send'}
                        </button>
                    </div>
                </div>
            </div>,
            portalTarget
        );
    }
};

export default ModalVT;
