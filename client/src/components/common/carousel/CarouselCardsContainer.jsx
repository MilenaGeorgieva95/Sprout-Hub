import CarouselCard from "./CarouselCard";
const cardsData = [
  { id: 1, imgUrl: "./images/almani-qhizq_V876M-unsplash.jpg" },
  { id: 2, imgUrl: "./images/annie-spratt-PtDXMYgy418-unsplash.jpg" },
  { id: 3, imgUrl: "./images/almani-qhizq_V876M-unsplash.jpg" },
  { id: 4, imgUrl: "./images/almani-qhizq_V876M-unsplash.jpg" },
];

export default function CarouselCardsContainer({ categories }) {
  return (
    <div className="d-flex justify-content-center px-30">
      {categories.map((cardData) => (
        <CarouselCard key={cardData._id} category={cardData} />
      ))}
    </div>
  );
}
