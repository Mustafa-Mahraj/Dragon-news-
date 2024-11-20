import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    const location = useLocation();
    const navigate = useNavigate()

    const { LoginUser, setUser, setError, error } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email')
        const password = form.get('password')

        LoginUser(email, password)
            .then((result) => {
                setUser(result.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                setError(error.code)
            })
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl p-10">
                <h2 className='text-2xl font-bold text-center'>Login Your account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        {
                            error? <p className='text-sm text-red-600 mt-2'>{error}</p> : ''
                        }
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className='text-center font-semibold'>Don't Have An Account ? <Link className='text-red-500 hover:underline' to='/auth/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;