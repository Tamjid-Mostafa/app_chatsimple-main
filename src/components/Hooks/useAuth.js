import { useSelector } from 'react-redux';


export default function useAuth(){

     const fbUserID = useSelector((state) => state.fb.fbUserID);

     if (fbUserID === null) {
           return false ;
     }else{
          return true ;
     }


}