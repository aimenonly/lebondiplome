'use client'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import Dash from '@/components/PieChartBox';
import BarGraph from '@/components/BarGraph';
import PieChartBox from '@/components/PieChartBox';
import Navbar from '@/components/Navbar';


type Props = {}

const page = (props: Props) => {


 
 return (
    <><div>
      <div className="relative mr-auto p-8 max-w-7xl px-6 lg:px-8  z-1000">
        <div className="navbar">
          <Navbar />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
      <div className='containerr flex flex-row justify-center  mx-auto  mt-6  p-8 gap-1'>

     
        <div className='flex flex-col'>
        
          <label className="p-4 font-bold" >Region </label>
          <select className='p-2 border m-2    hover:border-green-700  rounded-sm bg-slate-50' name="region" id="region" onChange={(e) => setRegion(e.target.value)}>

            <option value="Toute la France">Toute la France</option>
            <option value="Auvergne-Rhône-Alpes">Auvergne-Rhône-Alpes</option>
            <option value="Bourgogne-Franche-Comté">Bourgogne-Franche-Comté</option>
            <option value="Bretagne">Bretagne</option>
            <option value="Centre-Val de Loire">Centre-Val de Loire</option>
            <option value="Corse">Corse</option>
            <option value="Grand Est">Grand Est</option>
            <option value="Hauts-de-France">Hauts-de-France</option>
            <option value="Ile-de-France">Ile-de-France</option>
            <option value="Normandie">Normandie</option>
            <option value="Nouvelle Aquitaine">Nouvelle-Aquitaine</option>
            <option value="Occitanie">Occitanie</option>
            <option value="Pays de la Loire">Pays de la Loire</option>
            <option value="Provence-Alpes-Côte d'Azur">Provence Alpes Côte d’Azur</option>

          </select>
        </div>


        <div className='flex flex-col'>
          <label className="p-4 font-bold">Type de contrat </label>
          <select className='p-2 border  m-2    hover:border-green-700 rounded-sm bg-slate-50' name="contrat" id="contrat" onChange={(e) => setContrat(e.target.value)}>
          <option value="Tous types de contrats">Tous types de contrats</option>
            <option value="Offre durable">Offre durable</option>
            <option value="Offre non durable">Offre non durable</option>
          </select></div>
        <div className='flex flex-col'>
          <label className="p-4 font-bold">Qualification </label>
          <select className='p-2 border  m-2    hover:border-green-700 rounded-sm bg-slate-50' name="diplome" id="diplome" onChange={(e) => setDiplome(e.target.value)}>
            <option value="Tous types de qualification">Tous types de qualification</option>
            <option value="Ouvrier spécialisé, manœuvre">Ouvrier spécialisé, manœuvre</option>
            <option value="Ouvrier qualifié">Ouvrier qualifié</option>
            <option value="Employé non qualifié">Employé non qualifié</option>
            <option value="Employé qualifié">Employé qualifié</option>
            <option value="Agent de maîtrise, technicien">Agent de maîtrise, technicien</option>
            <option value="Cadre">Cadre</option>
          </select>
          
          </div>

          <button type="submit" className="mt-auto mb-2 bg-green-700 hover:bg-green-900 text-white rounded-md  p-2">Trouver</button>
  
      </div>
    
</form>

{result?  (
 
      <div>
        <div className='containerr flex flex-row p-4 gap-16 justify-center'>


    <div className='border rounded-sm border-green-400 bg-green-50 hover:bg-green-100 w-80 transition-transform duration-300 ease-in-out transform hover:scale-105'>
      <h1 className='text-center text-green-700 p-2'>Nombre d'offres d'emplois</h1>
      <p className='text-center text-green-700 font-bold text-lg p-2'>{result.offres}</p>
    </div>

    <div className='border rounded-sm border-green-400 bg-green-50 hover:bg-green-100 w-80 transition-transform duration-300 ease-in-out transform hover:scale-105'>
      <h1 className='text-center text-green-700 p-2'>Secteur d'activité avec le plus d'offres</h1>
      <p className='text-center text-nowrap truncate ... text-bold text-green-700 font-bold text-lg p-2'>{result.secteur}</p>
    </div>

    <div className='border rounded-sm border-green-400 bg-green-50 hover:bg-green-100 w-80 transition-transform duration-300 ease-in-out transform hover:scale-105'>
      <h1 className='text-center text-green-700 p-2'>Diplôme le plus cohérent</h1>
      <p className='text-center text-nowrap truncate ... text-bold text-green-700 font-bold text-lg p-2'>{result.dipuniv}</p>
    </div>

        </div>


        <div className='flex flex-row w-full gap-6 p-4 justify-center'>
    
          <div className='flex flex-col p-2'>

          <h1 className='mx-auto text-center font-bold text-lg p-2 '> Plus de details sur la region {result.region} </h1>
            <div className='containerr flex flex-row p-2'>
              <div className='containerr justify-center  h-60  w-1/2  p-4'>
                <PieChartBox chartData={result.Tcontrat} />
              </div>
              <div className='containerr justify-center  h-60  w-1/2  p-4'>
                <BarGraph {...result.Tdiplome} />
              </div>
            </div>

            <div className='  h-60  w-full gap-6  p-4'>
              <BarGraph {...result.Tsecteur} />
            </div>

          </div>


        </div>
        
      </div>

    
      ) : (

      
        <div>
          <div className='containerr flex flex-row p-4 gap-16 justify-center'>
  
  
      <div className='border rounded-sm border-green-400 bg-green-50 hover:bg-green-100 w-80 transition-transform duration-300 ease-in-out transform hover:scale-105'>
        <h1 className='text-center text-green-700 p-2'>Nombre d'offres d'emplois</h1>
        <p className='text-center text-green-700 font-bold text-lg p-2'>{initial.offres}</p>
      </div>
  
      <div className='border rounded-sm border-green-400 bg-green-50 hover:bg-green-100 w-80 transition-transform duration-300 ease-in-out transform hover:scale-105'>
        <h1 className='text-center text-green-700 p-2'>Secteur d'activité avec le plus d'offres</h1>
        <p className='text-center text-nowrap truncate ... text-bold text-green-700 font-bold text-lg p-2'>{initial.secteur}</p>
      </div>
  
      <div className='border rounded-sm border-green-400 bg-green-50 hover:bg-green-100 w-80 transition-transform duration-300 ease-in-out transform hover:scale-105'>
        <h1 className='text-center text-green-700 p-2'>Diplôme le plus cohérent</h1>
        <p className='text-center text-nowrap truncate ... text-bold text-green-700 font-bold text-lg p-2'>{initial.dipuniv}</p>
      </div>
  
          </div>
  
  
          <div className='flex flex-row w-full gap-6 p-4 justify-center'>
     
            <div className='flex flex-col p-2'>
  
  
              <div className='containerr flex flex-row p-2'>
                <div className='containerr justify-center  h-60  w-1/2  p-4'>
                  <PieChartBox chartData={initial.Tcontrat} />
                </div>
                <div className='containerr justify-center  h-60  w-1/2  p-4'>
                  <BarGraph {...initial.Tdiplome} />
                </div>
              </div>
  
              <div className='  h-60  w-full gap-6 p-4'>
                <BarGraph {...initial.Tsecteur} />
              </div>
  
            </div>
  
  
          </div>
          
        </div>
  
     
      )}



    </div><div className="mt-auto mx-auto max-w-7xl px-6 lg:px-8">

        <footer className='flex flex-row'>

          <p className="   mx-2 text-wrap regular-14 w-full text-center pt-14 text-sm text-gray-30">
            <p className=" text-gray-500  text-sm">
              
            *Important : Ces graphiques représentent les données 
<a href='https://www.francetravail.fr/' className='text-blue-400'> pole-emploi.org </a>
 pour la période de 2010 à 2023. Le créateur n'est pas responsable des interprétations du tableau de bord.</p>
          </p>

        </footer>
      </div></>

  )
}

export default Page
