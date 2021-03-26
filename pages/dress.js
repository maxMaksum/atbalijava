import React, {useState} from 'react';
import {client} from '../utils/shopify'
import Products_Slider from '../components/Products_Slider'
import Link from 'next/link'
import SliderPage from '../components/SliderPage'
import Slider from '../components/SliderPage'
import {FaSistrix } from 'react-icons/fa';
import Fuse from 'fuse.js';


export const getStaticProps = async()=>{
    const newProducts =  await client.product.fetchAll()
    const newPants= await client.collection.fetchWithProducts("Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2MTQ5NjE0NDA4MQ==")
   
    return {
      props: {
        pants: JSON.parse(JSON.stringify(newPants)),
        products: JSON.parse(JSON.stringify(newProducts)),
       },
    }
  }

  
function dress ({pants, products}) {
const [query, setQuery] = useState('')
const Psearch = products

const fuse = new Fuse(Psearch, { 
  keys: ["title"]    
});  


const results = fuse.search(query);

const ProductResults = query ? results.map(result=>result.item): pants.products


function handleOnSearch({ currentTarget }){
  const {value} = currentTarget
  setQuery(value)
}
    return (
     
      
        <div className="mt-60">
           <Slider/>
           <div className="header__search d-flex justify-content-center  container mx-auto py-20">
          <input
            className="header__searchInput w-75 border border-light"
            type="text"
            value={query}
            onChange={handleOnSearch}
          />
          <div className="header__search__logo px-2">
            <FaSistrix />
          </div>
        </div>

           <div className="overflow-hidden g-1 w-100">

<div className="row ">

{ProductResults.map(product=>(
<Link href={`/product/${product.id}`}>
<div key={product.id} className="col col-sm-6  col-md-6 col-lg-4">

  
     <div className="p-2 m-2 card__container card">
      <Products_Slider productImage={product.images} />

    <div className="product__info py-1 text-center card-body ">
      
    <p className="product__title card-title"> {product.title}</p>

      <div className="product__price card-text">
            <small>IDR</small>
            <strong> {product.variants[0].price}</strong>
      </div>
  </div>
</div>



</div>
</Link>
))}

</div>
</div>

<style jsx>{`






.header__search{
display:flex;
align-items:center;

border:none;
height:30px;
margin-top:10px;


}

.header__search__logo{
height:28px;
color:white;
background:green;
border-radius:20 px;

}

.product__info{
height:150px;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
}


}

.product__container{
    display:flex;
    flex-direction:column;
  }
`

}


</style>

</div>
 
    )
}

export default dress
