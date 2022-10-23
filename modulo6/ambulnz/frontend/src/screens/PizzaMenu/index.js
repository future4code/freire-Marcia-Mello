import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";
import PizzaCard from "../../components/PizzaCard";
import {ContainerSection} from "./styles";

function PizzasMenu(props) {
    const { addToCart } = props

    const [ pizzas, setPizzas ] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/pizzas`)
            .then((res) => {
                setPizzas(res.data.pizzas)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <ContainerSection>
            <ul>
                {pizzas.map((pizza) => {
                    return (
                        <PizzaCard
                            key={pizza.name}
                            pizza={pizza}
                            addToCart={addToCart}
                        />
                    )
                })}
            </ul>
        </ContainerSection>
    )
}

export default PizzasMenu;