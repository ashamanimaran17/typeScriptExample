import React from 'react';
type MenuParams = {
  menuItems: MenuItem[];
};
const Menu = ({menuItems}: MenuParams) => { //typescript-comment create type for MenuItem[] and use it 
  return <section className="section">
    <div className= "section-center">
      {
        menuItems.map((item, index) => {
          return(
            <article key={index} className="menu-item">
              <img className= "photo" src={item.img} alt={item.title}/>
              <div className="item-info" tabIndex={0}>
                <header>
                  <h4>{item.title}</h4>
                  <p className="price">{item.price}</p>
                </header>
                <p className="item-text">
                  {item.desc}
                </p>

              </div>
            </article>
          )
        })
      }
      <div id="menuitems"> focus shift here</div>
    </div>
  </section>;
};

export default Menu;
