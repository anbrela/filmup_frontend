'use client'
import Link from 'next/link'
import background from '@/assets/images/background.jpeg'

export const HomePage = ({ locale }: { locale: string }) => {
  return (
    <div
      className="h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="overlay w-full h-full bg-gray-800 opacity-70 absolute top-0 z-0" />
      <div className=" z-20 flex flex-col w-4/6 items-center">
        <h3 className="text-3xl uppercase text-secondary font-black">Plexus</h3>
        <h1 className="text-6xl font-black uppercase text-white">Talento</h1>
        <div className="flex w-full flex-wrap items-center justify-around my-4">
          <Link
            href={`/${locale}/candidates`}
            className="p-3 h-20 rounded bg-white uppercase px-4 flex items-center justify-center  hover:bg-primary hover:text-white cursor-pointer"
          >
            Candidatos
          </Link>
          <Link
            href={`/${locale}/requests/new`}
            className="p-3 h-20 rounded bg-white px-4 uppercase flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer"
          >
            Solicitudes
          </Link>
        </div>
      </div>
    </div>
  )
}
