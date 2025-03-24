import React from 'react'
import { mantrilogo, sapthamlogo, onetothreelogo, sparshlogo, srisrilogo, utsahlogo, akartha, uvfoods, distiman, chicbun, tuskertrunk, arxlogo } from '../brandlogo/brandindex'
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
    navigate("/BrandPage", { state: mantri });
  }
  function handleSaptham() {
    navigate("/BrandPage", { state: saptham });
  }
  function handleNoodle() {
    navigate("/BrandPage", { state: noodle });
  }
  function handleSparsh() {
    navigate("/BrandPage", { state: sparsh });
  }
  function handleSrisri() {
    navigate("/BrandPage", { state: srisri });
  }
  function handleUtsah() {
    navigate("/BrandPage", { state: utsah });
  }
  function handleAkartha() {
    navigate("/BrandPage", { state: akarthaa });
  }
  function handleUvfoods() {
    navigate("/BrandPage", { state: uvfood });
  }
  function handleDistiman() {
    navigate("/BrandPage", { state: disti });
  }
  function handleChicbun() {
    navigate("/BrandPage", { state: chickbun });
  }
  function handleTuskarn() {
    navigate("/BrandPage", { state: tusker });
  }
  function handleArx() {
    navigate("/BrandPage", { state: arx });
  }

  return (
    <>
      <style>
        {`
          .clickable-brand:hover {
            cursor: pointer;
          }
        `}
      </style>
      <div className="grid mt-10 grid-cols-3 gap-1 p-2 md:gap-2 md:p-4">
        {/* Mantri */}
        <div className="relative clickable-brand">
          <img 
            onClick={handleMantri} 
            src={mantrilogo}
            className="w-full h-full object-cover" 
            alt="Post"
            onMouseOver={(e) => e.currentTarget.src = mantri['one']}
            onMouseOut={(e) => e.currentTarget.src = mantrilogo}
          />
        </div>

        {/* Saptham */}
        <div className="relative clickable-brand">
          <img 
            onClick={handleSaptham} 
            src={sapthamlogo}
            className="w-full h-full object-cover" 
            alt="Post"
            onMouseOver={(e) => e.currentTarget.src = saptham['one']}
            onMouseOut={(e) => e.currentTarget.src = sapthamlogo}
          />
        </div>

        {/* Noodle */}
        <div className="relative clickable-brand">
          <img 
            onClick={handleNoodle} 
            src={onetothreelogo}
            className="w-full h-full object-cover" 
            alt="Post"
            onMouseOver={(e) => e.currentTarget.src = noodle['one']}
            onMouseOut={(e) => e.currentTarget.src = onetothreelogo}
          />
        </div>

        {/* Sparsh */}
        <div className="relative clickable-brand">
          <img 
            onClick={handleSparsh} 
            src={sparshlogo}
            className="w-full h-full object-cover" 
            alt="Post"
            onMouseOver={(e) => e.currentTarget.src = sparsh['one']}
            onMouseOut={(e) => e.currentTarget.src = sparshlogo}
          />
        </div>

        {/* Srisri */}
        <div className="relative clickable-brand">
          <img 
            onClick={handleSrisri} 
            src={srisrilogo}
            className="w-full h-full object-cover" 
            alt="Post"
            onMouseOver={(e) => e.currentTarget.src = srisri['one']}
            onMouseOut={(e) => e.currentTarget.src = srisrilogo}
          />
        </div>

        {/* Utsah */}
        <div className="relative clickable-brand">
          <img 
            onClick={handleUtsah} 
            src={utsahlogo}
            className="w-full h-full object-cover" 
            alt="Post"
            onMouseOver={(e) => e.currentTarget.src = utsah['one']}
            onMouseOut={(e) => e.currentTarget.src = utsahlogo}
          />
        </div>

        {/* Akartha */}
        <div className="relative clickable-brand">
          <img 
            onClick={handleAkartha} 
            src={akartha}
            className="w-full h-full object-cover" 
            alt="Post"
            onMouseOver={(e) => e.currentTarget.src = akarthaa['one']}
            onMouseOut={(e) => e.currentTarget.src = akartha}
          />
        </div>

        {/* Uvfoods */}
        <div className="relative clickable-brand">
          <img 
            onClick={handleUvfoods} 
            src={uvfoods}
            className="w-full h-full object-cover" 
            alt="Post"
            onMouseOver={(e) => e.currentTarget.src = uvfood['one']}
            onMouseOut={(e) => e.currentTarget.src = uvfoods}
          />
        </div>

        {/* Distiman */}
        <div className="relative clickable-brand">
          <img 
            onClick={handleDistiman} 
            src={distiman}
            className="w-full h-full object-cover" 
            alt="Post"
            onMouseOver={(e) => e.currentTarget.src = disti['one']}
            onMouseOut={(e) => e.currentTarget.src = distiman}
          />
        </div>

        {/* Chicbun */}
        <div className="relative clickable-brand">
          <img 
            onClick={handleChicbun} 
            src={chicbun}
            className="w-full h-full object-cover" 
            alt="Post"
            onMouseOver={(e) => e.currentTarget.src = chickbun['one']}
            onMouseOut={(e) => e.currentTarget.src = chicbun}
          />
        </div>

        {/* Tuskertrunk */}
        <div className="relative clickable-brand">
          <img 
            onClick={handleTuskarn} 
            src={tuskertrunk}
            className="w-full h-full object-cover" 
            alt="Post"
            onMouseOver={(e) => e.currentTarget.src = tusker['one']}
            onMouseOut={(e) => e.currentTarget.src = tuskertrunk}
          />
        </div>

        {/* Arx */}
        <div className="relative clickable-brand">
          <img 
            onClick={handleArx} 
            src={arxlogo}
            className="w-full h-full object-cover" 
            alt="Post"
            onMouseOver={(e) => e.currentTarget.src = arx['one']}
            onMouseOut={(e) => e.currentTarget.src = arxlogo}
          />
        </div>
      </div>
    </>
  )
}

export default Brands