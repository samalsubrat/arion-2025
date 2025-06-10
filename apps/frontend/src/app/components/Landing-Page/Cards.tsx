import React from 'react'
import ProductCard from './ProductCard'

interface CardData {
  title: string;
  imageUrl: string;
  altText: string;
  linkHref: string;
  isNew?: boolean;
  bgColor?: string;
}

interface CardsProps {
  cards: CardData[];
}

const Cards: React.FC<CardsProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <ProductCard
          key={index}
          title={card.title}
          imageUrl={card.imageUrl}
          altText={card.altText}
          linkHref={card.linkHref}
          isNew={card.isNew}
          bgColor={card.bgColor} imageStyleClass={''}        />
      ))}
    </div>
  )
}

export default Cards