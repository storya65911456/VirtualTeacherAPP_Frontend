import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; //取得redux定義的func
import { useNavigate } from 'react-router-dom';
import TestHeader from '../../components/TestHeader';
import { useGetUserQuery } from '../../services/QAServices';
import { setLogin } from '../../slices/userSlice';

let inputObj = {};

const Login = () => {
    const go = useNavigate();

    const UserDispatch = useDispatch();

    const [skip, setSkip] = useState(true);

    const [pass, setPass] = useState('');

    const accountRef = useRef(null);

    const { data, error, isSuccess, isLoading } = useGetUserQuery(inputObj, {
        skip: skip
    });
    // console.log('data', data);
    // console.log('error', error);
    // console.log('skip', skip);

    useEffect(() => {
        if (data?.[1]?.identity == 1) {
            UserDispatch(setLogin(data[1]));
            go('/home');
        }
        if (data?.[1]?.identity == 2) {
            UserDispatch(setLogin(data[1]));
            go('/admin');
        }
    }, [pass, data]);

    const send = () => {
        inputObj = {
            account: accountRef.current.value,
            pass: pass
        };
        setPass('');
        setSkip(false);
    };
    return (
        <div className='h-screen'>
            <TestHeader />
            <div className='flex h-5/6 w-full items-center justify-center'>
                <div className='w-1/2 max-w-md'>
                    <input
                        className='my-2 h-10 w-full border-indigo-500 hover:border-2'
                        ref={accountRef}
                        type='text'
                        placeholder='  您的帳號'
                    />
                    <input
                        className='my-2 h-10 w-full border-indigo-500 hover:border-2'
                        type='text'
                        placeholder='  您的密碼'
                        value={pass}
                        onChange={(e) => {
                            setPass(e.target.value);
                        }}
                    />
                    {(error || data == 0) && (
                        <p className='w-full text-xs text-red-600'>錯誤</p>
                    )}
                    <button className='float-left my-2 w-2/5' onClick={() => {}}>
                        R
                    </button>
                    <button className='float-right my-2 w-2/5' onClick={send}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
