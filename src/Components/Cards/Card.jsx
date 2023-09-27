import { Link } from "react-router-dom";


const Card = ({ card }) => {
  const { id, picture, title, category, card_bg_color,category_bg_color,text_button_bg_color } = card || {};

  
  const cardStyle = { backgroundColor: card_bg_color };
  const categoryStyle = { backgroundColor: category_bg_color }
  const textColor = { color: text_button_bg_color}

  return (
    <div style={cardStyle} className="flex flex-col rounded-xl bg-clip-border text-gray-700">
      <div className="overflow-hidden rounded-t-xl  bg-clip-border text-gray-700">
        <img src={picture} className="h-full w-full object-cover" alt={title} />
      </div>
      <div style={textColor} className="p-6">
      <Link to={`/description/${id}`} state={category}>
        <p style={categoryStyle} className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 w-20 text-center p-1 rounded">
          {category}
        </p>
        </Link>
        <div className="mb-2 flex items-center justify-between">
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
