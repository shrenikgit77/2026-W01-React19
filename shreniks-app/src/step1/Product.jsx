import GamingAccessories from "./GamingAccessories";


{/* {data} is props used to share parent component data to children component 
    curly brackets are to destructure "data" from props
    */}
let Product = ({data}) => {
    return (
        <>
            <p>{JSON.stringify(data)}</p>

            <div className="flex">
                {data.map(item=><div className="bg-blue-900 text-white hover:bg-green-900 rounded-xl m-3 p-3 shadow-2xl border-2 border-green-900 hover:border-blue-900 w-1/4">
                    <p>{item.title}</p>
                    <p>INR {item.cost}</p>
                </div>)}
            </div>

            <GamingAccessories data={data} />
        </>
    )
}

export default Product;