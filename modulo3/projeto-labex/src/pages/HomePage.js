import React from "react";
import { useNavigate } from "react-router-dom";
import { goToTripsList, goToAdminPage } from "../Router/coorditator";

const HomePage = () => {
    const navigate = useNavigate()

    return (

        <div>
            <h3> HomePage </h3>
            <button onClick={() => goToTripsList(navigate)}>Lista de Viagens</button>
            <button onClick={() => goToAdminPage(navigate)}>Área Adm</button>
        </div>
    );
};

export default HomePage;