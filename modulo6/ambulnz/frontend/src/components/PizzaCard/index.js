import { ContainerLi, InformationsWrapper, PizzaIcon } from './styles';
import Pizza_Icon from "../../assets/icons/pizza.png";
function PizzaCard(props) {
    const { pizza, addToCart } = props

    return (
        <ContainerLi>
            <h3>{pizza.name}</h3>
            <PizzaIcon src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg" alt='Pizza'/>
            <InformationsWrapper>
                <div>
                    Ingredientes:
                    <p>
                        {pizza.ingredients.map((item) => {
                            return (
                                <span key={item}>{`${item} `}</span>
                            )
                        })}
                    </p>
                </div>
                <p className="card-price">
                    {pizza.price.toLocaleString(
                        'pt-br',
                        { style: 'currency', currency: 'BRL' }
                    )}
                </p>
                <button onClick={() => addToCart(pizza)}>Adicionar no carrinho</button>
            </InformationsWrapper>
        </ContainerLi>
    )
}

export default PizzaCard