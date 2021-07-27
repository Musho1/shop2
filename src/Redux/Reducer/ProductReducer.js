import ProductState from "../State/ProductState"

function ProductReducer(state=ProductState,action){
    let temp={...state}
    if(action.type==='EndGetCategory'){
        temp.Product=action.value
    }
    return temp
}
export default ProductReducer