function TopProductCard(props){
    return <div className="TopProductCard">
        <div className="TopProductCardimg">
            {props.item.ProductImgs!=undefined ||props.item.Product.ProductImgs!==undefined &&
                <img src={props.item.Product!==undefined?props.item.Product.ProductImgs[1].image:props.item.ProductImgs[0].image}></img>   
            }
        </div>
        <div className="TopProductCardText">
            <p>{props.item.Product !==undefined && props.item.Product.name}</p>
            <p>{props.item.Product !==undefined && props.item.Product.price}</p>    
        </div>    
    </div>
}
export default TopProductCard