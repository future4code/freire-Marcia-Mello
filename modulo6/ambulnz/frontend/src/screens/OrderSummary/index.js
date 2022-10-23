import { ContainerSection, CloseOrderWrapper, OrdersContainer } from "./styles";
import OrderItemCard from "../../components/OrderItemCard/OrderItemCard"

function OrderSummary(props) {
    const { cart, removeFromCart, total, confirmOrder } = props

    return (
        <ContainerSection>

            <OrdersContainer>
                <h1>Resumo do pedido</h1>

                {cart.map((pizza) => {
                    return (
                        <OrderItemCard
                            key={pizza.name}
                            pizza={pizza}
                            removeFromCart={removeFromCart}
                        />
                    )
                })}
            </OrdersContainer>

            <CloseOrderWrapper>
                <h2>
                    Total: {
                        total.toLocaleString(
                            'pt-br',
                            { style: 'currency', currency: 'BRL' }
                        )}
                </h2>
                <button onClick={confirmOrder}>Confirmar pedido</button>
            </CloseOrderWrapper>
        </ContainerSection>
    )
}

export default OrderSummary