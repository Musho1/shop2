import SliderState from "../State/SliderState"

function SliderReducer(state=SliderState,action){
    let temp={...state}
    if(action.type==="EndGetSlider"){
        temp.slider=action.value
    }
    return temp
}
export default SliderReducer