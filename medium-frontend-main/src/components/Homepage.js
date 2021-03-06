import Header from "./Header";
import HeroComponent from "./Hero_component";
import img from './images/home_page_header_img.png';

import React,{useState,useEffect} from 'react';
import Auth from './Auth';

function Homepage() {
  const [auth, setAuth] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);

  console.log(offset);

  return (
    <>
      {auth ? (
        <Auth setAuth={setAuth}/>
      ) : (
        <>
            <Header color={offset < 400 ? "#C4E2FF" : null} setAuth={setAuth}/>
            <HeroComponent 
            color="#C4E2FF" 
            title="Medium is a place to write, read, and connect"
            subTitle="It's easy and free to post your thinking on any topic and connect with millions of readers."
            image={img}
            />
            <div>
              Homepage Content
            </div>
            <div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div>
            <div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div><div>
              Homepage Content
            </div>
        </>
      )}
      
    </>
  )
}

export default Homepage;
