function TopProductCard(props){
    return <div className="TopProductCard">
        <div className="TopProductCardimg">
            <img src={props.item.Product.ProductImgs[1].image}></img>    
        </div>
        <div className="TopProductCardText">
            <p>{props.item.Product.name}</p>
            <p>{props.item.Product.price}</p>    
        </div>    
    </div>
}
export default TopProductCard