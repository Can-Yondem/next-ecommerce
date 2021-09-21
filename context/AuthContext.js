import { createContext, useState, useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { SING_IN } from "../graphql/queries";
import { useSession } from "next-auth/client"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [error, setError] = useState(null);
    const [sign_in, { data, loading }] = useMutation(SING_IN);
    const router = useRouter();

    useEffect(() => checkUserLoggedIn(), []);

    const signup = async (user) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        const data = await res.json();

        if (res.ok) {
            setUser(`${data.user.name} ${data.user.surname}`)
            router.push("/");
        }
        else {
            setError(data.message)
            setError(null);
        }
    }

    const signin = async ({ email: identifier, password }) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                identifier,
                password
            })
        });
        const data = await res.json();
        if (res.ok) {
            setUser(`${data.user.name} ${data.user.surname}`)
            router.push("/");
        }
        else {
            setError(data.message)
            setError(null);
        }
    }

    const signout = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/signout`, {
            method: "POST",
        });
        if (res.ok) {
            setUser(null);
            router.push("/")
        }
    }

    const checkUserLoggedIn = async (user) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/user`);
        const data = await res.json();

        if (res.ok) {
            setUser(`${data.user.name} ${data.user.surname}`)
        }
        else {
            setUser(null)
        }
    }
    return (
        <AuthContext.Provider value={{ user, error, signin, signup, signout }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;
