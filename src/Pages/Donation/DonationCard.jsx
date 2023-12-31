
const DonationCard = ({card}) => {

    const {image, title, price, category, text_color, category_bg, card_bg} = card || {}
    return (
        <div>
            <div style={{backgroundColor: card_bg}} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700"> 
                <img 
                  src={image}
                  alt="image"
                  className="h-full w-full object-cover"/>
              </div>
              <div className="p-6">
                <button className="py-1 px-2 font-bold rounded" style={{color: text_color, backgroundColor: category_bg}}>{category}</button>
                
                <h4 className="text-xl font-bold text-black">
                  {title}
                </h4>
                <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased" style={{color: text_color}}>
                  ${price}
                </p>
                <a className="inline-block" href="#">
                  <button style={{backgroundColor: text_color}}
                    className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none text-white"
                    type="button"
                  >
                   View Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      ></path>
                    </svg>
                  </button>
                </a>
              </div>
</div>
        </div>
    );
};

export default DonationCard;