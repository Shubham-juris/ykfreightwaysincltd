import React from "react";

const BoardMemberCard = ({ name, title, description, imageUrl, isActive }) => {
  return (
    <div
      className={`bg-white rounded-md shadow-md overflow-hidden transition-transform duration-300 ${
        isActive ? "scale-95" : "scale-90"
      }`}
    >
      <div className="flex">
        <div className="w-1/4">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={name}
              className="w-90% h-auto object-cover"
            />
          )}
        </div>
        <div className="w-2/3 p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
          <p className="text-sm text-[#34ccff] mb-2">{title}</p>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Board = () => {
  const directorsData = [
    {
      name: "William Kerry",
      title: "Managing Director",
      description:
        "Mixtape taxidermy, plaid crucifix, Cosby sweater occupy cold-pressed. Portland pop-up lo-fi PBR&B kale chips readymade. Flexitarian bitters Shoreditch literally paleo. Vice letterpress Bushwick direct trade fingerstache tattooed. Stumptown flannel mlkshk wayfarers forage, plaid VHS drinking vinegar quinoa YOLO.",
      imageUrl:
        "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Sarah Connor",
      title: "Board Member",
      description:
        "Mixtape taxidermy, plaid crucifix, Cosby sweater occupy cold-pressed. Portland pop-up lo-fi PBR&B kale chips readymade. Flexitarian bitters Shoreditch literally paleo. Vice letterpress Bushwick direct trade fingerstache tattooed. Stumptown flannel mlkshk wayfarers forage, plaid VHS drinking vinegar quinoa YOLO.",
      imageUrl:
        "https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Mathilda Joop",
      title: "Board Member",
      description:
        "Mixtape taxidermy, plaid crucifix, Cosby sweater occupy cold-pressed. Portland pop-up lo-fi PBR&B kale chips readymade. Flexitarian bitters Shoreditch literally paleo. Vice letterpress Bushwick direct trade fingerstache tattooed. Stumptown flannel mlkshk wayfarers forage, plaid VHS drinking vinegar quinoa YOLO.",
      imageUrl: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
    },
    
  ];

  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="mx-auto py-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        BOARD OF DIRECTORS
      </h2>
      <div className="flex">
        <div className="w-1/4 pr-1">
          <div className="bg-gray-100 rounded-md shadow-md">
            <ul>
              {directorsData.map((director, index) => (
                <li
                  key={index}
                  className={`cursor-pointer px-4 py-2 ${
                    activeTab === index
                      ? "bg-[#34ccff] text-white"
                      : "hover:bg-gray-200"
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  {director.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-3/4">
          {directorsData.map((director, index) => (
            <div
              key={index}
              className={`${
                activeTab === index ? "block" : "hidden"
              } animate-fade-in`}
            >
              <BoardMemberCard {...director} isActive={activeTab === index} />
            </div>
          ))}
          <div className="flex justify-between mt-4 text-sm text-gray-500">
            <button
              onClick={() => setActiveTab((prev) => Math.max(0, prev - 1))}
              disabled={activeTab === 0}
              className="focus:outline-none hover:text-[#34ccff] disabled:text-gray-300"
            >
              Previous tab
            </button>
            <button
              onClick={() =>
                setActiveTab((prev) =>
                  Math.min(directorsData.length - 1, prev + 1)
                )
              }
              disabled={activeTab === directorsData.length - 1}
              className="focus:outline-none hover:text-[#34ccff] disabled:text-gray-300"
            >
              Next tab
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
