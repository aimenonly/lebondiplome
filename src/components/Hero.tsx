'use client'





const Hero = () => {

 


  
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
<section className=" gap-20 py-8 md:gap-28 xl:flex-row ">
  <div className="pt-16 mt- text-center ">
  <h1 className=" max-w-[100vm] mx-auto text-center text-6xl font-black tracking-tight sm:font-black md:text-[4.5rem] md:leading-[4.5rem] lg:text-8xl xl:max-w-[43.5rem] xl:text-8xl">
  Investissez dans le bon diplome. 
</h1>
<h2 className="my-4 drop-shadow-lg regular-40 text-gray-500 lg:regular-40">
Trouvez les emplois les plus demandés en France par région et par domaine.
</h2>
<div className="py-6 pt-8 flex flex-row justify-center mx-auto">
<div className="flex flex-col items-center gap-3 sm:flex-row">
        <a  href="/dashboard"> 
          <button className=" inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-green-700  hover:animate-out glow-button hover:ease-in-out text-white px-4 py-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 w-4 h-4"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <p className="whitespace-nowrap overflow-hidden truncate">Commencer maintenant</p>
          </button>
        </a>
      
       
      </div>

</div>
  </div>

</section>

    

</div>
  );
};

export default Hero;
