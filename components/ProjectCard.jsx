import Image from 'next/image'
import React from 'react'

const ProjectCard = ({p}) => {
  return (
    <div key={p.id} className="w-[364px] h-72 bg-[#d9d9d9]  transition-all duration-300 
    hover:bg-[#cfcfcf] hover:scale-[1.01]">
    <div className='overflow-hidden'>
      <Image src={p.img} height={203} width={365} alt="images"  className="
            transition-all duration-300 
            group-hover:opacity-80 
            group-hover:scale-105
          "  />
    </div>
    <div className=" p-4">
    <div className="flex items-center gap-3.5">
    <p className="font-medium text-lg">
      {p.name}
    </p>
    <div className="bg-[#bdbdbd] h-8 w-28 rounded-full text-center py-1 text-base">
      {p.category}
    </div>
    </div>
    <p className="text-lg">{p.date}</p>
    </div>
  </div>
  )
}

export default ProjectCard