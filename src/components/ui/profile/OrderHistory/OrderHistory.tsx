'use client'
import { ConfigProvider, Pagination, Select } from 'antd'
import { OrderCard } from './order-card';

export interface Order {
    id: string;
    restaurantName: string;
    restaurantLogo: string;
    transactionId: string;
    date: string;
    status: 'Pending' | 'Delivered' | 'Cancelled';
    amount: number;
}



const MOCK_ORDERS: Order[] = [
    {
        id: '1',
        restaurantName: 'Burger Kings',
        restaurantLogo: '/burgerking.svg',
        transactionId: '#AC392345458',
        date: 'Today, 5:50 PM',
        status: 'Pending',
        amount: 40.00,
    },
    {
        id: '2',
        restaurantName: 'Pizza Hut',
        restaurantLogo: '/Mcdonald.svg',
        transactionId: '#AC392345459',
        date: 'Today, 3:50 PM',
        status: 'Pending',
        amount: 40.00,
    },
    {
        id: '3',
        restaurantName: "McDonald's",
        restaurantLogo: '/burgerking.svg',
        transactionId: '#AC392345460',
        date: 'Yesterday, 5:50 PM',
        status: 'Delivered',
        amount: 40.00,
    },
    {
        id: '4',
        restaurantName: 'Starbucks',
        restaurantLogo: '/Mcdonald.svg',
        transactionId: '#AC392345461',
        date: '20 August 2024, 5:50 PM',
        status: 'Cancelled',
        amount: 40.00,
    },
    {
        id: '5',
        restaurantName: 'Pizzahut',
        restaurantLogo: '/burgerking.svg',
        transactionId: '#AC392345462',
        date: '15 March 2024, 5:50 PM',
        status: 'Delivered',
        amount: 40.00,
    },

]


const OrderHistory = () => {

  

    return (
        <div className="">
            <div className=" mx-auto p-4">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-xl font-semibold">Order History</h1>

                    <ConfigProvider
                        theme={{
                            components: {
                                Select: {
                                    optionSelectedColor: '#ffffff',
                                    optionSelectedBg: '#ED6923',
                                    optionActiveBg: '#fdf0e9', 
                                    activeBorderColor: '#ED6923', 
                                    hoverBorderColor:"transparent",
                                },
                            },
                        }}
                    >
                        <Select defaultValue={'all'} className=" rounded-md px-2 py-1 text-sm"
                            style={{
                                width: 120,
                                height: 40,
                             
                                outline: "none",
                                boxShadow: "none",
                            }}>
                            <Select.Option value="all">All</Select.Option>
                            <Select.Option value="pending">Pending</Select.Option>
                            <Select.Option value="delivered">Delivered</Select.Option>
                            <Select.Option value="cancelled">Cancelled</Select.Option>
                        </Select>
                    </ConfigProvider>
                </div>

                <div className="space-y-4">
                    {MOCK_ORDERS.map((order) => (
                        <OrderCard key={order.id} order={order} />
                    ))}
                </div>

                <div className="flex justify-center mt-6">
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
        </div>
    );
};

export default OrderHistory;