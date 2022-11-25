import React from 'react';
import {DropdownMenu} from "./DropdownMenu";
type CategoriesParams = { //typescript-comment defining type for destructured props
  categories: string[];
  categorySelected: Function;
};
//using type instead of interfaces because this need not be altered to include new fields 
//the other alternative is to type the props without creating an interface or type like so
//const Categories = ({categories, categorySelected}:{categories:string[], categorySelected: Function}) => {

const Categories = ({categories, categorySelected}: CategoriesParams) => {
  console.log(categories);
  return (
    <>
    <header>
      <div className='menuBar'>
        <DropdownMenu items={categories} categorySelected={categorySelected}/>
      </div>
    </header>
    </>
  );
};

export default Categories;