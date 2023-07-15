"use client"
import {useParams} from 'next/navigation'
export default function Book (){
  const params = useParams() 
  return (
    <>  
  <p>alv emmet</p>
  {console.log(params)}
    <p> {params.id}</p>
    </>
  )
} 