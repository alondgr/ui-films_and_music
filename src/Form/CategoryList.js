import { React, useContext } from 'react';
import { CategoryContext } from './Form';
import Category from './Category';



export default function CategoryList({ categories }) {

    const { handleCategoryAdd } = useContext(CategoryContext)


    return (
        <div>
            {categories.map(category => {
                return <Category key={category.id} {...category} />
            })}
            <div>
                <button onClick={handleCategoryAdd}>Add Category</button>
            </div>
        </div>
    )
}

