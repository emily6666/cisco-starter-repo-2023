import React from 'react';

const Cards= () => {
    return (

                <div className="grid grid-cols-2 gap-6 h-1/2  ">
                   
                        <h3 className="col-span-2 text-2xl font-bold mb-2">OVERVIEW</h3>
                      
                 
                    <div className="p-6 bg-white shadow rounded">
                        <h3 className="text-xl pl-1 font-bold mb-2">IP</h3>
                        <p className='text-5xl'>192.168.0.1</p>
                    </div>
                    <div className="p-6 bg-white shadow rounded">
                        <h3 className="text-xl pl-1 font-bold mb-2">LATENCY</h3>
                        <p className='text-5xl'>200 ms.</p>
                        <img src='latency-pie.png'  alt='linechart' className='h-2/3'/>
                    </div>
                </div>
   
    )
}

export default Cards
