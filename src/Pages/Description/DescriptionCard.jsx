const DescriptionCard = ({ card }) => {
  const { picture, title, text_button_bg_color, description, price } =
    card || {};

  const btnColor = {
    background: text_button_bg_color,
  };
  console.log(title);

  const handleDonation = () => {
    const addDonationArray = [];

    const donatedItem = JSON.parse(localStorage.getItem("Donations"));

    if (!donatedItem) {
      addDonationArray.push(phone);
      localStorage.setItem("Donations", JSON.stringify(addDonationArray));
    } 
    
    
    else {
      const isExits = donatedItem.find((card) => card.id === id);

      if (!isExits) {
        addDonationArray.push(...donatedItem, card);
        localStorage.setItem("Donations", JSON.stringify(addDonationArray));
      } 
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="relative max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 relative">
        <img
          src={picture}
          alt="image"
          className="w-full h-[50vh] object-cover rounded-md"
        />

        <div className="absolute top-56 left-0 p-4 bg-black opacity-70 w-full h-20"></div>
        <button
          style={btnColor}
          className="text-white px-4 py-2 rounded-md absolute top-[245px] left-6"
          onClick={handleDonation}
        >
          Donate ${price}
        </button>

        <div className="py-6">
          <h6 className="mb-4 text-2xl font-bold">{title}</h6>
          <h4 className="mb-2">{description}</h4>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;
