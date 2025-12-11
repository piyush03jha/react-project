import "./app.css"
import data from "./component/data.json"
import { FaStar } from "react-icons/fa";

const App = () => {
  return (
    <div className=' w-full flex flex-col gap-5 p-6'>
      {data.map(function(phoneDetails, index){
        return(
          <div key={index} className="flex gap-4 bg-[#0a0908] p-4 rounded-2xl">
            <div className="w-1/4 flex items-center justify-center" >
              <img className="rounded-xl" src={phoneDetails.image} alt={phoneDetails.title} />
            </div>
            <div className="flex-1">
              <h1>{phoneDetails.title}</h1>
              <span className="flex mt-1"><FaStar className="text-yellow-400 m-1" /> {phoneDetails.rating} | {phoneDetails.reviews}</span>
              <ul className="my-4">
                 {phoneDetails.details.map(function(item, index){
                  return(
                    <li className="list-disc ml-6">{item}</li>
                  )
              })}
              </ul>
              <p className="text-green-500">{phoneDetails.offers.exchangeOffer}</p>
              <p className="text-green-300 mt-2">{phoneDetails.offers.bankOffer}</p>
            </div>
            <div className="flex flex-col justify-center items-end">
              <h1 className="text-2xl font-bold">{phoneDetails.price}</h1>
              <h2 className="line-through">{phoneDetails.originalPrice}</h2>
              <h2 className="text-xl text-green-600">{phoneDetails.discount}</h2>
            </div>
          </div>
        )

      })}
    </div>
  )
}

export default App;