import React from 'react'; 
import { Lobster_Two } from 'next/font/google';

const lobsterTwo = Lobster_Two({
  subsets: ['latin'], // Specify subsets as needed
  weight: ['400', '700'], // Specify the weights you want to include
});

const CommontypeTitle = ({title , className}:{title:string , className:string} ) => {
    return  <p className={` ${lobsterTwo.className }  text-xl font-normal text-[#333333]  ${className}`}> {title} </p>
};

export default CommontypeTitle;