import restaurantPhoto from './restaurant.png';
import varietyDessertPhoto from './variety-dessert.jpeg';
import veggieBuffPhoto from './veggie-buff.jpeg';
import cheesyBallsPhoto from './cheesy-balls.jpeg';
import breadAndButterPhoto from './bread-and-butter.jpeg';

const items = {
    'varietyDessert': {
        'name': 'Variety Dessert',
        'photoUrl': varietyDessertPhoto,
        'price': '$5',
    },

    'veggieBuff': {
        'name': 'Veggie Buff',
        'photoUrl': veggieBuffPhoto,
        'price': '$3',
    },

    'cheesyBalls': {
        'name': 'Cheesy Balls',
        'photoUrl': cheesyBallsPhoto,
        'price': '$2.5',   
    },

    'breadAndButter': {
        'name': 'Bread and Butter',
        'photoUrl': breadAndButterPhoto,
        'price': '$4', 
    },
};

const header = document.createElement('h1');

header.textContent = 'The Menu';

const itemsContainer = document.createElement('div');
itemsContainer.classList.add('itemsContainer');

Object.entries(items).forEach(([key, value]) => {
    const item = document.createElement('div');
    item.classList.add('item');

    const itemPhoto = document.createElement('img');
    itemPhoto.src = value['photoUrl'];

    const itemHeader = document.createElement('h2');
    itemHeader.textContent = value['name'];

    const itemPrice = document.createElement('h3');
    itemPrice.textContent = value['price'];

    const itemOrderButton = document.createElement('Button');
    itemOrderButton.textContent = 'Order';

    item.append(itemPhoto, itemHeader, itemPrice, itemOrderButton);

    itemsContainer.append(item);
});

const menuContainer = document.createElement('div');

menuContainer.append(header, itemsContainer);

export { menuContainer };