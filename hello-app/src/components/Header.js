


let Header = () => {
  return (
    <div>
      <ul className="bg-blue-900 text-white mb-4 p-4 flex justify-between">
        <li>
          <span className=" mx-1">make</span>
          <span className="bg-white text-red-900 mx-1 rounded-md p-1 text-xl">my</span>
          <span className=" mx-1">trip</span>
        </li>
        <li><i class="fa-solid fa-bell-concierge fa-flip" style={{"color": "rgb(255, 255, 255)"}}></i> Hotels</li>
        <li><i class="fa-solid fa-plane" style={{"color": "rgb(255, 255, 255)"}}></i>Flights</li>
        <li><i class="fa-solid fa-train-subway fa-fade" style={{"color": "rgb(255, 255, 255)"}}></i> Train</li>
        <li><i class="fa-solid fa-bus fa-beat-fade" style={{"color": "rgb(255, 255, 255)"}}></i> Bus</li>
        <li><i class="fa-solid fa-arrow-right-to-bracket fa-spin fa-spin-reverse" style={{"color": "rgb(255, 255, 255)"}}></i> Login</li>
      </ul>
    </div>
  )
}

export {
  Header
}