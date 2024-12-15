import Category from '@/components/ui/website/Category/Category';
import React, { Suspense } from 'react';

const CategoryPage = () => {
    return (
        <div>
     <Suspense fallback={<div>Loading...</div>}>
      <Category />
    </Suspense>
        </div>
    );
};

export default CategoryPage;