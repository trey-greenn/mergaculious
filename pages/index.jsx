import Image from 'next/image'
import React from 'react';
import { LineChart } from '../components';

const index = () => {
  
  return (
    <>
    <div>
      <div className="grid grid-cols-11">
        <div className="col-start-2 col-end-10">

        <LineChart />
        </div>

    
      </div>
      
    </div>
    
    </>
  )
}

export default index

