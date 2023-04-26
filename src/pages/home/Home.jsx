import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; //取得redux定義的state
import { useDispatch } from 'react-redux'; //取得redux定義的func
import TestHeader from '../../components/TestHeader';
import { useGetQATestQuery } from '../../services/QAServices';
import { setSubmitDataNew } from '../../slices/submitDataSlice';

const Home = () => {
    const QADispatch = useDispatch();

    const go = useNavigate();

    const { data, error, isSuccess, isLoading, refetch } = useGetQATestQuery();

    useEffect(() => {
        QADispatch(setSubmitDataNew({ data }));
    }, [data]);

    return (
        <div className='h-screen'>
            <TestHeader />
            {/* 上面 */}
            <div className='flex h-1/3 items-center justify-center'>虛擬教師</div>
            {/* 下面 */}
            <div className='flex h-1/2 items-center'>
                {/* 左邊區塊 */}
                <div className='h-full w-1/2'>
                    <div className='flex h-3/6 w-full items-center justify-center'>
                        <img className='h-full w-2/3' src='/vite.svg' />
                    </div>
                    <div className='flex h-2/6 w-full items-center justify-center'>
                        <label className='w-2/3'>
                            Text Text Text Text Text Text Text Text Text Text Text Text
                            Text Text Text Text Text Text Text Text Text Text Text Text
                            Text Text
                        </label>
                    </div>
                    <div className='flex h-1/6 w-full items-center justify-center'>
                        <button
                            className='w-1/2'
                            onClick={() => {
                                refetch();
                                go('/QA');
                            }}
                        >
                            QA
                        </button>
                    </div>
                </div>
                {/* 右邊區塊 */}
                <div className='h-full w-1/2'>
                    <div className='flex h-3/6 w-full items-center justify-center'>
                        <img className='h-full w-2/3' src='/vite.svg' />
                    </div>
                    <div className='flex h-2/6 w-full items-center justify-center'>
                        <label className='w-2/3'>
                            Text Text Text Text Text Text Text Text Text Text Text Text
                            Text Text Text Text Text Text Text Text Text Text Text Text
                            Text Text
                        </label>
                    </div>
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
        </div>
    );
};

export default Home;
