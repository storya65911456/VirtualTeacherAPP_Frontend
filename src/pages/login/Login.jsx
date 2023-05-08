import React, { useEffect, useRef, useState } from 'react';
import {} from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux'; //取得redux定義的func
import { useNavigate } from 'react-router-dom';
import TestHeader from '../../components/TestHeader';
import { useLazyGetUserQuery } from '../../services/QAServices';
import { setLogin } from '../../slices/userSlice';

let inputObj = {};

const Login = () => {
    const go = useNavigate();

    const UserDispatch = useDispatch();

    const accountRef = useRef(null);

    const passRef = useRef(null);

    const [accFocus, setAccFocus] = useState(false);
    const [passFocus, setPassFocus] = useState(false);

    const [login, { data, error, isSuccess, isLoading }] = useLazyGetUserQuery();
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
    }, [data]);

    const send = () => {
        inputObj = {
            account: accountRef.current.value,
            pass: passRef.current.value
        };
        login(inputObj);
        passRef.current.value = null;
    };
    return (
        <div className='h-screen'>
            <TestHeader />
            <div className='flex h-5/6 w-full items-center justify-center'>
                <div className='flex w-2/3 max-w-xs items-center justify-center border py-10 shadow-lg shadow-cyan-500/50'>
                    <div className='w-10/12'>
                        <div className='relative my-2'>
                            <label
                                className={`${
                                    accFocus ? 'focused' : ''
                                } absolute left-5 top-4 z-10 px-1 text-[#cdcdcd] transition-all duration-300 ease-linear`}
                            >
                                帳號
                            </label>
                            <input
                                className='placeholder-effects my-2 h-10 w-full border-[#ea4c88] p-2 hover:border-2'
                                ref={accountRef}
                                onFocus={() => {
                                    setAccFocus(true);
                                }}
                                onBlur={() => {
                                    if (accountRef.current.value === '') {
                                        setAccFocus(false);
                                    }
                                }}
                                type='text'
                            />
                        </div>
                        <div className='relative my-2'>
                            <label
                                className={`${
                                    passFocus ? 'focused' : ''
                                } absolute left-5 top-4 z-10 px-1 text-[#cdcdcd] transition-all duration-300 ease-linear`}
                            >
                                密碼
                            </label>
                            <input
                                className='placeholder-effects my-2 h-10 w-full border-[#ea4c88] p-2 hover:border-2'
                                ref={passRef}
                                onFocus={() => {
                                    setPassFocus(true);
                                }}
                                onBlur={() => {
                                    if (passRef.current.value === '') {
                                        setPassFocus(false);
                                    }
                                }}
                                type='password'
                            />
                        </div>
                        {(error || data?.[0] == 0) && (
                            <p className='w-full text-xs text-red-600'>
                                {data?.[1] ? data[1] : '錯誤'}
                            </p>
                        )}
                        <button className='my-2 w-full' onClick={send}>
                            Login
                        </button>
                        <div className='flex justify-between'>
                            <div className=''>
                                <input type='checkbox'></input>
                                <span>記住密碼</span>
                            </div>
                            <a className='' href='#'>
                                忘記密碼?
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
