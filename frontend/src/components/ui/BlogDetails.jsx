import React from "react";


import writer from "../../assets/photos/blog_writer.png";
import banner from "../../assets/photos/ads-banner.jpg";
import BlogPostSmallCard from "./BlogPostSmallCard";




import postOne from '../../assets/photos/post1.jpg';


import postTwo from '../../assets/photos/post2.jpg';


 {/* Many img and comment */}
import prevComm from '../../assets/photos/prevComm.jpg';
import nextComm from '../../assets/photos/nextComm.jpg';
import c1 from '../../assets/photos/c1.jpg';
import c2 from '../../assets/photos/c2.jpg';
import c3 from '../../assets/photos/c3.jpg';
import c4 from '../../assets/photos/c4.jpg';
import c5 from '../../assets/photos/c5.jpg';


const comments = [
  { name: "Emilly Blunt", time: "December 4, 2017 at 3:12 pm", text: "Never say goodbye till the end comes!", image: c1},
  { name: "Elsie Cunningham", time: "December 4, 2017 at 3:12 pm", text: "Never say goodbye till the end comes!", image: c2 },
  { name: "Annie Stephens", time: "December 4, 2017 at 3:12 pm", text: "Never say goodbye till the end comes!", image: c3 },
  { name: "Maria Luna", time: "December 4, 2017 at 3:12 pm", text: "Never say goodbye till the end comes!", image: c4 },
  { name: "Ina Hayes", time: "December 4, 2017 at 3:12 pm", text: "Never say goodbye till the end comes!", image: c5 },
];











import blog from '../../assets/photos/blog.jpg';

import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { FaTwitterSquare } from "react-icons/fa";

import { FaBehance } from "react-icons/fa6";

import { GiHumanEar } from "react-icons/gi";

import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";



import { FaComment } from "react-icons/fa";

