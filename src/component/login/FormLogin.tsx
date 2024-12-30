import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { alertModal } from "../../shared/alerts";
import { verifyUser } from "../../store/userSlide";
import "./login.modules.css";
const FormLogin = () => {
  const isLoggedIn = useSelector((state: any) => state.login.isLoggedIn); // Si el slice se llama "user"
  const [isLoading, setIsLoading] = useState(false); // Estado para manejar el proceso de carga
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      alertModal(
        "Correcto!",
        "Inicio de sesión exitoso",
        "success",
        "continuar"
      );
      navigate("/home");
    } else if (isLoading) {
      alertModal("Revisar", "Credenciales incorrectas", "error", "corregir");
    }
  }, [isLoggedIn, isLoading]);
  const dispatch = useDispatch();
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const username = formData.get("username") as string; // Extraemos el valor del campo "username"
    const password = formData.get("password") as string; // Extraemos el valor del campo "password"

    if (!(username && password)) {
      alert("Por favor, complete todos los campos.");
      return;
    }
    setIsLoading(true);
    await dispatch(verifyUser({ username, password }));
    setIsLoading(false);
    e.currentTarget.reset(); // Cambia `e.target` por `e.currentTarget`
  };
  return (
    <form
      className={`row g-3 needs-validation sizes_form style_form`}
      onSubmit={submitForm}
    >
      <h2 className="text-center">Login</h2>
      <div>
        <label className="form-label">Username</label>
        <input
          type="text"
          className="form-control"
          id="validationCustom01"
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
      <div className="d-flex justify-content-end ">
        <span className="register">
          you dont account?{" "}
          <a className="link" href="/register">
            Register
          </a>
        </span>
      </div>

      <div className="d-flex justify-content-end">
        <button className="btn btn-primary btn-md">login</button>
      </div>
    </form>
  );
};

export default FormLogin;
