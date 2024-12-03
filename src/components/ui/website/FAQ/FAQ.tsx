"use client"
import CommonBanner from '@/components/shared/CommonBanner';
import React from 'react';

import type { CSSProperties } from 'react' 
import type { CollapseProps } from 'antd';
import { Collapse, ConfigProvider, Pagination, theme } from 'antd';
import { Plus } from 'lucide-react';
import Heading from '@/components/shared/Heading';

const text = `
To place an order, download our app or visit our website, enter your location, and browse local restaurants. Add items to your cart, proceed to checkout, and confirm your order. We’ll take care of the rest! You’ll receive updates on your order status and can track your delivery in real-time. Enjoy fresh, delicious food delivered right to your door!
`;

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
  {
    key: '1',
    label: <p className='font-sans' style={{ color: '#4E4E4E', fontSize: '19px' }}> How do I place an order?</p> ,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: <p style={{ color: '#4E4E4E', fontSize: '19px' }}> How long will my order take to arrive? </p> ,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: <p style={{ color: '#4E4E4E', fontSize: '19px' }}> How will I know if order is placed successfully ? </p>,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '4',
    label: <p style={{ color: '#4E4E4E', fontSize: '19px' }}> How do I track my order?</p> ,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '5',
    label: <p style={{ color: '#4E4E4E', fontSize: '19px' }}> Can I cancel my order ?</p> ,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '6',
    label: <p style={{ color: '#4E4E4E', fontSize: '19px' }}> What are the payment options?</p> ,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '7',
    label: <p style={{ color: '#4E4E4E', fontSize: '19px' }}> Are there any delivery fees?</p> ,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },


]; 
const FAQ = () => { 
    const { token } = theme.useToken();

    const panelStyle: React.CSSProperties = {
      marginBottom: 24,
      background: "#fff",  
    
      borderRadius: token.borderRadiusLG,
    
    };  
    return (
        <div>
            <CommonBanner title='Faq' /> 
             
            <div className=' py-[100px]'> 

<div className=' container'>  

    <div className='text-center pb-[40px]'>
<Heading className=' uppercase ' title1='Frequently Asked ' title2='Questions ' />

    </div> 

    <Collapse
bordered={false}
expandIcon={({ isActive }) => <Plus  size={22} style={{ 
transform: `rotate(${isActive ? 0 : 270}deg)`,
transition: 'transform 0.3s ease', 
color: '#ED6923' 
}}  />} 
expandIconPosition="end"
style={{ background: "#FDF0E9"  , color: '#222222'}}  
items={getItems(panelStyle)}
/>  

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

export default FAQ;