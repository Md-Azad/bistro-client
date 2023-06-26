import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);

    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
 

    const hangleGoogleLogin =()=>{
        googleSignIn()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);

            const saveUser ={name: loggedUser.displayName, email:loggedUser.email}   
                fetch('http://localhost:5000/users',{
                  method: 'POST',
                  headers:{
                    'content-type': 'application/json'
                  },
                  body: JSON.stringify(saveUser)
                })
                .then(res=>res.json())
                .then(()=>{
                    navigate(from, { replace: true });
                })


            
            
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
