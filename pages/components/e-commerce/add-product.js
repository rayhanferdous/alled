import Seo from '@/shared/layout-components/seo/seo';
import dynamic from 'next/dynamic';
import React from 'react';
import PageHeader from '../../../shared/layout-components/pageheader/pageHeader';
const Addproducts = dynamic(() => import("@/shared/data/pages/addproducts"), {ssr: false,});

const AddProduct = () => {

  return (

  <div >
		<Seo title="Add Product"/>
    <PageHeader titles="Add Product" active="Add Product" items={['E-Commerce']} />
    {/* <!-- ROW-1 OPEN --> */}
    <Addproducts/>
    {/* <!-- /ROW-1 CLOSED --> */}
  </div>
);
};
AddProduct.layout = "Contentlayout";
export default AddProduct;
