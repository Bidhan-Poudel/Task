import React from 'react'
import Layout from '../layouts/Layout'
import { Hero, ProductCard, SectionTitle } from '../components/shared'
import { useDataContext } from '../context/DataContext'

export const Product = () => {
  const { data } = useDataContext();
  const { productShowcase } = data;

  return (
    <Layout>
      <Hero title={"Products"} />
      <div className=' container mx-auto px-6 my-16 md:px-12'>
        <SectionTitle title='Products' />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productShowcase.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  )
}
