import React from 'react'
import { useDispatch } from 'react-redux';
import { signout } from '../redux/user/userSlice';
import { useRouter } from 'next/router';


const DropMenuAccount = ({ role }) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const sign_out = async () => {
        dispatch(signout()).then(router.push("/"))
    }

    return (
        <div className="bg-white absolute top-16 w-40 rounded-lg border-2 border-gray-300">
            <ul className="p-3">
                <li>
                    {role === "admin" && <button className="text-lg text-secondary-color">Admin Paneli</button>}
                </li>
                <li>
                    <button className="text-lg text-secondary-color"
                        onClick={sign_out}
                    >
                        Çıkış Yap
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default DropMenuAccount
