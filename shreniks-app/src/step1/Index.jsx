import CalculatorApp from "./app1/Index";
import Cart from "./Cart";
import Product from "./Product";


let Step1 = () => {
    let products_stock = [
        {code:841, title:"Mouse", cost:800},
        {code:135, title:"Keyboard", cost:1400},
    ]

    return (
        <div>

            {/* "data" is props used to share parent component data to children component */}
            {/* <Product data={products_stock}/>
            <Cart data={products_stock} date={"22/Feb/2026"} x={19}/> */}
            
            <div>
                <CalculatorApp />
            </div>
        </div>
    )
}

export default Step1;