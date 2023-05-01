import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSubmitData } from '../../../slices/submitDataSlice';

const QATest = ({ QAId }) => {
    const submitData = useSelector((state) => state.submit);
    const data = submitData.data[QAId - 1];
    const dispatch = useDispatch();

    const Symbols = (data, QNum) => {
        if (data?.Answer == QNum && data?.Click != '')
            return <p className='text-green-500'>&nbsp; ✔ &nbsp;</p>;
        if (data?.Click == QNum) return <p className='text-rose-500'>&nbsp; ✖ &nbsp;</p>;
        return null;
    };

    return (
        <div className='h-full w-full'>
            {/* 問題 */}
            <div className='flex h-1/2 items-center  text-xl'>
                <label>{data.Question}</label>
            </div>
            <div className='flex h-1/2 items-center'>
                <ul className='h-full w-full'>
                    {/* 答A */}
                    <li
                        id='A'
                        className='flex h-1/4 cursor-pointer items-center border-y-2'
                        onClick={(e) => {
                            if (data.Finish == 0) {
                                dispatch(
                                    setSubmitData({
                                        QAId: QAId,
                                        Click: e.target.id
                                    })
                                );
                            }
                        }}
                    >
                        {Symbols(data, 'A')}( A ). {data.A}
                    </li>
                    {/* 答B */}
                    <li
                        id='B'
                        className='flex h-1/4 cursor-pointer items-center border-b-2'
                        onClick={(e) => {
                            if (data.Finish == 0) {
                                dispatch(
                                    setSubmitData({
                                        QAId: QAId,
                                        Click: e.target.id
                                    })
                                );
                            }
                        }}
                    >
                        {Symbols(data, 'B')}( B ). {data.B}
                    </li>
                    {/* 答C */}
                    <li
                        id='C'
                        className='flex h-1/4 cursor-pointer items-center border-b-2'
                        onClick={(e) => {
                            if (data.Finish == 0) {
                                dispatch(
                                    setSubmitData({
                                        QAId: QAId,
                                        Click: e.target.id
                                    })
                                );
                            }
                        }}
                    >
                        {Symbols(data, 'C')}( C ). {data.C}
                    </li>
                    {/* 答D */}
                    <li
                        id='D'
                        className='flex h-1/4 cursor-pointer items-center border-b-2'
                        onClick={(e) => {
                            if (data.Finish == 0) {
                                dispatch(
                                    setSubmitData({
                                        QAId: QAId,
                                        Click: e.target.id
                                    })
                                );
                            }
                        }}
                    >
                        {Symbols(data, 'D')}( D ). {data.D}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default QATest;
