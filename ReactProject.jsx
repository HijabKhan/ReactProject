import React from 'react'

const TeamCard = (props) => {

  const itemList = props.item;
  const categories = props.Category;

  const NewList = itemList.map((grp) => {
    return (
      // outerlayer css
      <div
        className="card max-w-sm mx-auto h-full bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 my-5  "
        key={grp.id}
      >
        <div className="card-header overflow-hidden rounded-t-lg">
          <img
            className="w-full  h-50 p-2 mt-4 object-cover no-repeat justify-center "
            src={grp.image}
            alt={grp.alt}
          />
        </div>
        <div className="card-body p-2 md:h-[180px]  ">
          <h3 className="text-lg font-bold ">{grp.title}</h3>
          <p className="text-gray-700 pb-2 ">{grp.bodyText}</p>
        </div>
        <div className="button-text ml-3 "><a
              href={grp.buttonUrl} // Link to the section
              className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {grp.buttonText}
            </a>
            </div>
      </div>
    );
  });

  return (
    <>
      <div className="container-fluid mx-auto p-16  rounded-lg shadow-sm mt-4 mb-4">
        <div className='seven'>
        <h1 className="font-2xl w-30  font-bold   text-center mb-8 ">{categories}</h1></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {NewList}
        </div>
      </div>
    </>
  );
};
export default TeamCard