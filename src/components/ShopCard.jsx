
const ShopCard = ({items}) => {
    return (
        <div className="cards">
         {items.map((item,index) => 
         <ShopCardItem key={index} item={item} index={index}></ShopCardItem>)}
        </div>
    )
}

const ShopCardItem = ({item,index}) => {
    return (
    <div className="card" key={index}>
        <h1>{item.name}</h1>
        <h3>{item.color}</h3>
        <img src={item.img}></img>
        <div className="price-info">
            <span className="left-corner text-red">${item.price}</span>
            <button className="right-corner text-red">ADD TO CART</button>
        </div>
        
    </div>)
}

export default ShopCard