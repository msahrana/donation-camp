import { Link } from "react-router-dom";

const MainCards = ({card}) => {

    const {id, image, title, category, text_color, category_bg, card_bg} = card || {}


    return (
        <div>
          <Link to={`/cards/${id}`}>
            <div className="card w-[312px] h-[283px] bg-slate-300 rounded" style={{backgroundColor: card_bg}}>
                <img src={image} alt="" />
                <div className="mx-2 mt-2">
                  <button style={{color: text_color, backgroundColor: category_bg}} className="py-1 px-2 font-bold rounded">{category}</button>
                    <h1 className="text-xl font-semibold mt-3" style={{color: text_color}}>{title}</h1>
                </div>
            </div>
          </Link>
        </div>
    );
};

export default MainCards;