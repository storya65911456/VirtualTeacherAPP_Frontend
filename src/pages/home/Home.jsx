import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; //取得redux定義的state
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import TestHeader from '../../components/TestHeader';
import { useLazyGetQATestQuery } from '../../services/QAServices';
import { setSubmitDataNew } from '../../slices/submitDataSlice';

const correctData = [
    {
        ID: 2,
        Question: '低血鈣主要會刺激那一個內分泌腺體的激素分泌，以增加血鈣濃度?',
        Answer: '副甲狀腺'
    },
    {
        ID: 1,
        Question: '下列何者主要是由膜（membrane）構成的胞器?',
        Answer: '內質網'
    }
];

const incorrectData = [
    [
        {
            ID: 3,
            Question: '低血鈣主要會刺激那一個內分泌腺體的激素分泌，以增加血鈣濃度?',
            Answer: '副甲狀腺',
            Click: '內質網'
        },
        {
            ID: 4,
            Question: '下列何者主要是由膜（membrane）構成的胞器?',
            Answer: '內質網',
            Click: '副甲狀腺'
        }
    ]
];

const Home = () => {
    const QADispatch = useDispatch();

    const userData = useSelector((state) => state.user);

    const go = useNavigate();

    const [getData, { isSuccess, isLoading }] = useLazyGetQATestQuery();

    const [correctVisible, setCorrectVisible] = useState(false);
    const [incorrectVisible, setIncorrectVisible] = useState(false);

    console.log('test');

    return (
        <div className='h-screen2'>
            <TestHeader />
            {/* 上面 */}
            <div className='flex h-1/6 items-center justify-center'>
                <label className=''>個人資料</label>
            </div>
            <div className='h-fit min-h-[16.66667%]'>
                <div className='flex h-1/2 items-center justify-center text-cyan-300 underline underline-offset-2'>
                    <label
                        className='cursor-pointer'
                        onClick={() => {
                            setCorrectVisible(!correctVisible);
                        }}
                    >
                        歷史答對題數 : {userData.profile.correct_num}
                    </label>
                </div>
                {correctVisible && (
                    <div className='h-fit'>
                        {correctData.map((data) => {
                            return (
                                <div className='m-auto h-fit w-1/2'>
                                    <label key={data.ID}>
                                        <p>{data.ID}</p>
                                        <p>{data.Question}</p>
                                        <p>{data.Answer}</p>
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                )}
                <div className='flex h-1/2 items-center justify-center text-cyan-300 underline underline-offset-2'>
                    <label
                        className='cursor-pointer'
                        onClick={() => {
                            setIncorrectVisible(!incorrectVisible);
                        }}
                    >
                        歷史答錯題數 : {userData.profile.incorrect_num}
                    </label>
                </div>
            </div>
            {/* 下面 */}
            <div className='flex h-1/2 items-center'>
                {/* 左邊區塊 */}
                <div className='h-full w-1/2'>
                    <div className='flex h-1/6 w-full items-center justify-center'>
                        <button
                            className='w-1/2'
                            onClick={async () => {
                                const { data } = await getData();
                                QADispatch(setSubmitDataNew({ data }));
                                go('/QA');
                            }}
                        >
                            QA
                        </button>
                    </div>
                </div>
                {/* 右邊區塊 */}
                <div className='h-full w-1/2'>
                    <div className='flex h-1/6 w-full items-center justify-center'>
                        <button
                            className='w-1/2'
                            onClick={() => {
                                go('/QA2');
                            }}
                        >
                            QA2
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
