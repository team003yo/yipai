function ListItemsWithProps(props) {
  // 使用porps傳入所需的函式與狀態值
  const { cart, items, plusOne, minusOne, removeItem } = props

  return (
    <div>
      <table
        className="table"
        cellPadding="0"
        border="0"
        width="100%"
        cellSpacing="0"
      >
        <thead>
          <tr>
            <th>id</th>
            <th>名稱</th>
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
                <td>{v.id}</td>
                <td>{v.name} </td>
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
                    className="btn btn-light"
                    onClick={() => {
                      removeItem(v.id)
                    }}
                  >
                    x
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div>
        items: {cart.totalItems} / total: {cart.cartTotal}
        <br />
        {cart.isEmpty && '購物車為空'}
        <hr />
      </div>
    </div>
  )
}

export default ListItemsWithProps
