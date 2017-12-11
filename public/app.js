const cats = [
  {"name": "fsaewvav", "food": "agvdsa", "image":"https://cdn.shopify.com/s/files/1/0344/6469/products/New-Cute-Pet-Cat-Costume-Cartoon-Funny-Pet-Cat-Clothes-Hot-Puppy-Clothing-Doctor-Uniform-Hat_copy_1024x1024.jpg?v=1504800100"},
  {"name": "Marta", "food": "Cheese", "image":"https://www.pets4homes.co.uk/images/articles/3658/large/the-basics-of-caring-for-a-tortoise-57c06846bce6c.jpg"},
  {"name": "Bob", "food": "Cheese", "image":"http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"},
  {"name": "Boba", "food": "Sock fluff", "image":"http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
  {"name": "Barnaby", "food": "Tuna", "image":"https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"},
  {"name": "Max", "food": "Whiskas Temptations", "image":"http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"}
];


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

  for(let cat of cats) {
    createCat(cat.name, cat.food, cat.image);
  }

  // createCat("bob", "cheese", "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg");

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
