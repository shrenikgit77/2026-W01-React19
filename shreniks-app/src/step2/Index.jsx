import { useState } from "react";
import Telephone from "./Telephone";
import Stationary from "./Stationary";
import Electricity from "./Electrictiry";
import Bill from "./Bill";


let BudgeCalculatorApp = () => {
    let [electricity, setElectricityBill] = useState(0);
    let [phoneBill, setPhoneBill] = useState(0);
    let [stationaryBill, setStationaryBill] = useState(0);
    let [total, setTotal] = useState(0);

    return (
        <>
            
            <Telephone />
            <Stationary />
            <Electricity />

            <div>
                <button className="border-1 bg-blue-900 hover:bg-blue-800 shadow-2xl text-center mx-2 my-2 p-3 text-white roudned-2xl">Calculate Total</button>
                <Bill />
            </div>
        </>
    )
}

export default BudgeCalculatorApp;