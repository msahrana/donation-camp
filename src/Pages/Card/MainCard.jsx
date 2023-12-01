/* eslint-disable react/prop-types */
import swal from "sweetalert";


const MainCard = ({card}) => {

    const {id, image, title, description, price} = card || {}

    const handleAddDonate = ()=>{
        const addDonationItems = []

        const donationItems = JSON.parse(localStorage.getItem('donation'))

        if(!donationItems){
            addDonationItems.push(card)
            localStorage.setItem('donation', JSON.stringify(addDonationItems))
            swal("Good job!", "Product Added Successfully!", "success");
        }
        else{
            const isExist = donationItems.find(card => card.id === id)
            
            if (!isExist) {
            addDonationItems.push(...donationItems, card)
            localStorage.setItem('donation', JSON.stringify(addDonationItems))
            swal("Good job!", "Product Added Successfully!", "success");
            } 
            else{
            swal("Error!", "Already Added!", "error");
            }
        }
    }

    return (
        <div className=" justify-center items-center h-[80vh]">
            <div className="w-[800px] rounded bg-white bg-clip-border text-gray-700 shadow-md">
                <img className="w-full justify-center items-center" src={image} alt=""/>
            </div>
            <div className="w-[800px] h-20 opacity-20 -mt-20 bg-cyan-500">

            </div>
            <div className="p-6">
                <h5 className="mb-2 block text-2xl font-bold">
                    {title}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased mt-6">
                    {description}
                </p>
            </div>
            <div className="-mt-64 mx-6">
                <button onClick={handleAddDonate}
                    className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg "
                    type="button"
                    data-ripple-light="true">
                    Donate ${price}
                </button>
            </div>
        </div>
    );
};

export default MainCard;