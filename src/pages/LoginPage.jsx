import {useRef} from 'react';
import '../styles/LoginPage.scss';

const redirect = (e) => {
    e.preventDefault();
    console.log("hi");
    window.location.href = '/home';
    
}

const LoginPage = () => {
  const login = useRef(0);
  const signup = useRef(1);
  return (
    <div className="login-page">
        <div ref={signup} className="sign login-form">
            <h2 className="login-form__title">Sign Up</h2>
            <form className="login-form__form">
                <input type="text" placeholder="Name" className="login-form__input" />
                <input type="text" placeholder="Email" className="login-form__input" />
                <input type="password" placeholder="Password" className="login-form__input" />
                <button className="login-form__button" onClick={(e)=>redirect(e)}>Sign Up</button>
                <span className="login-form__signup-text">Already have an account? <span onClick={ ()=>{
                    login.current.style.display = "block";
                    signup.current.style.display = "none";
                }}>Log in</span> </span>
            </form>
        </div>
        <div style={{display: "none"}}ref={login} className="login login-form">
            <h2 className="login-form__title">Log In</h2>
            <form className="login-form__form">
                <input type="text" placeholder="Email" className="login-form__input" />
                <input type="password" placeholder="Password" className="login-form__input" />
                <button className="login-form__button" onClick={(e)=>redirect(e)}>Log In</button>
                <span className="login-form__signup-text">New to BookBuddy? <span onClick={ ()=>{
                    login.current.style.display = "none";
                    signup.current.style.display = "block";
                }}
                >Sign up</span> </span>
            </form>
        </div>
    </div>
  );
};

export default LoginPage;
