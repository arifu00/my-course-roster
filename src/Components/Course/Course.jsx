import { FaDollarSign, FaBookOpen } from "react-icons/fa";
const Course = ({ course }) => {
  const { title, cover_img, description, price, credit } = course;
  //   console.log(title);
  return (
    <div className="">
      <div className="card bg-white shadow-xl px-4 h-[550px] rounded-lg">
        <figure>
          <img className="w-full p-4" src={cover_img} alt={title} />
        </figure>
        <div className="card-body ">
          <h2 className="text-lg font-semibold text-[#1C1B1B] text-center">
            {title}
          </h2>
          <p className="h-36 text-[#1c1b1b99] text-base p-2 font-normal mt-3">
            {description}
          </p>
         
            <div className="flex justify-around text-base text-[#1c1b1b99] font-medium">
              <p className="flex items-center gap-3">
                <FaDollarSign></FaDollarSign>Price: {price}
              </p>
              <p className="flex items-center gap-3"><FaBookOpen/>Credit: {credit}hr</p>
            </div>
            <div className="flex justify-center mt-6">
            <button className="btn text-lg font-semibold text-white py-2 px-28 rounded-lg hover:bg-green-300 hover:text-emerald-900 bg-[#2F80ED]">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
