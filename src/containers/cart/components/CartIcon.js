import { useCart } from 'utils/useCart'
import { FaShoppingCart } from 'react-icons/fa'
import './CartIcon.scss'

function CartIcon(props) {
  const { cart } = useCart()

  return (
    <button type="button" className="btn btn-primary">
      <FaShoppingCart className="cart-icon" />{' '}
      <span className="badge badge-danger badge-pill">{cart.totalItems}</span>{' '}
      <span className="badge badge-info badge-pill">{cart.cartTotal}</span>
    </button>
  )
}

export default CartIcon
