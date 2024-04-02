import MainCards from "./MainCards";

const Cards = ({filteredData}) => {
  return (
    <div className="py-10">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredData?.map((card) => (
          <MainCards key={card.id} card={card}></MainCards>
        ))}
      </div>
    </div>
  );
};

export default Cards;
