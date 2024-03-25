import {useEffect, useState} from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));

    if (donationItems) {
      setDonation(donationItems);
      const total = donationItems.reduce(
        (preValue, currentItem) => preValue + currentItem.price,
        0
      );
      console.log(total);
      setTotalPrice(total);
    } else {
      setNoFound("No Data Found");
    }
  }, []);
  console.log(donation);

  const handleRemove = () => {
    localStorage.clear();
    setDonation([]);
    setNoFound("No Data Found");
  };

  return (
    <div>
      {noFound ? (
        <p className="text-2xl h-[80vh] flex justify-center items-center">
          {noFound}
        </p>
      ) : (
        <div>
          {donation.length > 0 && (
            <div>
              <button
                onClick={handleRemove}
                className="px-5 py-2 bg-cyan-400 block mx-auto mb-6 text-red-300 text-2xl font-bold rounded-lg"
              >
                Delete All
              </button>
              <h1>Total Price: ${totalPrice}</h1>
            </div>
          )}
          <div className="grid grid-cols-2 gap-5">
            {isShow
              ? donation.map((card) => (
                  <DonationCard key={card.id} card={card}></DonationCard>
                ))
              : donation
                  .slice(0, 2)
                  .map((card) => (
                    <DonationCard key={card.id} card={card}></DonationCard>
                  ))}
          </div>
          {donation.length > 2 && (
            <button
              onClick={() => setIsShow(!isShow)}
              className="px-5 py-2 mt-6 bg-cyan-400 block mx-auto mb-6 text-white text-2xl font-bold rounded-lg"
            >
              {isShow ? "See Less" : "See More"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Donation;
