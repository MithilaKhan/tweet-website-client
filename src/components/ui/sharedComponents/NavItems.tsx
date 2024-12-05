/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavItems = ({ items, onClose }: { items: any[]; onClose?: () => void }) => {
      const pathname = usePathname();

      return (
            <>
                  {items.map((item, index) => (
                        <Link
                              key={index}
                              onClick={onClose}
                              className={`text-text-primary leading-4 flex items-center gap-2 text-[16px] font-[400] ${
                                    pathname === item.path ? 'bg-primary p-2 rounded drop-shadow text-white' : ''
                              }`}
                              href={item.path}
                        >
                            <span className={`  ${
                                    pathname === item.path ? ' text-white' : ' text-primary'
                             } `}> {item.icon}</span>  <span> {item.label} </span> 
                        </Link>
                  ))}
            </>
      );
};

export default NavItems;