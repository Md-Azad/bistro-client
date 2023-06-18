import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const refCaptcha = useRef();
    const [disabled, setDisable] = useState(true);
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleLogin=(event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password);

    }

    const handleValidation = ()=>{
        const captchaText = refCaptcha.current.value;
        console.log(captchaText)
        if(validateCaptcha(captchaText)){
            setDisable(false)
        }
        else{
            setDisable(true);
        }
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/3 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card  w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                    </a>
                </label>
                </div>
                <div className="form-control">
                    <label className="label">
                    <LoadCanvasTemplate />
                    </label>
                    <input
                        type="text"
                        ref={refCaptcha}
                        name="captcha"
                        placeholder="captcha"
                        className="input input-bordered"
                    />
                    <button onClick={handleValidation} className="btn btn-warning btn-xs">validate</button>
                </div>
                <div className="form-control mt-6">
                    <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                </div>
          </form>
          <p><small>New Here? <Link to='/signup'>Create an account</Link></small></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
