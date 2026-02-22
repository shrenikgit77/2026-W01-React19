import { useState } from "react";
import Addition from "./Addition";
import Division from "./Division";
import Multiplication from "./Multiplication";
import Subtraction from "./Subtraction";


let CalculatorApp = () => {
    let [num1, setNumber1] = useState(0);
    let [num2, setNumber2] = useState(0);
    

    return (
        <>

            <div className="flex justify-center">
                <div className="border-3 border-blue-900 rounded-xl shadow-2xl m-4 w-1/4">
                    <h1 className="bg-blue-900 text-center text-xl text-white rounded-t-md">Calculator App</h1>
                    <div className="flex">
                        <input onChange={e=>setNumber1(Number(e.target.value))} type="text" className="border-1 border-blue-900 p-3 m-2 text-center w-1/2 rounded-md" placeholder="num1" />
                        <input onChange={e=>setNumber2(Number(e.target.value))} type="text" className="border-1 border-blue-900 p-3 m-2 text-center w-1/2 rounded-md" placeholder="num2" />
                    </div>

                    <Addition num1={num1} num2={num2}/>                            {/* Member1 will create*/}
                    <Subtraction num1={num1} num2={num2}/>                         {/* Member2 will create*/}
                    <Multiplication num1={num1} num2={num2}/>                      {/* Member3 will create*/}
                    <Division num1={num1} num2={num2}/>                            {/* Member4 will create*/}
                </div>
            </div>

            <h1>{num1}</h1>
            <h1>{num2}</h1>
        </>
    )
}

export default CalculatorApp;