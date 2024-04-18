

import React from 'react'

function PictureDetails({params}:{params:{photoId:number}}) {
  return (
    <div>PictureDetails {params.photoId}</div>
  )
}

export default PictureDetails