import React from 'react'
import { mantrilogo, sapthamlogo,onetothreelogo,sparshlogo,srisrilogo, utsahlogo,akartha,uvfoods,distiman,chicbun,tuskertrunk,arxlogo} from '../brandlogo/brandindex'
import { profile } from '../images'
import { useNavigate } from 'react-router'
import MANTRIWORK from '../mantriwork';
import SAPTHAMWORK from '../sapthamwork';
import NOODLEWORK from '../noodles';
import SPARSH from '../sparsh';
import SRISRI from '../srisri';
import UTSAH from '../utsha';
import AKARTHA from '../akartha';
import UVFOODS from '../uvfoods';
import DISTIMAN from '../distiman';
import CHICBUN from '../chicbun';
import TUSKERTRUNK from '../tuskertrunk';
import ARX from '../arx';
function Brands() {
  const navigate = useNavigate()
  var mantri = MANTRIWORK
  var saptham = SAPTHAMWORK
  var noodle = NOODLEWORK
  var sparsh = SPARSH
  var srisri = SRISRI
  var utsah = UTSAH
  var akarthaa = AKARTHA
  var uvfood = UVFOODS
  var disti = DISTIMAN
  var chickbun = CHICBUN
  var tusker = TUSKERTRUNK
  var arx = ARX
  function handleMantri() {
    navigate("/BrandPage",{state:mantri});
  }
  function handleSaptham() {
    navigate("/BrandPage",{state:saptham});
  }
  function handleNoodle() {
    navigate("/BrandPage",{state:noodle});
  }
  function handleSparsh() {
    navigate("/BrandPage",{state:sparsh});
  }
  function handleSrisri() {
    navigate("/BrandPage",{state:srisri});
  }
  function handleUtsah() {
    navigate("/BrandPage",{state:utsah});
  }
  function handleAkartha() {
    navigate("/BrandPage",{state:akarthaa});
  }
  function handleUvfoods() {
    navigate("/BrandPage",{state:uvfood});
  }
  function handleDistiman() {
    navigate("/BrandPage",{state:disti});
  }
  function handleChicbun() {
    navigate("/BrandPage",{state:chickbun});
  }
  function handleTuskarn() {
    navigate("/BrandPage",{state:tusker});
  }
  function handleArx() {
    navigate("/BrandPage",{state:arx});
  }
  return (
    <>
    <div class="grid mt-10 grid-cols-3 gap-1 p-2 md:gap-2 md:p-4">
  <div class="relative">
    <img onClick={handleMantri} src={mantrilogo} class="w-full h-full object-cover" alt="Post" />
  </div>
  <div class="relative">
    <img onClick={handleSaptham} src={sapthamlogo} class="w-full h-full object-cover" alt="Post" />
  </div>
  <div class="relative">
    <img onClick={handleNoodle} src={onetothreelogo} class="w-full h-full object-cover" alt="Post" />
  </div>
  <div class="relative">
    <img onClick={handleSparsh} src={sparshlogo} class="w-full h-full object-cover" alt="Post" />
  </div>
  <div class="relative">
    <img onClick={handleSrisri} src={srisrilogo} class="w-full h-full object-cover" alt="Post" />
  </div>
  <div class="relative">
    <img onClick={handleUtsah} src={utsahlogo} class="w-full h-full object-cover" alt="Post" />
  </div>
  <div class="relative">
    <img onClick={handleAkartha} src={akartha} class="w-full h-full object-cover" alt="Post" />
  </div>
  <div class="relative">
    <img onClick={handleUvfoods} src={uvfoods} class="w-full h-full object-cover" alt="Post" />
  </div>
  <div class="relative">
    <img onClick={handleDistiman} src={distiman} class="w-full h-full object-cover" alt="Post" />
  </div>
  <div class="relative">
    <img onClick={handleChicbun} src={chicbun} class="w-full h-full object-cover" alt="Post" />
  </div>
  <div class="relative">
    <img onClick={handleTuskarn} src={tuskertrunk} class="w-full h-full object-cover" alt="Post" />
  </div>
  <div class="relative">
    <img onClick={handleArx} src={arxlogo} class="w-full h-full object-cover" alt="Post" />
  </div>
  
 
</div>

    </>
  )
}

export default Brands