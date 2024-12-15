import React from 'react'; 


interface IButtonProps {
  title1: string | null; 
  title2: string;
  className: string;
}

const Heading : React.FC<IButtonProps> = ({ title1, title2, className }) => {
    return <div  className={` text-[#343B46]  font-[600] lg:text-[40px] text-[24px]  ${className}`} >
   <span> {title1} </span> <span className=' text-primary'> {title2}</span>
  </div>
};

export default Heading;