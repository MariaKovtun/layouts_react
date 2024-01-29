
const ShopList = ({items}) => {
    return (
        <table>
            {items.map((item,index) => 
            <ShopListItem key={index} item={item} index={index}></ShopListItem>)}
        </table>
         
    )
}

const ShopListItem = ({item,index}) => {
    return (
    <tr className="list-item">
      <td>
          <img src={item.img}></img>
      </td>
      <td>
          <h1>{item.name}</h1>
      </td>
      <td>{item.color}</td>
      <td className="text-red">${item.price}</td>
      <td>
          <button className="text-red">ADD TO CART</button>
      </td>
    </tr>)
}

export default ShopList