import { gql } from "@apollo/client"

const SING_IN = gql`
    mutation sign_in($email: String!, $password: String!){
        login(input: { identifier: $email , password: $password }) {
            jwt
        }
}`;

export {SING_IN};