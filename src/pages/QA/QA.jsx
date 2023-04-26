import React from 'react';
import { useState, useRef, useEffect } from 'react';
import QATest from '../../components/QATest';
import TestHeader from '../../components/TestHeader';
import { useDispatch } from 'react-redux';
import { setSubmitDataDefault } from '../../slices/submitDataSlice';

const QA = () => {
    const [QAId, setQAId] = useState(1);

    const dispatch = useDispatch();

    const [modalQVisible, setModalQVisible] = useState(false);

    return (
        <div className='h-screen'>
            <TestHeader QAId={QAId} />
            {/* <Test /> */}
            {/* 預留空間 */}
            <div className='h-1/6'></div>
            {/* 問題+選項 */}
            <div className='flex h-1/2 justify-between'>
                {/* 預留空間 */}
                <div className='w-1/6'></div>
                <div>
                    <QATest QAId={QAId} />
                </div>
                {/* 預留空間 */}
                <div className='w-1/6'></div>
            </div>
            {/* 下面按鈕 */}
            <div className='flex h-1/6 items-center'>
                <div className='flex h-full w-1/3 items-center justify-center'>
                    {QAId > 1 && (
                        <button
                            onClick={() => {
                                setQAId(QAId - 1);
                            }}
                        >
                            上一題
                        </button>
                    )}
                </div>
                <div className='flex h-full w-1/3 items-center justify-center'>
                    <button
                        onClick={() => {
                            dispatch(setSubmitDataDefault());
                        }}
                    >
                        結束測驗
                    </button>
                </div>
                <div className='flex h-full w-1/3 items-center justify-center'>
                    <img></img>
                    <button
                        onClick={() => {
                            setQAId(QAId + 1);
                        }}
                    >
                        下一題
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QA;
