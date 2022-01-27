import React, { useEffect, useState, createContext } from 'react';
import CategoryList from './CategoryList';
import { v4 as uuidv4 } from 'uuid';
import CategoryEdit from './CategoryEdit';

export const CategoryContext = createContext();

const LOCAL_STORAGE_KEY = 'films&music.key';

export default function Form() {

    const [selectedCategoryId, setSelectedCategoryId] = useState();
    const [categories, setCategories] = useState(sampleCategories);
    const selectedCategory = categories.find(category => category.id === selectedCategoryId);


    const categoryContextValue = {
        handleCategoryAdd,
        handleCategoryDelete,
        handleCategorySelect,
        handleCategoryChange
    }

    useEffect(() => {
        const categoryJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (categoryJSON) setCategories(JSON.parse(categoryJSON))
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(categories))
    }, [categories]);


    function handleCategoryAdd() {
        const newCategory = {
            id: uuidv4(),
            name: '',
            films: [
                { id: uuidv4(), name: '' },
                { id: uuidv4(), name: '' },
                { id: uuidv4(), name: '' }
            ]
        }
        setSelectedCategoryId(newCategory.id)
        setCategories([...categories, newCategory])
    }

    function handleCategoryChange(id, category) {
        const NewCategories = [...categories]
        const index = NewCategories.findIndex(c => c.id === id)
        NewCategories[index] = category;
        setCategories(NewCategories);
    }

    function handleCategoryDelete(id) {
        if (selectedCategoryId != null && selectedCategoryId === id) {
            setSelectedCategoryId(undefined)
        }
        setCategories(categories.filter(category => category.id !== id))
    }

    function handleCategorySelect(id) {
        setSelectedCategoryId(id)
    }

    return (
        <CategoryContext.Provider value={categoryContextValue}>
            <CategoryList categories={categories} />
            {selectedCategory && <CategoryEdit category={selectedCategory} />}
            <button>Submit</button>   {/*-------------------------------------------------NEW ADDITION*/}
        </CategoryContext.Provider>
    )

}

const sampleCategories = [
    {
        id: 1,
        name: 'Drama',
        films: [
            {
                id: 1,
                name: 'Pulp Fiction',
            },
            {
                id: 2,
                name: 'The Good The Bad and The Ugly',
            },
            {
                id: 3,
                name: 'Good Fellas',
            },
        ]
    },
    {
        id: 2,
        name: 'Comedy',
        films: [
            {
                id: 1,
                name: 'Zoolander',
            },
            {
                id: 2,
                name: 'The Blues Brothers',
            },
            {
                id: 3,
                name: 'The Big Lebowski',
            },
        ]
    },
]