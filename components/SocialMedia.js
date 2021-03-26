import React from 'react'
import {FaEnvelope,FaWhatsapp, FaPhoneAlt, FaFacebookF} from 'react-icons/fa';
import Link from 'next/link'
function SocialMedia() {
    return (
        <div className="card text-center card__img container w-100">

            <h4 className="card-title text-center fw-bold pt-2 ">Contact Us</h4>

            <div className="text">
              <Link href="https://wa.me/6281246951065">
                <a className="text d-block">
                  <FaWhatsapp size={20} />
                  <span>  WhatsApp </span>
                 
                </a>
              </Link>

              <Link href="#">
                <a className="text d-block">
                  <FaFacebookF size={20} />
                  <span> Facebook </span>
                </a>
              </Link>

              <Link href="#">
                <a className="text d-block">
                  <FaEnvelope size={20} />
                  <span> atbalijava@gmail.com </span>
                </a>
              </Link>

              <Link href="#">
                <a className="text d-block">
                  <FaPhoneAlt size={20} />
                  <span> +62 812 469 510 65 </span>
                </a>
              </Link>
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

    )
}

export default SocialMedia
