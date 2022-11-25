type MenuItem = {
    id: number,
    title: string,
    category: string,
    price: number,
    img: string,
    desc:  string
}
//typescript-example 
//MenuItem is used in multiple places so added the type in global.d.ts to add it to global namespace