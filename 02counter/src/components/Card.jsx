import React from 'react'

function Card({username = "CD", position = "no position", image = "https://images.pexels.com/photos/17815963/pexels-photo-17815963/free-photo-of-ciudad-romantico-pasos-entrada.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}) {
   // console.log(props)
  return (
    <div>
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src={image} alt="" width="384" height="512" />
        <div className="pt-6 space-y-4">
            <blockquote>
            <p className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quibusdam?
            </p>
            </blockquote>
            <figcaption className="font-medium">
            <div >
                {username}
            </div>
            <div>
                {position}
            </div>
            </figcaption>
        </div>
        </figure>
    </div>
  )
}

export default Card