import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  imageUrl: string;
  altText: string;
  linkHref: string;
  isNew?: boolean;
  bgColor?: string;
  imageStyleClass: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, imageUrl, altText, linkHref, isNew, bgColor = 'bg-white', imageStyleClass }) => {
  const linkColorClass = bgColor.includes('gradient') ? 'text-blue-700 hover:text-blue-900' : 'text-gray-700 hover:text-gray-900';

  return (
    <div className={`relative flex flex-col justify-between p-8 rounded-lg shadow-lg overflow-hidden h-[450px] ${bgColor}`}>
      {isNew && (
        <div className="absolute top-4 left-4 inline-block rounded-full py-1 px-4 bg-white text-purple-500 text-xs font-semibold">
          NEW
        </div>
      )}
      <div className='flex flex-col items-center z-30'>
        <h2 className="text-3xl font-semibold text-gray-900 mb-2 whitespace-pre-line">{title}</h2>
        <Link href={linkHref} className={`flex items-center gap-1 ${linkColorClass} group transition-all duration-300`}>
          Learn more <MoveRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" size={16} />
        </Link>
      </div>
      <Image
        src={imageUrl}
        alt={altText}
        width={500}
        height={300}
        className={`absolute bottom-0 right-0 w-full opacity-80 ${imageStyleClass}`}
      />
    </div>
  );
};

export default ProductCard; 