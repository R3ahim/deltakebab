import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {
    const {id} = useParams()
    const [data,setData] = useState({})
   useEffect(()=>{
        fetch(`https://deltaserverer.onrender.com/totalSell/${id}`)
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])


  return (
    <div>
  

<div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
    <figure class="flex flex-col  p-8 bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
    <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-3xl font-semibold text-gray-900 dark:text-white">Meet</h3>
        </blockquote>
        <div className="container">
            <h3 className="text-2xl">Fudi: {data.fudi}</h3>
            <h4 className="text-xl">Comment: {data.fuidComment}</h4>
        </div>
    </figure>
    <figure class="flex flex-col  p-8 bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
    <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-3xl font-semibold text-gray-900 dark:text-white">Warzaya</h3>
        </blockquote>
        <div className="container">
            <h3 className="text-2xl">Warzaya: {data.warzaya}</h3>
            <h4 className="text-xl">Comment: {data.warzaya}</h4>
        </div>
    </figure>
    <figure class="flex flex-col  p-8 bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
    <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-3xl font-semibold text-gray-900 dark:text-white">COLA</h3>
        </blockquote>
        <div className="container">
            <h3 className="text-2xl">Cola: {data.cola}</h3>
            <h4 className="text-xl">Comment: {data.colaComment}</h4>
        </div>
    </figure>
    <figure class="flex flex-col  p-8 bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
    <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-3xl font-semibold text-gray-900 dark:text-white">Opakowania</h3>
        </blockquote>
        <div className="container">
            <h3 className="text-2xl">opakowania: {data.opakowania}</h3>
            <h4 className="text-xl">Comment: {data.opakowaniaComment}</h4>
        </div>
    </figure>
    <figure class="flex flex-col  p-8 bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
    <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-3xl font-semibold text-gray-900 dark:text-white">Others</h3>
        </blockquote>
        <div className="container">
            <h3 className="text-2xl">Others: {data.others}</h3>
            <h4 className="text-xl">Comment: {data.otehrsComment}</h4>
        </div>
    </figure>
    <figure class="flex flex-col  p-8 bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
    <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-3xl font-semibold text-gray-900 dark:text-white">Gaz</h3>
        </blockquote>
        <div className="container">
            <h3 className="text-2xl">gaz: {data.gaz}</h3>
            <h4 className="text-xl">Comment: {data.gazComment}</h4>
        </div>
    </figure>
</div>

    </div>
  )
}

export default Details