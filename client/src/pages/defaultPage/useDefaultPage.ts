import {useNavigate} from "react-router";
import {useCallback} from "react";
import {ROUTES} from "../../router";


export function useDefaultPage() {
    const navigate = useNavigate()

    const handleToGoSignIn = useCallback(() => {
        navigate(ROUTES.public.signIn)
    },[])

    const handleToGoSignUp = useCallback(() => {
        navigate(ROUTES.public.signUp)
    },[])

    return {
        handleToGoSignIn,
        handleToGoSignUp
    }

}