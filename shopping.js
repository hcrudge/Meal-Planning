// Chapter 1
const shoppingList = [ 
    {
        id: 1,
        item: "milk", 
        UOM: "1/2 gallon",
        price: 1.75
    },
    {
        id: 2,
        item: "eggs",
        UOM: "1 dozen",
        price: 1
    },
    {
        id:3,
        item: "half & half",
        UOM: "1 quart",
        price: 2.05
    },
    {
        id: 4,
        item: "ground beef",
        UOM: "1 pound",
        price: 9.00
    },
    {
        id:5,
        item: "onions",
        UOM: "3 pounds",
        price: 1.50
    }
]
// Chapter 1
// console.log(shoppingList)

// Chapter 2

const addToShoppingList = (listObject) =>{
    const lastIndex = shoppingList.length - 1
    const currentLastItem = shoppingList[lastIndex]
    const maxId = currentLastItem.id
    const idForNewItem = maxId + 1
    listObject.id = idForNewItem
    shoppingList.push(listObject)
}


const today = new Date();
const date = today.getMonth() + '/' + today.getDate() + '/' + today.getFullYear();

const cheese = 
{
    item: "cheese",
    UOM: "8 ounces",
    price: 3.50,
    dateCreated: date
}
const salami = 
{
    item: "salami",
    UOM: "5 ounces",
    price: 4.00,
    dateCreated: date
}
const salmon = 
{
    item: "salmon",
    UOM: "2.5 pounds",
    price: 16.00,
    dateCreated: date
}
const flour = 
{
    item: "flour",
    UOM: "1 pound",
    price: 1.75,
    dateCreated:date
}
const butter = 
{
    item: "butter",
    UOM: "1 pound",
    price: 2.50,
    dateCreated: date

}


addToShoppingList(cheese)
addToShoppingList(salami)
addToShoppingList(salmon)
addToShoppingList(flour)
addToShoppingList(butter)


// console.log(shoppingList)


// Chapter 3

const tooExpensive = 8

for (const list of shoppingList) {
    if (list.price >= tooExpensive) { 
    console.log(list)
    }
}
