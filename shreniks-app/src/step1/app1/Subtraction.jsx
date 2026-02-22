import Button from "./Button";






let Subtraction = () => {

    let subtraction_click = () => {
        alert("Subtraction Clicked");
    }

    return (
        <>
           <Button label={"Subtraction"} fn={subtraction_click}/>
        </>
    )
}

export default Subtraction;