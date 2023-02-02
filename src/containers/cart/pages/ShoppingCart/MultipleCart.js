import { useCart } from '../../utils/useCart'
import { useSecondCart } from '../../utils/useSecondCart'
import LinkItems from './components/LinkItems'

// 因ListItemsWithProps綁定useCart使用，
// 這裡要改用傳入props的方式來呈現清單
import ListItemsWithProps from './components/ListItemsWithProps'

function MultipleCart(props) {
  const firstCart = useCart()
  const secondCart = useSecondCart()

  return (
    <>
      <h1>多個不同購物車範例</h1>
      <p className="text-nowrap bd-highlight">
        /pages/ShoppingCart/MultipleCart.js
      </p>
      <div className="alert alert-warning" role="alert">
        註: 請見 README.md 中說明，不同購物車需要有各別的 ContextProvider 和
        hook。
      </div>

      {/* 連自各測試頁 */}
      <h4>其它頁面</h4>
      <LinkItems />
      {/* 列出cart中清單 */}
      <h2>1st 購物車</h2>
      <div>
        <ListItemsWithProps
          cart={firstCart.cart}
          items={firstCart.items}
          plusOne={firstCart.plusOne}
          minusOne={firstCart.minusOne}
          removeItem={firstCart.removeItem}
        />
      </div>
      <div className="btn-group-vertical">
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            console.log(firstCart.cart)
          }}
        >
          log cart
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            firstCart.addItem({
              id: '111',
              quantity: 5,
              name: 'iphone',
              price: 15000,
              color: 'red',
              size: '',
            })
          }}
        >
          add item (id=111, x5)
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            firstCart.addItem({
              id: '222',
              quantity: 1,
              name: 'ipad',
              price: 19000,
              color: '',
              size: '',
            })
          }}
        >
          add item (id=222, x1)
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            firstCart.removeItem('222')
          }}
        >
          remove item(id=222)
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            firstCart.updateItem({
              id: '222',
              quantity: 7,
            })
          }}
        >
          update id=222 item quantity to 7
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            firstCart.updateItem({
              id: '111',
              quantity: 99,
            })
          }}
        >
          update id=111 item quantity to 99
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            firstCart.clearCart()
          }}
        >
          clear cart
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            if (firstCart.isInCart('222')) alert('id=222 item is in cart')
            else alert('no id=222  ')
          }}
        >
          check id=222 if in cart
        </button>
      </div>
      <hr />

      <h2>2nd 購物車</h2>
      <div>
        <ListItemsWithProps
          cart={secondCart.cart}
          items={secondCart.items}
          plusOne={secondCart.plusOne}
          minusOne={secondCart.minusOne}
          removeItem={secondCart.removeItem}
        />
      </div>
      <div className="btn-group-vertical">
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            console.log(secondCart.cart)
          }}
        >
          log cart
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            secondCart.addItem({
              id: '111',
              quantity: 5,
              name: 'iphone',
              price: 15000,
              color: 'red',
              size: '',
            })
          }}
        >
          add item (id=111, x5)
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            secondCart.addItem({
              id: '222',
              quantity: 1,
              name: 'ipad',
              price: 19000,
              color: '',
              size: '',
            })
          }}
        >
          add item (id=222, x5)
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            secondCart.removeItem('222')
          }}
        >
          remove item(id=222)
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            secondCart.updateItem({
              id: '222',
              quantity: 7,
            })
          }}
        >
          update id=222 item quantity to 7
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            secondCart.updateItem({
              id: '111',
              quantity: 99,
            })
          }}
        >
          update id=111 item quantity to 99
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            secondCart.clearCart()
          }}
        >
          clear cart
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            if (secondCart.isInCart('222')) alert('id=222 item is in cart')
            else alert('no id=222  ')
          }}
        >
          check if id=222 in cart
        </button>
      </div>
    </>
  )
}

export default MultipleCart
