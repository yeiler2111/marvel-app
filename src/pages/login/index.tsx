import { useEffect } from "react";
import FormLogin from "../../component/login/FormLogin";
import style from "./../../index.module.css";
const Login = () => {
  useEffect(() => {
    document.body.classList.add(style.loginBackground);

    return () => {
      document.body.classList.remove(style.loginBackground);
    };
  }, []);

  return (
    <div className={style.loginContainer}>
      <div className={style.loginBox}>
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;
