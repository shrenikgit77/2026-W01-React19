import Button from "./Button";



let Division = () => {

    let division_click = () => {
        alert("Division Clicked");
    }
    
    return (
        <>
            <Button label={"Division"} fn={division_click}/>
        </>
    )
}

export default Division;