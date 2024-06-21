
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav1 from "./plastic/Nav1.jsx";
import News from "./plastic/News.jsx";
import Contact from "./plastic/Contact.jsx";
import Stats from "./plastic/Stats.jsx";
import PlasticSol from "./plastic/PlasticSol.jsx";
import Education from "./Education.jsx";
import Track from "./plastic/Track.jsx";
import Detection from "./plastic/Detection.jsx";
import Form from "./plastic/Form.jsx";
import Head from "./plastic/Head.jsx";
import Hero from "./plastic/Hero.jsx";
import Wave1 from "./plastic/Wave1.jsx";
import Second from "./plastic/Second.jsx";
import ThreeNum1 from "./plastic/ThreeNum1.jsx";
import Four from "./plastic/Four.jsx";
import Email from "./plastic/Email.jsx";
import AccordMatter from "./plastic/AccordMatter.jsx";
import Wave2 from "./plastic/Wave2.jsx";
import Footer from "./plastic/Footer.jsx";
import Chat from "./plastic/Chat.jsx";
import Calculator from "./plastic/Calculator.jsx";
import Log from "./FrontendLogin/Log.jsx"
// import Swiper from "./plastic/Swiper.jsx";
import Slider from "./plastic/Slider.jsx";
import MakeSlide from "./plastic/MakeSilde.jsx";
import Blog from "./FrontendLogin/Blog.jsx"
import CreatePost from "./FrontendLogin/CreatePost.jsx";
import HeaderBlog from "./FrontendLogin/HeaderBlog.jsx";
import ContentPage from "./FrontendLogin/Content.jsx";
import Post from "./FrontendLogin/Post.jsx";
import ReadMore from "./FrontendLogin/ReadMore.jsx";
import DataRead from "./FrontendLogin/DataRead.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/Calculator" element={<ContactPage />} />
        <Route path="/stats" element={<Statistics />} />
        <Route path="/sol" element={<PlasticPage />} />
        <Route path="/Edu" element={<EducationPage />} />
        <Route path="/Track" element={<TrackPage/>}/>
        <Route path="/Detect" element={<Detected />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Contact" element={<EmailPage/>}/>
        <Route path="/FrontendLogin/Log.jsx" element={<LogPage/>}/>
        <Route path="/FrontendLogin/Blog.jsx" element={<BlogPage/>}/>
        <Route path="/FrontendLogin/CreatePost.jsx" element={<CreatePage/>}></Route>
        <Route path="/FrontendLogin/ReadMore/:id" element={<Read/>}></Route>
      </Routes>
      
    </Router>
    
  );
}

function Home() {
  return (
    <>
      <Head></Head>
      <Nav1 />
      <Hero />
      <Wave1 />
      <Second />
      <ThreeNum1 />
      <Four />
      <Slider></Slider>
      <Email />
      <AccordMatter />
      {/* <MakeSlide></MakeSlide> */}
      <Wave2 />
      <Footer />
      <Chat />
    </>
  );
}

function NewsPage() {
  return (
    <>
      <Head></Head>
      <Nav1 />
      <News />
      <Footer />
    </>
  );
}

function ContactPage(){
  return(
    <>
    <Head></Head>
    <Nav1 />
    <Calculator></Calculator>
    <Footer></Footer>
    </>
  )
}
function PlasticPage(){
  return(<>
    <Head></Head>
    <Nav1 />
    <PlasticSol></PlasticSol>
    <Footer></Footer>
  </>)
}

function Statistics(){
  return<>
        <Head></Head>
      <Nav1 />
  <Stats></Stats>
  <Footer></Footer>
  </>
}

function EducationPage(){
  return<>
  <Head></Head>
  <Nav1 />
  <Education></Education>
  <Footer></Footer>
  </>
}
function TrackPage(){
  return(<>
    <Head></Head>
    <Nav1 />
    <Track></Track> <br></br>
    <Footer></Footer>
  </>)
}
function EmailPage(){
  return(<>
    <Head></Head>
    <Nav1 />
    <Contact></Contact>
  </>)
}
function Detected(){
  return (
    <>
    <Head>
    </Head>
    <Nav1></Nav1>
    <Detection></Detection>
    </>
  )
}
function LogPage(){
  return(
    <>
    <Log></Log>
    </>
  )
}
function BlogPage(){
  return(
    <>
      <HeaderBlog/>
      <Blog/>
      <Post/>
      <ContentPage/>
    </>
  )
}
function CreatePage(){
  return (
    <>
      <HeaderBlog/>
      <CreatePost/>
    </>
  )
}
function Read(){
  return (
    <>
      <HeaderBlog/>
      <ReadMore/>
      <DataRead/>
    </>
  )
}




export default App;
