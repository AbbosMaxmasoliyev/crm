import { BsCart2 } from "react-icons/bs"
import { MdFavoriteBorder } from "react-icons/md"
// MdFavoriteBorder

const Cart = ( { quantity } ) => {
    return (
        <div className="cart">
            <button><MdFavoriteBorder style={{width:"24px", height:"24px"}} /></button>
            <button><BsCart2  style={{width:"24px", height:"24px"}}/></button>
        </div>
    )
}
export default Cart