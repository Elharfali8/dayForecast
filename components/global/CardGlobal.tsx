import Image from "next/image"
import Link from "next/link";
import { FaTemperatureEmpty } from "react-icons/fa6";

function CardGlobal({id, name}: {id: number, name: string}) {
  return (
    <Link href={`/`} className="card p-3 w-full  rounded-[8px] shadow-md inline-block transition-all ease-in-out duration-150 hover:scale-105">
      <div className="flex items-center justify-between">
        <div className="">
          <h3 className="text-xl lg:text-2xl poppins-semibold tracking-wide capitalize">{name}</h3>
          <p className="lg:text-lg">Lorem, ipsum dolor.</p>
        </div>
        <div>
          <Image src={`http://openweathermap.org/img/wn/10d@2x.png`} alt="weather" width={100} height={100} />
          <div className="grid place-items-center">
          <span className="flex items-center gap-x-1 text-lg lg:text-xl tracking-wide">28&deg; <FaTemperatureEmpty /></span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CardGlobal