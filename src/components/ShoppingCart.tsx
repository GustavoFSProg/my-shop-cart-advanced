import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../contexts/ShoppingCartContext"
import { CartItem } from "./CartItem"
import storeItems from "../data/items.json"
import Moeda from "../utilities/Moeda"

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems, increaseCartQuantity, getItemQuantity, decreaseCartQuantity } = useShoppingCart()
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <>
            <CartItem key={item.id} {...item} />
           <button onClick={() => increaseCartQuantity(item.id)}>
            + Mais
             
            </button>
            <button onClick={() => decreaseCartQuantity(item.id)}>
            - Menos
             
            </button>
           <p>
            Quantidade:
            <span style={{marginLeft: '5px'}}>


            {getItemQuantity(item.id)}
            </span>
            </p> 
            </>
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {Moeda.formatar(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
