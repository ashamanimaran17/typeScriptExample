import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [categories, setCategories] = useState<string[]>([]);//typescript-comment defining type for useState setter
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);//typescript-comment defining type for useState setter
  const [category, setCategory] = useState("");
  useEffect(()=> {
   const temp = items.reduce((acc, curr) => {
      if(!acc.includes(curr.category)){
        acc.push(curr.category);
      }
      return acc;
    }, ["All"]);
    setCategories(temp);
    setCategory("All");
  },[])
  
  useEffect(()=> {
    const temp = items.reduce((acc:MenuItem[], curr) => {//typescript-comment defining type for accumulator
      if((category === "All") || (category === curr.category)){
        acc.push(curr)
      }
    return acc;
    }, []);
    setMenuItems(temp);
  }, [category]);

  const categorySelected = (categoryName: string) => {//typescript-comment defining type for function parameter
    setCategory(categoryName)
  };

  return (
  <main>
 <header className="title">
      <h3>Our Menu</h3>
      <div className="underline"></div>
    </header>
    <Categories categories={categories} categorySelected={categorySelected}/>
    <Menu menuItems={menuItems}/>
    </main> 
  )
}

export default App;
