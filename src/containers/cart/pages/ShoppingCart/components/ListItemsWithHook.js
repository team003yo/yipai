import { useCart } from '../../../utils/useCart'
import { RiCloseCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
function ListItemsWithHook() {
  // 使用hooks 解出所需的狀態與函式(自context)
  const { cart, items, plusOne, minusOne, removeItem } = useCart()

  return (
    <div>
      <table
        striped
        hover
        className="table-color margin-top-30 tables-text-size"
        cellPadding="0"
        border="0"
        width="100%"
        cellSpacing="0"
      >
        <thead>
          <tr>
            
            <th className='text-center'>預覽</th>
            <th className='text-center'>名稱</th>
            <th>單價</th>
            <th>數量</th>
            <th>小計</th>
            <th>移除</th>
          </tr>
        </thead>
        <tbody>
          {items.map((v, i) => {
            return (
              <tr key={v.id}>
                
                <td className='cart__peview text-center'><Link to={`/products/${v.id}`}><img src={v.img_file}></img></Link></td>
                <td className='text-center'><Link to={`/products/${v.id}`}><a>{v.name}</a></Link></td>
                <td>{v.price}</td>
                <td>
                  <div className="btn-group mr-2" role="group">
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => {
                        minusOne(v.id)
                      }}
                    >
                      -
                    </button>
                    <button type="button" className="btn btn-light">
                      {v.quantity}
                    </button>
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => {
                        plusOne(v.id)
                      }}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>{v.itemTotal}</td>
                <td>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => {
                      removeItem(v.id)
                    }}
                  >
                        <RiCloseCircleFill className="close-icons" />
                    
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div>
        <br />
        <div className='text-center'>
        {cart.isEmpty && '購物車為空'}

        </div>
        <hr />
      </div>
    </div>
  )
}

export default ListItemsWithHook
