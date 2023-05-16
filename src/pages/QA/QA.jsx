import React, { useEffect, useRef, useState } from 'react';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import TestHeader from '../../components/TestHeader';
import QATest from './components/QATest';

const QA = () => {
    const [QAId, setQAId] = useState(1);

    const [modalVisible, setModalVisible] = useState(false);
    const [witchModal, setWitchModal] = useState(0);

    return (
        <div className='h-screen2'>
            <TestHeader QAId={QAId} />
            {/* <Test /> */}
            {/* 預留空間 */}
            <div className='h-[10%]'></div>
            {/* 問題+選項 */}
            <div className='flex h-[55%] max-h-fit justify-between overflow-auto'>
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
                            setModalVisible(true);
                            setWitchModal(3);
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
            <Modal Visible={modalVisible} Close={setModalVisible} Modal={witchModal} />
            <Footer />
        </div>
    );
};

export default QA;
