import { useSelector } from 'react-redux';

export default function useAuth(){

    const myAuth = useSelector(state => state.auth);

    if(myAuth.user == null){
        const auth = false;

        return auth;
    }else{
        const auth = true;

        return auth;
    }

}