import featuredImg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Featured.css'
const Featured = () => {
  return (
    <section className="featured-img  pt-4 text-white  ">
   
        <SectionTitle subHeading={"check it out"} heading={"From our menu"}></SectionTitle>
     
      <div className="my-10 pt-3 md:flex items-center justify-center pl-36 pr-20 bg-slate-500 bg-opacity-50">
        <img
          style={{ width: "448px", height: "300px" }} className="pb-20"
          src={featuredImg}
          alt=""
        />
        <div className=" md:ml-10 pb-20 ">
          <h1>Aug 22,2023</h1>
          <p className="uppercase">Where can i get it?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            dolorem ullam, maxime adipisci repellendus alias voluptatem rerum
            non maiores itaque ipsum et aliquam dicta repudiandae beatae. Cum
            quia alias, dolorem ipsa explicabo hic laboriosam. Nihil itaque,
            neque sunt aliquid fugiat provident non voluptatem impedit soluta
            vitae ut. Rem, placeat nemo.
          </p>
          <button className="btn btn-outline border-0 border-b-4 text-white mt-4">Order Now!</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
