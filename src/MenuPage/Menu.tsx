import BaseImage from '../images/choose-bowl-base.jpeg';
import MenuImg1 from '../images/menu-bowl-1.jpeg';
import MenuImg2 from '../images/menu-bowl-2.jpeg';
import MenuImg3 from '../images/menu-bowl-3.jpeg';
import MenuImg4 from '../images/menu-bowl-4.jpeg';


const Menu = () => {
  return (
    <div>
      <p className="font-oswald font-semibold text-primary text-5xl text-center py-6">Menu</p>
      <div className="text-center py-4 bg-primary">
        <div className="text-white flex flex-col">
          <p className="font-oswald my-2 text-3xl font-semibold">Build Your Own Bowl</p>
          <p className="text-s font-light max-w-[55ch] flex place-self-center mx-4 my-2">DISCLAIMER: the build-your-own-bowl section is NOT FOR ORDERING, but simply a simulation of what your bowl could look like.</p>
        </div>
        <div className="bg-white py-4 sm:py-10 px-10 sm:px-20 mx-20 my-5 text-primary">
          <div className="space-x-2 space-y-2 :text-left">
            <button className="border-[1px] border-primary rounded-2xl px-3 text-lg">Base</button>
            <button className="border-[1px] border-primary rounded-2xl px-3 text-lg">Proteins</button>
            <button className="border-[1px] border-primary rounded-2xl px-3 text-lg">Sides</button>
            <button className="border-[1px] border-primary rounded-2xl px-3 text-lg">Sauce</button>
            <button className="border-[1px] border-primary rounded-2xl px-3 text-lg">Toppings</button>
          </div>
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="text-left sm:space-y-4 space-y-3 my-5 mt-16 sm:my-16 order-last sm:order-first">
              <p className="font-oswald font-semibold pb-4 text-2xl">Step 1: Choose a Base</p>
              <p>Sushi Rice</p>
              <p>White Rice</p>
              <p>Spring Mix</p>
              <p>Half & Half</p>
            </div>
            <div className="sm:size-64 size-44 sm:m-10 place-self-center">
              <img src={BaseImage} className="object-cover translate-y-7 aspect-square rounded-full w-full h-auto"/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mx-20 sm:mx-28 my-8 text-primary">
        <div className="m-4 space-y-5 md:block hidden">
          <div className="aspect-square overflow-hidden size-[30rem]">
            <img src={MenuImg1} className="object-cover -translate-y-1/3"/>
          </div>
          <div className="aspect-square overflow-hidden size-[30rem]">
            <img src={MenuImg2} className="object-cover -translate-y-1/3 scale-105"/>
          </div>
          <div className="aspect-square overflow-hidden size-[30rem]">
            <img src={MenuImg3} className="object-cover -translate-y-1/3 scale-105 translate-x-3"/>
          </div>
          <div className="aspect-square overflow-hidden size-[30rem]">
            <img src={MenuImg4} className="object-cover -translate-y-1/3 scale-105"/>
          </div>
        </div>
        <div className="my-16 md:mx-14 md:block flex flex-col text-center md:text-left">
          <div>
            <p className="text-3xl font-oswald font-semibold my-2">Our Signature Bowls</p>
            <p className="text-s">Regular $13.99&emsp;Large $16.99</p>
          </div>
          <div className="aspect-square overflow-hidden size-11/12 md:hidden self-center mt-10">
            <img src={MenuImg1} className="object-cover -translate-y-1/3"/>
          </div>
          <div className="space-y-10 my-10 flex flex-col">
            <div className="space-y-2">
              <p className="font-oswald text-xl">Salmon Style Bowl</p>
              <p>classic salmon, lettuce, red cabbage, cucumber, sweet onion, edamame, green onion, seaweed salad, masago, japanese dressing, sesame seeds</p>
            </div>
            <div className="space-y-2">
              <p className="font-oswald text-xl">Tuna Lover Bowl</p>
              <p>classic tuna, spicy tuna, cucumber, red cabbage, edamame, cherry tomato, carrots, seaweed salad, green onion, spicy mayo, sesame seeds, crispy onion</p>
            </div>
            <div className="space-y-2">
              <p className="font-oswald text-xl">Rainbow Bowl</p>
              <p>classic salmon, lettuce, red cabbage, cucumber, sweet onion, edamame, green onion, seaweed salad, masago, japanese dressing, sesame seeds</p>
            </div>
            <div className="aspect-square overflow-hidden md:hidden size-11/12 self-center">
              <img src={MenuImg2} className="object-cover -translate-y-1/3"/>
            </div>
            <div className="space-y-2">
              <p className="font-oswald text-xl">Big Kahuna Bowl</p>
              <p>classic tuna, spicy tuna, cucumber, red cabbage, edamame, cherry tomato, carrots, seaweed salad, green onion, spicy mayo, sesame seeds, crispy onion</p>
            </div>
            <div className="space-y-2">
              <p className="font-oswald text-xl">Volcano Bowl</p>
              <p>classic salmon, lettuce, red cabbage, cucumber, sweet onion, edamame, green onion, seaweed salad, masago, japanese dressing, sesame seeds</p>
            </div>
            <div className="space-y-2">
              <p className="font-oswald text-xl">Veggie Bowl</p>
              <p>classic tuna, spicy tuna, cucumber, red cabbage, edamame, cherry tomato, carrots, seaweed salad, green onion, spicy mayo, sesame seeds, crispy onion</p>
            </div>
            <div className="aspect-square overflow-hidden md:hidden size-11/12 self-center">
              <img src={MenuImg3} className="object-cover -translate-y-1/3"/>
            </div>
            <div className="space-y-2">
              <p className="font-oswald text-xl">Tempura Shrimp Bowl</p>
              <p>classic tuna, spicy tuna, cucumber, red cabbage, edamame, cherry tomato, carrots, seaweed salad, green onion, spicy mayo, sesame seeds, crispy onion</p>
            </div>
            <div className="space-y-2">
              <p className="font-oswald text-xl">California Dreaming Bowl</p>
              <p>classic tuna, spicy tuna, cucumber, red cabbage, edamame, cherry tomato, carrots, seaweed salad, green onion, spicy mayo, sesame seeds, crispy onion</p>
            </div>
            <div className="space-y-2">
              <p className="font-oswald text-xl">Dancing Catfish Bowl</p>
              <p>classic tuna, spicy tuna, cucumber, red cabbage, edamame, cherry tomato, carrots, seaweed salad, green onion, spicy mayo, sesame seeds, crispy onion</p>
            </div>
            <div className="aspect-square overflow-hidden md:hidden size-11/12 self-center">
              <img src={MenuImg4} className="object-cover -translate-y-1/3"/>
            </div>
          </div>
          <div className="space-y-5 my-10">
            <p className="font-oswald text-2xl font-semibold my-6">Side Dishes</p>
            <div className="flex justify-between"><p>Miso Soup</p><p>$2.00</p></div>
            <div className="flex justify-between"><p>Spam Musubi</p><p>$3.50</p></div>
            <div className="flex justify-between"><p>Pork Gyoza (6 pieces)</p><p>$5.88</p></div>
            <div className="flex justify-between"><p>Chicken Karaage (8 oz)</p><p>$6.88</p></div>
            <div className="flex justify-between"><p>Tempura Shrimp (3 pieces)</p><p>$6.99</p></div>
            <div className="flex justify-between"><p>Seaweed Salad</p><p>$3.50</p></div>
            <div className="flex justify-between"><p>Squid Salad</p><p>$4.99</p></div>
            <div className="flex justify-between"><p>Hawaiian Mac Salad</p><p>$3.50</p></div>
            <div className="flex justify-between"><p>Edamame (in shell)</p><p>$3.99</p></div>
          </div>
          <div className="space-y-5 my-10">
            <p className="font-oswald text-2xl font-semibold my-6">Poke by the Pound</p>
            <div className="flex justify-between"><p>1/2 lb Poke</p><p>$15.00</p></div>
            <div className="flex justify-between"><p>1 lb Poke</p><p>$20.00</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
