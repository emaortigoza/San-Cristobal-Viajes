import React, { useEffect } from 'react'
import { Rings } from 'react-loader-spinner'
import { BarLoader } from 'react-spinners'

const Loading = () => {

  return (
    <div className="d-flex justify-content-center m-t: 5">
        <BarLoader
        color="#3637d6"
        height={8}
        width={200}
    />
    </div>
  )
}

export default Loading
