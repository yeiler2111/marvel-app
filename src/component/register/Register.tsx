import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { alertModal } from "../../shared/alerts";
import {
  addUserRegister,
  resetUserRegister,
} from "../../store/userRegisterSlide";
import style from "./../../index.module.css";
import "./../login/login.modules.css";
import "./register.css";
export const Register = () => {
  useEffect(() => {
    document.body.classList.add(style.loginBackground);

    return () => {
      document.body.classList.remove(style.loginBackground);
    };
  }, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string; // Extraemos el valor del campo "username"
    const username = formData.get("username") as string; // Extraemos el valor del campo "username"
    const password = formData.get("password") as string; // Extraemos el valor del campo "password"

    if (!(email && password && username)) {
      alertModal(
        "Error al registrar",
        "Revise los campos",
        "error",
        "Verificar"
      );
    }
    dispatch(addUserRegister({ username, password, email }));
    dispatch(resetUserRegister());
    e.currentTarget.reset(); // Cambia `e.target` por `e.currentTarget`
    alertModal("Correcto!", "Inicio de sesión exitoso", "success", "continuar");
    alertModal(
      "registrado!",
      "ya puedes inciar sesion",
      "success",
      "continuar"
    );

    navigate("/");
  };
  return (
    <div className="container">
      <form className="sizes_form" onSubmit={handlerSubmit}>
        <h2 className="text-center">Register</h2>
        <div>
          <label className="form-label">email</label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            placeholder="email"
            name="email"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div>
          <label className="form-label">username</label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            placeholder="username"
            name="username"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div>
          <label className="form-label">password</label>
          <input
            type="password"
            className="form-control"
            id="validationCustom02"
            placeholder="password"
            name="password"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="d-flex justify-content-end mt-2">
          <button className="btn btn-primary btn-md">Login</button>
        </div>
      </form>
    </div>
  );
};
