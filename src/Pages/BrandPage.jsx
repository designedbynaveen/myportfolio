import React from 'react'
import Hero from "../components/hero"
import { mantrilogo, sapthamlogo,onetothreelogo } from '../brandlogo/brandindex'
import { useLocation } from "react-router";
function BrandPage() {

  const location = useLocation();
  const data = location.state;
 
  Object.keys(data).map((k,i)=>(console.log(data[k])
  ))
  
  
  return (

    <>
    <div>
    <Hero/>
    <div>
      <div class="grid mt-10 grid-cols-3 gap-1 p-2 md:gap-2 md:p-4">
        {Object.keys(data).map((k,i)=>(
           <div class="relative">
           <img src={data[k]} class="w-full h-full object-cover" alt="Post" />
         </div>
        ))}
       
        </div>
    </div>

      </div>
    </>
  )
}

export default BrandPage