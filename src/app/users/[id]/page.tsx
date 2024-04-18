


import { notFound } from 'next/navigation'
import React from 'react'

function SpecificUser({params:{id}}:{params:{id:number}}) {
  if(id > 10) notFound()
  return (
    <div>SpecificUser form user {id}</div>
  )
}

export default SpecificUser