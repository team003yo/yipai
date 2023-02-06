import { useCart } from '../../utils/useCart'
import { Link } from 'react-router-dom'
import ListItemsWithHook from './components/ListItemsWithHook'
import LinkItems from './components/LinkItems'

// cart init
// initialState = {
//   items: [],
//   isEmpty: true,
//   totalItems: 0,
//   cartTotal: 0,
// }

function SingleCart(props) {
  //可從useCart中獲取的各方法與屬性，參考README檔中說明
  const {
    cart,
    items,
    addItem,
    removeItem,
    updateItem,
    clearCart,
    isInCart,
    plusOne,
    minusOne,
  } = useCart()

  return (
    <>
      <h1>單一個購物車範例</h1>
      <p className="text-nowrap bd-highlight">
        /pages/ShoppingCart/SingleCart.js
      </p>

      {/* 連自各測試頁 */}
      <h4>其它頁面</h4>
      <LinkItems />
      {/* 列出cart中清單 */}
      <h4>購物車列表</h4>
      <ListItemsWithHook />
      {/* 以下為測試按鈕 */}
      <h4>測試按鈕</h4>
      <div className="btn-group-vertical">
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            console.log(cart)
          }}
        >
          log cart
        </button>

        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            addItem({
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
            addItem({
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
            removeItem('222')
          }}
        >
          remove item(id=222)
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            updateItem({
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
            updateItem({
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
            clearCart()
          }}
        >
          clear cart
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            if (isInCart('222')) alert('id=222 item is in cart')
            else alert('no id=222  ')
          }}
        >
          check if id=222 in cart
        </button>
      </div>
    </>
  )
}

export default SingleCart
