// const cats = [
//   {"name": "fsaewvav", "Favourite food": "agvdsa", "Image":"http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"},
//   {"name": "Marta", "food": "Cheese", "image":"https://www.pets4homes.co.uk/images/articles/3658/large/the-basics-of-caring-for-a-tortoise-57c06846bce6c.jpg"}
// ];

var app = function() {
  console.log("vsveres");
  // for(let cat of cats) {
  //   createCat(cat.name, cat.food, cat.image);
  // }

  // const createCat = document.createElement('ul');
  // createCat.classList.add('cat')
  //
  // const listItemName = document.createElement('li');
  // listItemName.innerText = "Cat";
  //
  // const listItemFavouriteFood = document.createElement('li');
  // listItemFavouriteFood.innerText = "Cheese";
  //
  // const listItemImage = document.createElement('li');
  // const image = document.createElement('img');
  // image.src = "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg";
  // listItemImage.appendChild(image);
  //
  // createCat.appendChild(listItemName);
  // createCat.appendChild(listItemFavouriteFood);
  // createCat.appendChild(listItemImage);
  //
  // const cats = document.querySelector('#cats');
  // cats.appendChild(createCat);

  createCat("bob", "cheese", "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg");

};

const newCat = function() {
  const cat = document.createElement('ul');
  cat.classList.add('ul');
  return cat;
}

const createName = function(name) {
  const listItemName = document.createElement('li');
  listItemName.innerText = "Name: " + name;
  return listItemName;
}

const createFavFood = function(food) {
  const listItemFavouriteFood = document.createElement('li');
  listItemFavouriteFood.innerText = "Favourite Food: " + food;
  return listItemFavouriteFood;
}

const createImage = function(imageLink) {
  const listItemImage = document.createElement('li');
  const image = document.createElement('img');
  image.src = imageLink;
  listItemImage.appendChild(image);
  return listItemImage;
}

const createCat = function(name, food, imageLink) {
  console.log("fvresvr");
  const newCatUl = newCat();

  const nameLi = createName(name);
  const foodLi = createFavFood(food);
  const image = createImage(imageLink);

  newCatUl.appendChild(nameLi);
  newCatUl.appendChild(foodLi);
  newCatUl.appendChild(image);

  const catsInfo = document.querySelector('#cats')
  catsInfo.appendChild(newCatUl);

}


document.addEventListener('DOMContentLoaded', app);