const BlogDetails = () => {
  return (

<div style={{display:"flex", flexDirection:"row", margin:"50px"}}>  



    <div style={{flex:1, margin:"20px"}}>  

        <div style={styles.container}>
          <div style={styles.imageContainer}>
           <img
          src={blog}
          alt="Horseback Riding"
          style={styles.image}
        />
      </div>

      <div style={{display:"flex", flexDirection:"row", width:"450px"}}> 

         <div style={{flex:1, margin:"10px", marginBottom:"30px"}}> 

         <span > Food, Technology, Politics, Lifestyle</span> <br/>


         <div style={styles.metaData}>
      <div style={styles.item}>
        <span style={styles.text}>Mark Wiens</span>
        <span style={styles.icon}> <GiHumanEar/> </span>
      </div>
      <div style={styles.item}>
        <span style={styles.text}>12 Dec, 2017</span>
        <span style={styles.icon}> <FaRegCalendarAlt/>  </span>
      </div>
      <div style={styles.item}>
        <span style={styles.text}>1.2M Views</span>
        <span style={styles.icon}><FaRegEye/> </span>
      </div>
      <div style={styles.item}>
        <span style={styles.text}>06 Comments</span>
        <span style={styles.icon}> <FaComment/> </span>
      </div>
      <div style={styles.social}>
        <span style={styles.icon}> <FaFacebook/> </span> 
        <span style={styles.icon}><FaGithub/> </span> 
        <span style={styles.icon}> <FaTwitterSquare/> </span> 
        <span style={styles.icon}> <FaBehance/> </span> 
      </div>
    </div>
   

    </div>



        <div style={{flex:1, margin:"10px"}}>


        <h1 style={styles.title}>Astronomy Binoculars A Great Alternative</h1>
        
        <p style={styles.paragraph}>
          MCSE boot camps have its supporters and its detractors. Some people do
          not understand why you should have to spend money on boot camp when
          you can get the MCSE study materials yourself at a fraction.
        </p>
        <p style={styles.paragraph}>
          Boot camps have its supporters and its detractors. Some people do not
          understand why you should have to spend money on boot camp when you
          can get the MCSE study materials yourself at a fraction of the camp
          price. However, who has the willpower to actually sit through a
          self-imposed MCSE training, who has the willpower to actually sit
          through a self-imposed.
          </p>
          <p style={styles.paragraph}>
             Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually sit through a self-imposed
          </p> 
           </div>
        

        </div>

    </div>


    

    <div>

    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Top text section */}
      <div style={{ marginBottom: "20px" }}>
        <p style={{ fontWeight: "bold", fontSize: "14px", lineHeight: "1.6" }}>
          MCSE boot camps have its supporters and its detractors. Some people do not
          understand why you should have to spend money on boot camp when you can get
          the MCSE study materials yourself at a fraction of the camp price.
          However, who has the willpower to actually sit through a self-imposed MCSE
          training.
        </p>
      </div>

      {/* Images section */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <img
          src={postOne}
          alt="First"
          style={{ width: "48%", height: "auto", borderRadius: "8px" }}
        />
        <img
          src={postTwo}
          alt="Second"
          style={{ width: "48%", height: "auto", borderRadius: "8px" }}
        />
      </div>

      {/* Bottom text section (under images) */}
      <div style={{ marginBottom: "20px" }}>
        <p style={{ fontSize: "12px", lineHeight: "1.6" }}>
          MCSE boot camps have its supporters and its detractors. Some people do not
          understand why you should have to spend money on boot camp when you can get
          the MCSE study materials yourself at a fraction of the camp price.
          However, who has the willpower.
        </p>
        <p style={{ fontSize: "12px", lineHeight: "1.6" }}>
          MCSE boot camps have its supporters and its detractors. Some people do not
          understand why you should have to spend money on boot camp when you can get
          the MCSE study materials yourself at a fraction of the camp price.
          However, who has the willpower.
        </p>
      </div>
    </div>


    </div>



     {/* Manay Image and Comment added */}

    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Navigation Section */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={prevComm}
            alt="Prev Post"
            style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }}
          />
          <div>
            <span style={{ fontSize: "14px", color: "#888" }}>Prev Post</span>
            <br />
            <a href="#" style={{ color: "#007bff", fontWeight: "bold" }}>Space The Final Frontier</a>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ textAlign: "right", marginRight: "10px" }}>
            <span style={{ fontSize: "14px", color: "#888" }}>Next Post</span>
            <br />
            <a href="#" style={{ color: "#007bff", fontWeight: "bold" }}>Telescopes 101</a>
          </div>
          <img
            src={nextComm}
            alt="Next Post"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
        </div>
      </div>

      {/* Comments Section */}
      <div style={{ marginTop: "20px" }}>
        <h3 style={{ marginBottom: "20px", fontSize: "18px", fontWeight: "bold" }}>05 Comments</h3>
        {comments.map((comment, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "20px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "10px",
            }}
          >
            <img
              src={comment.image}
              alt={comment.name}
              style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "15px" }}
            />
            <div style={{ flexGrow: 1 }}>
              <p style={{ margin: "0", fontSize: "16px", fontWeight: "bold", color: "#007bff" }}>{comment.name}</p>
              <span style={{ fontSize: "14px", color: "#888" }}>{comment.time}</span>
              <p style={{ marginTop: "5px", fontSize: "14px" }}>{comment.text}</p>
            </div>
            <a href="#" style={{ color: "#007bff", fontSize: "14px", fontWeight: "bold", alignSelf: "flex-start" }}>
              REPLY
            </a>
          </div>
        ))}
      </div>
    </div> 


     
    {/*   Blog Leave From Page  */}

    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <h3 style={{ marginBottom: "20px", fontSize: "18px", fontWeight: "bold" }}>Leave a Comment</h3>
      <form>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="Enter Name"
            style={{
              width: "48%",
              padding: "10px",
              fontSize: "14px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <input
            type="email"
            placeholder="Enter email address"
            style={{
              width: "48%",
              padding: "10px",
              fontSize: "14px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </div>

        <input
          type="text"
          placeholder="Subject"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "14px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "15px",
          }}
        />

        <textarea
          placeholder="Message"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "14px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            height: "120px",
            marginBottom: "15px",
            resize: "vertical",
          }}
        />

        <button
          type="submit"
          style={{
            color: "#007bff",
            fontSize: "14px",
            fontWeight: "bold",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          POST COMMENT
        </button>
      </form>
    </div>













 </div>



    <div style={{flex:1, margin:"20px"}}>  


    <div style={{width:"400px"}} className="flex flex-col items-center bg-slate-50 mt-4 p-6 justify-start w-full mx-12">
        <div className="flex items-center">
          <img src={writer} alt="" className="rounded-full h-44 w-44" />
        </div>

        <h1 className="text-2xl text-center font-bold text-blue-500">
          Charlie Barber
        </h1>
        <h3 className="text-center">Senior Blog Writer</h3>
        <div>
          <h1 className="text-center">Social Media Icons</h1>
        </div>
        <p className="text-center">
          Boot camps have its supporters and its detractors. Some people do not
          understand why you should have to spend money on boot camp when you
          can get. Boot camps have its supporters and its detractors.
        </p>
        <h2 className="bg-orange-500 text-white text-2xl w-full text-center py-2">
          Popular Posts
        </h2>
        <div className="w-full my-2">
          <BlogPostSmallCard />
          <BlogPostSmallCard />
          <BlogPostSmallCard />
          <BlogPostSmallCard />
        </div>
        <img src={banner} alt="" />
      </div>
      <div style={{width:"400px"}} className="flex flex-col bg-slate-50  mb-4 p-6 justify-start w-full mx-12">
        <div className="mx-2 my-4">
          <h1 className="text-xl my-2 font-bold">Post Categories</h1>
          <ul className="flex flex-col justify-start mx-2">
            <li>Technology</li>
            <li>Fashion</li>
            <li>Architechture</li>
            <li>Fashion</li>
            <li>Food</li>
            <li>Lifestyle</li>
            <li>Art</li>
            <li>Adventure</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl my-2 font-bold">Newsletter</h1>
          <p>
            Here, I focus on a range of items and features that we use in life
            without giving them a second thought.
          </p>
        </div>
        <div className="flex">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-l-md w-full"
          />
          <button className="bg-orange-500 text-white hover:bg-orange-600 px-3 rounded-r-md py-2">
            Subscribe
          </button>
        </div>
        <h1>You can unsubscribe any time</h1>
        <h2 className="bg-orange-500 text-white text-2xl w-full text-center py-2">
          Tag Clouds
        </h2>
        <div className="mx-2 my-4">
          <ul className="flex flex-col justify-start mx-2">
            <li>Technology</li>
            <li>Fashion</li>
            <li>Architechture</li>
            <li>Fashion</li>
            <li>Food</li>
            <li>Lifestyle</li>
            <li>Art</li>
            <li>Adventure</li>
          </ul>
        </div>
      </div>     





    
    
    </div>



</div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    width: "120%",
    margin: "auto",
    backgroundColor: "#f4f4f4",
    padding: "50px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  imageContainer: {
    width: "100%",
    height: "400px",
    overflow: "hidden",
    marginBottom: "20px",
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
  content: {
    padding: "20px",
  },
  categories: {
    color: "#999",
    marginBottom: "10px",
    fontStyle: "italic",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  },


  metaData: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    fontSize: "14px",
    color: "#666",
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  text: {
    marginRight: "8px",
    fontWeight: "bold",
  },
  icon: {
    fontSize: "16px",
  },
  social: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
 

 


  views: {
    marginRight: "10px",
  },
  comments: {
    marginRight: "10px",
  },
 




  paragraph: {
    fontSize: "11px",
    lineHeight: "1.6",
    color: "#333",
    marginBottom: "20px",
  },
};

export default BlogDetails;
