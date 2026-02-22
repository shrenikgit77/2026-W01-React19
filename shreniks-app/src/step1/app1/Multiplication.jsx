import Button from "./Button";






let Multiplication = () => {

    let multiplication_click = () => {
        alert("Multiplication Click");
    }
    return (
        <>
            <Button label={"Multiplication"} fn={multiplication_click}/>
        </>
    )
}

export default Multiplication;