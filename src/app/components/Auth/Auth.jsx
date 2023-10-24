'use client'

import { useLoginMutation, useRegisterMutation, useLogoutMutation } from "@/store/services/authApi";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectIsAuth, selectUser } from "@/store/features/auth/selectors";
import { redirect } from "next/navigation";



export default function Auth({

}) {

    const userFromStore = useSelector(state => selectUser(state));
    const isAuthFromStore = useSelector(state => selectIsAuth(state));

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [register, resultRegister] = useRegisterMutation()
    const [login, resultLogin] = useLoginMutation();

    let user;

    if (resultLogin.isSuccess){
        redirect('/admin');
    }

    return (
        <div>
            <label>
                Your email:
                <input
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    autoComplete="email"
                />
            </label>
            <label>
                Your password:
                <input
                    placeholder="xxxxxxxx"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
            </label>
            <button onClick={async () => {
                await login({email, password});
                console.log(resultLogin);
            }
            }>
                LOGIN
            </button>
            <button onClick={() => register({email, password}).unwrap().then((payload) => console.log('fullfilled', payload)).catch(e => console.log('rejected', e))}>
                REGISTER
            </button>
            <div>
                {JSON.stringify(resultLogin?.data?.user)}
            </div>
            <div>
                from store:
                <div>
                    {JSON.stringify(userFromStore)}
                </div>
                <div>
                    {`isAuth: ${isAuthFromStore}`}
                </div>
            </div>
            {/* <AdminPanel /> */}
        </div>
    )

}