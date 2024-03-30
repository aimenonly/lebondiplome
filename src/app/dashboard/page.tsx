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


  const diplome = {
    title: "Type de diplome",
    color: "#388E3C",
    dataKey: "total",
    chartData: [
        {
            name: "BAC",
            total: 4000,
        },
        
        {
          name: "DUT",
          total: 2000,
      },
        
        
        {
            name: "Licence",
            total: 3000,
        },
        {
            name: "Master",
            total: 2000,
        }
        ,
        {
            name: "Doctorat",
            total: 2000,
        }
        
       
      
      ]}

    const secteur = {
      title: "Secteurs d'activités",
      color: "#388E3C",
      dataKey: "profit",
      chartData: [
          {
              name: "Sun",
              profit: 4000,
          },
          {
              name: "Mon",
              profit: 3000,
          },
          {
              name: "Tue",
              profit: 2000,
          },
          {
              name: "Wed",
              profit: 2780,
          },
          {
              name: "Thu",
              profit: 1890,
          },
          {
              name: "Fri",
              profit: 2390,
          },
          {
              name: "Sat",
              profit: 3490,
          },
          {
            name: "Wed",
            profit: 2780,
        },
        {
            name: "Thu",
            profit: 1890,
        },
        {
            name: "Fri",
            profit: 2390,
        },
        {
            name: "Sat",
            profit: 3490,
        },
        {
          name: "Wed",
          profit: 2780,
      },
      {
          name: "Thu",
          profit: 1890,
      },
      {
          name: "Fri",
          profit: 2390,
      },
      {
          name: "Sat",
          profit: 3490,
      },
      {
        name: "Wed",
        profit: 2780,
    },
    {
        name: "Thu",
        profit: 1890,
    },
    {
        name: "Fri",
        profit: 2390,
    },
    {
        name: "Sat",
        profit: 3490,
    },
    {
      name: "Thu",
      profit: 1890,
  },
  {
      name: "Fri",
      profit: 2390,
  },
  {
      name: "Sat",
      profit: 3490,
  },
  {
    name: "Wed",
    profit: 2780,
},
{
    name: "Thu",
    profit: 1890,
},
{
    name: "Fri",
    profit: 2390,
},
{
    name: "Sat",
    profit: 3490,
},
{
  name: "Wed",
  profit: 2780,
},
{
  name: "Thu",
  profit: 1890,
},
{
  name: "Fri",
  profit: 2390,
},
{
  name: "Sat",
  profit: 3490,
},
{
  name: "Fri",
  profit: 2390,
},
{
  name: "Sat",
  profit: 3490,
},

      ],
  };


      const dummyyCounts = [
        { name: "Stage", value: 400, color: "#0088FE" },
        { name: "Alternance", value: 300, color: "#e2be04" },
        { name: "CDD", value: 300, color: "#a5da0f" },
        { name: "CDI", value: 200, color: "#388E3C" },
        ];
  return (
    <><div>
      <div className="relative mr-auto p-8 max-w-7xl px-6 lg:px-8  z-1000">
        <div className="navbar">
          <Navbar />
        </div>
      </div>

      <div className='containerr flex flex-row justify-center  mx-auto  mt-6  gap-1'>

        <div className='flex flex-col'>
          <label className="p-4 font-bold">Region </label>
          <select className='p-2 border m-2    hover:border-green-700  rounded-sm bg-slate-50' name="region" id="region">

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
            <option value="Nouvelle-Aquitaine">Nouvelle-Aquitaine</option>
            <option value="Occitanie">Occitanie</option>
            <option value="Pays de la Loire">Pays de la Loire</option>
            <option value="Provence Alpes Côte d’Azur">Provence Alpes Côte d’Azur</option>

          </select>
        </div>


        <div className='flex flex-col'>
          <label className="p-4 font-bold">Type de contrat </label>
          <select className='p-2 border  m-2    hover:border-green-700 rounded-sm bg-slate-50' name="contrat" id="contrat">
          <option value="Tous type de contrat">Tous types de contrats</option>
            <option value="Stage">Stage</option>
            <option value="Alternance">Alternance</option>
            <option value="CDD">CDD</option>
            <option value="CDI">CDI</option>
          </select></div>
        <div className='flex flex-col'>
          <label className="p-4 font-bold">Type de diplome </label>
          <select className='p-2 border  m-2    hover:border-green-700 rounded-sm bg-slate-50' name="contrat" id="contrat">
          <option value="Tous type de diplome">Tous types de diplomes</option>
         
            <option value="Bac">Bac</option>
            <option value="DUT">DUT</option>
            <option value="Licence">Licence</option>
            <option value="Master">Master</option>
            <option value="Doctorat">Doctorat</option>
          </select>
        </div>

        {/*
    <div className='flex flex-col'>
    <label  className="p-4" >Secteurs d’activité </label>
    <select className='p-2 border  m-2    hover:border-green-700 rounded-sm bg-slate-50' name="Secteurs d’activité" id="Secteurs d’activité">
    <option value="Activités juridiques et comptables">Activités juridiques et comptables</option>
    <option value="Agriculture et élevage">Agriculture et élevage</option>
    <option value="Architecture, études et normes">Architecture, études et normes</option>
    <option value="Artisanat d'art, audiovisuel et spectacle">Artisanat d'art, audiovisuel et spectacle</option>
    <option value="Automobile">Automobile</option>
    <option value="Bâtiment et travaux publics (BTP)">Bâtiment et travaux publics (BTP)</option>
    <option value="Commerce et distribution">Commerce et distribution</option>
    <option value="Communication et marketing">Communication et marketing</option>
    <option value="Culture et patrimoine">Culture et patrimoine</option>
    <option value="Édition">Édition</option>
    <option value="Énergie">Énergie</option>
    <option value="Enseignement et formation">Enseignement et formation</option>
    <option value="Environnement">Environnement</option>
    <option value="Finance, banque et assurance">Finance, banque et assurance</option>
    <option value="Gestion administrative et ressources humaines">Gestion administrative et ressources humaines</option>
    <option value="Hôtellerie et restauration">Hôtellerie et restauration</option>
    <option value="Immobilier">Immobilier</option>
    <option value="Industrie - Alimentaire">Industrie - Alimentaire</option>
    <option value="Industrie - Bois">Industrie - Bois</option>
    <option value="Industrie - Chimie">Industrie - Chimie</option>
    <option value="Industrie - Électronique">Industrie - Électronique</option>
    <option value="Industrie - Métallurgie">Industrie - Métallurgie</option>
    <option value="Industrie - Papier et imprimerie">Industrie - Papier et imprimerie</option>
    <option value="Industrie - Textile et mode">Industrie - Textile et mode</option>
    <option value="Industries">Industries</option>
    <option value="Informatique et télécommunication">Informatique et télécommunication</option>
    <option value="Logistique et transport">Logistique et transport</option>
    <option value="Maintenance, entretien et nettoyage">Maintenance, entretien et nettoyage</option>
    <option value="Recherche">Recherche</option>
    <option value="Santé">Santé</option>
    <option value="Service à la personne">Service à la personne</option>
    <option value="Service public, défense et sécurité">Service public, défense et sécurité</option>
    <option value="Social">Social</option>
    <option value="Sport, animation et loisir">Sport, animation et loisir</option>
    <option value="Tourisme">Tourisme</option>
    
    </select>
    
    </div>*/}

      </div>


      <div>
        <div className='containerr flex flex-row p-4 gap-16 justify-center'>

        <div className='border rounded-sm border-green-400 bg-green-50 hover:bg-green-100 w-80 transition-transform duration-300 ease-in-out transform hover:scale-105     '>
            <h1 className='text-center text-green-700 p-2'> Nombre d'offres d'emplois </h1>
            <p className='text-center text-green-700 font-bold text-lg p-2'> 4500 </p>
          </div>




          <div className='border rounded-sm border-green-400 bg-green-50 hover:bg-green-100 w-80 transition-transform duration-300 ease-in-out transform hover:scale-105     '>
            <h1 className='text-center text-green-700 p-2'>Secteur d'activité avec le plus d'offres</h1>
            <p className='text-center text-nowrap truncate ... text-bold  text-green-700 font-bold text-lg p-2'> Activités juridiques et comptables </p>
          </div>
          <div className='border rounded-sm border-green-400 bg-green-50 hover:bg-green-100 w-80 transition-transform duration-300 ease-in-out transform hover:scale-105     '>
            <h1 className='text-center text-green-700 p-2'>Diplome universitaire le plus cohérent</h1>
            <p className='text-center text-nowrap truncate ... text-bold  text-green-700 font-bold text-lg p-2'> Master Informatique </p>
          </div>


        </div>


        <div className='flex flex-row w-full gap-6 p-4 justify-center'>

          <div className='flex flex-col p-2'>


            <div className='containerr flex flex-row p-2'>
              <div className='containerr justify-center  h-60  w-1/2  p-4'>
                <PieChartBox chartData={dummyyCounts} />
              </div>
              <div className='containerr justify-center  h-60  w-1/2  p-4'>
                <BarGraph {...diplome} />
              </div>
            </div>

            <div className='  h-60  w-full gap-6 p-4'>
              <BarGraph {...secteur} />
            </div>

          </div>


        </div>
      </div>





    </div><div className="mt-auto mx-auto max-w-7xl px-6 lg:px-8">

        <footer className='flex flex-row'>

          <p className="   mx-2 text-wrap regular-14 w-full text-center py-2 text-sm text-gray-30">*Important :
            <a className=" text-gray-500  text-sm">Les graphiques ici représentent les données de emploi.com pour 2018-2023. Le créateur du tableau de bord n'est pas responsable des décisions prises après consultation.</a>
          </p>

        </footer>
      </div></>

  )
}

export default page