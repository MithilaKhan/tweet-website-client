import SingleFoodCard from '@/components/shared/SingleFoodCard';
import { ConfigProvider, Pagination } from 'antd';
import React from 'react'; 


const foodItems = [
    {
        id: 1,
        title: "Burger with Emmentaler Cheese",
        restaurant: "Burger King",
        time: "25 min",
        rating: 4.5,
        price: "€44.99",
        image: "/food1.png",
        discount: "50% OFF",
        deliveryPrice: "$02"
    },
    {
        id: 2,
        title: "Tandoori Chicken",
        restaurant: "Burger King",
        time: "35 min",
        rating: 4.8,
        price: "€44.99",
        image: "/food2.png",
        discount: "50% OFF",
        deliveryPrice: "$02"
    },
    {
        id: 3,
        title: "Döner Kebab",
        restaurant: "Burger King",
        time: "30 min",
        rating: 4.7,
        price: "€44.99",
        image: "/food3.png",
        discount: "50% OFF",
        deliveryPrice: "$02"
    },
    {
        id: 4,
        title: "Classic Wiener Schnitzel",
        restaurant: "Burger King",
        time: "25 min",
        rating: 4.6,
        price: "€44.99",
        image: "/food4.png",
        discount: "50% OFF",
        deliveryPrice: "$02"
    },
    {
        id: 5,
        title: "Vienna Sausage Platter",
        restaurant: "Burger King",
        time: "20 min",
        rating: 4.4,
        price: "€44.99",
        image: "/food5.png",
        discount: "50% OFF",
        deliveryPrice: "$02"
    },
    {
        id: 6,
        title: "Cheese Strudel",
        restaurant: "Burger King",
        time: "35 min",
        rating: 4.9,
        price: "€44.99",
        image: "/food9.png",
        discount: "50% OFF",
        deliveryPrice: "$02"
    },


];


const ExclusiveDeals = () => { 
 

    return (
        <div>
              <div className="">

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
    {foodItems.map((item) => <div key={item.id}> <SingleFoodCard item={item} /></div>)}
</div>
<ConfigProvider
    theme={{
        components: {
            Pagination: {
                itemActiveBg: "#ED6923"
            },
        },
        token: {
            colorPrimary: "#ffffff",
            colorBorder: "#ED6923",


        },
    }}
>

    <Pagination align="center" defaultCurrent={1} total={50} />
</ConfigProvider>
</div> 

        </div>
    );
};

export default ExclusiveDeals;