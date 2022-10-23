import { ContainerDiv } from "./styles";

function OrderSuccessPopup(props) {
    const { order, closePopup } = props

    return (
        <ContainerDiv>
            <div>
                <h2>Pedido realizado com sucesso!</h2>
                <h3>Resumo do pedido</h3>
                <p>Id do pedido: { order.id }</p>
                { order.pizzas.map((pizza) => (
                    <p key={pizza.name}>
                        Pizza {pizza.name} {" "}
                        - {pizza.price.toLocaleString(
                            'pt-br',
                            { style: 'currency', currency: 'USD' }
                        )}
                        {" "} x {pizza.quantity}
                    </p>
                )) }
                <p>
                    Total pago: {
                    order.total.toLocaleString(
                        'pt-br',
                        { style: 'currency', currency: 'USD' }
                    )}
                </p>

                <span
                    className="close-popup"
                    onClick={closePopup}
                >
                    x
                </span>
            </div>
        </ContainerDiv>
    )
}

export default OrderSuccessPopup