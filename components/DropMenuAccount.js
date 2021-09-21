import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext';


const DropMenuAccount = () => {
    const { signout } = useContext(AuthContext);
    const deneme =  () => {
        console.log("asdasd");
    }
    return (
        <div className="bg-white absolute top-16 w-40 rounded-lg border-2 border-gray-300">
            <ul className="p-3">
                <li>
                    <button className="text-lg text-secondary-color" onClick={signout}>Çıkış Yap</button>
                </li>
            </ul>
        </div>
    )
}

export default DropMenuAccount
