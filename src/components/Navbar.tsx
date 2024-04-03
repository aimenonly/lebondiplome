'use client'

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";



const Navbar = () => {
 




  return (
    


    <div className="relative mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between z-1000">
          <div className="p-4 ">
              <Link href="/">
                  <Image src="/logo.png" alt="lebondiplome" width={140} height={80} />
              </Link>
          </div>
     
              <ul className="flex  items-center gap-6">
                 
                  <p>
                  <Link href="https://github.com/aimenonly/lebondiplome">
                      <Button className="hover:border-green-700" variant="outline"> Voir le code source </Button>
                      </Link>
                  </p>

              </ul>
          </div>
          
          
    
  );
}

export default Navbar;
