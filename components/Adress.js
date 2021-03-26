import React from 'react'



function Adress() {
  return (
   
      <div className="card__img container card">
      <h4 className="text-center fw-bold pt-2"> Adress </h4>
        <p className="text-center fw-bold "> Office in Java </p>

        <p className="text-center">
          CV. At BaliJava Casa Busana Jl. Kyai Sholeh, Kramat Agung,
          Kaligung, Kec. Rogojampi, Kabupaten Banyuwangi, Jawa Timur 68462
        </p>
     

      <style jsx>{`
          .card__img{
            height:200px;
            width:100%;
            object-fit:contain
          }
          `}
      </style>

       

            
    </div>
  );
}

export default Adress
