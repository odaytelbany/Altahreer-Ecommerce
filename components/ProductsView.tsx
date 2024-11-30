import { Category, Product } from '@/sanity.types'
import React from 'react'
import ProductGrid from './ProductGrid';
import { CategorySelectorComponent } from './ui/category-selector';

interface ProductsViewProps {
    products: Product[];
    categories: Category[];
}

const ProductsView = ({products, categories}: ProductsViewProps) => {
  return (
    <div className='flex flex-col'>
        {/* categories  */}
        <div className='w-full sm:w-[200px] z-50'>
            <CategorySelectorComponent categories={categories}/>
        </div>

        {/* products  */}
        <div>
            <div className='flex-1 '>
                <ProductGrid products={products} />
                <hr className='w-1/2 sm:w-3/4'/>
            </div>
        </div>
    </div>
  )
}

export default ProductsView