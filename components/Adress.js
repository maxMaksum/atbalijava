import React from 'react'



function Adress() {
  return (
    <div className="">
      <div className="card card__img container">
      <h4 className="card-title text-center fw-bold "> Adress </h4>
        <p className="card-title text-center fw-bold "> Office in Java </p>

        <p className="card-text">
          CV. At BaliJava Casa Busana Jl. Kyai Sholeh, Kramat Agung,
          Kaligung, Kec. Rogojampi, Kabupaten Banyuwangi, Jawa Timur 68462
        </p>
      </div>

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
