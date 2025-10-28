import { imagetop, bgimgage, userprofile, iconinfo, socialProfile, articlecard } from "./default"; 
import { VariantRenderer } from "./variants/VariantRenderer";
import { CardSchema } from "./type";


const cards: CardSchema[] = [
  imagetop,
  bgimgage,
  userprofile,
  iconinfo,
  socialProfile,
  articlecard
  
];

export const CardGallery = () => (
  <div className="grid grid-cols-1 md:grid-cols-1 ">
    {cards.map(card =>
      <VariantRenderer key={card.id} variant={card.variant.value} card={card} />
    )}
  </div>
);
