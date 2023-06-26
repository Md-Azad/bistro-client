import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
 

    const hangleGoogleLogin =()=>{
        googleSignIn()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
    }
  return (
    <div>
      <div className="divider"></div>
      <div className='text-center my-4'>
        <button onClick={hangleGoogleLogin}  className="btn btn-circle btn-outline bg-black text-white">
            <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
