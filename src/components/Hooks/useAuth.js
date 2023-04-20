import { useSelector } from 'react-redux';


export default function useAuth(){

    const isUser = useSelector(state => state.auth);


    if(isUser.user !== null){
         return false;
    }else{
         return true;
    }

}