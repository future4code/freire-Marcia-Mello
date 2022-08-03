import React from "react";
import { useNavigate } from "react-router-dom";
import { goToTripsList, goToAdminPage } from "../Router/coorditator";

const HomePage = () => {
    const navigate = useNavigate()

    return (

        <div>
            <h1> LabeX </h1>
            <section className="buttons-container">
                <button onClick={() => goToTripsList(navigate)}>Lista de Viagens</button>
                <button onClick={() => goToAdminPage(navigate)}>Área Adm</button>
            </section>
        </div>
    );
};

export default HomePage;