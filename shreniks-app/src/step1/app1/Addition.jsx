import Button from "./Button";




let Addition = ({num1,num2}) => {

    let addition_click = () => {
        alert("Addition = " + (num1+num2));
    }

    return (
        <>
            <Button label={"Addition"} fn={addition_click}/>
        </>
    )
}

export default Addition;