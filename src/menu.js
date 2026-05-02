import restaurantPhoto from './restaurant.png';

const header = document.createElement('h1');

header.textContent = 'The Menu';

const restaurantImg = document.createElement('img');

restaurantImg.src = restaurantPhoto;

const description = document.createElement('p');

description.innerText = `A luxury restaurant is more than just a place to eat—it is an immersive experience where every detail is carefully curated to evoke elegance, comfort, and exclusivity. From the moment guests arrive, they are welcomed into an atmosphere that feels both refined and inviting, often marked by grand entrances, soft ambient lighting, and a subtle blend of music that enhances the mood without overwhelming conversation.\n
Service in a high-end restaurant is attentive yet unobtrusive. Staff are trained to anticipate needs before they are expressed, delivering a seamless dining experience. Every gesture, from the way dishes are presented to the pacing of each course, is executed with precision. Guests are guided through the menu with expertise, often receiving personalized recommendations that align with their preferences.`;

const menuContainer = document.createElement('div');

const orderNowButton = document.createElement('Button');
orderNowButton.id = 'orderNowButton';

orderNowButton.textContent = 'Order Now!';

menuContainer.append(header, restaurantImg, description, orderNowButton);

export { menuContainer, orderNowButton };