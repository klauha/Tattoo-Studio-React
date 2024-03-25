import "./Navigator.css";
import { useNavigate } from "react-router-dom";

export const Navigator = ({ title, destination }) => {
  //Instancio useNavigate en una const llamada navigate para poder usarlo
  const navigate = useNavigate();

  return (
    <div className="navigatorDesign" onClick={() => navigate(destination)}>
      {title}
    </div>
  );
};
