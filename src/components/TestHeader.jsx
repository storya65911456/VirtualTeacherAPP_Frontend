import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useLocalStorage from 'use-local-storage';
import DarkModeToggle from './DarkModeToggle';
import Modal from './Modal';
import ModalVT from './ModalVT';

const TestHeader = ({ QAId }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [witchModal, setWitchModal] = useState(0);

    const [mode, setMode] = useLocalStorage('mode' ? 'dark' : 'light');

    const state = useSelector((state) => state.user);

    const isLogin = state?.profile?.login;

    if (
        mode === 'light' ||
        (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: light)').matches)
    ) {
        document.documentElement.classList.add('light');
    } else {
        document.documentElement.classList.remove('light');
    }

    return (
        <header className='top-0'>
            <div className='box-border flex h-[50px] items-center justify-between border-b-2 px-2'>
                {/* 1 */}
                {isLogin && (
                    <div className='flex items-center'>
                        <label
                            onClick={() => {
                                setModalVisible(true);
                                setWitchModal(1);
                            }}
                        >
                            回選單
                        </label>
                    </div>
                )}
                {/* 2*/}
                <div className='flex items-center'>{QAId}</div>
                {/* 3 */}
                {isLogin && (
                    <div className='flex items-center'>
                        <label
                            onClick={() => {
                                setModalVisible(true);
                                setWitchModal(4);
                            }}
                        >
                            虛擬教師
                        </label>
                    </div>
                )}
                {/* 4 */}
                {isLogin && (
                    <div className='flex items-center'>
                        <label
                            onClick={() => {
                                setModalVisible(true);
                                setWitchModal(2);
                            }}
                        >
                            登出
                        </label>
                    </div>
                )}
                {/* 5 */}
                <div>
                    <DarkModeToggle mode={mode} setMode={setMode} />
                </div>
            </div>
            <Modal Visible={modalVisible} Close={setModalVisible} Modal={witchModal} />
            <ModalVT Visible={modalVisible} Close={setModalVisible} Modal={witchModal} />
        </header>
    );
};

export default TestHeader;
