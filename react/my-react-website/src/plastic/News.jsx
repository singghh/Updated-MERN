import { div } from "@tensorflow/tfjs-core";
import React, { useState, useEffect } from "react";
import ReactLoading from 'react-loading';
import Loader from 'react-spinner-loader';

function News() {
  
  const [money, setMoney] = useState([]);
  const [loading,setLoading]=useState(false);
  const [loader, setLoader] = useState(true);

  let ans=new Date();
  let date=ans.getDate();
  let month=ans.getMonth();
  let years=ans.getFullYear();

  

  async function getData() {
    setLoading(true);
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=(pollution AND air AND waste)&from=${years}-${month}-${date}&sortBy=publishedAt&apiKey=69f76dae5e6f404191e02a5df88c0a32`);
      const data = await response.json();
      if (response.ok) {
        setMoney(data.articles);
        console.log(data.articles);
        setLoading(false)
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if(loading){
    return <Loader show = {loader} type = "body" />
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-6 px-10 pt-20 relative">
        {
          money && money.length > 0 ?
            money.map((dataItems, index) => (
              <div key={index}>
              {/* {dataItems.urlToImage!=null? */}
              
              <div key={index} className="shadow-lg">
                
                <div className="flex flex-col">
                  <div className="text-white font-bold absolute text-2xl z-50 p-3">
                    <h1>NEWS</h1>
                  </div>
                  
                  <img src={dataItems.urlToImage} className="w-[500px]" alt="News" />
                  <div className="pt-2 pl-7">
                  <h1 className="font-semibold text-2xl">{dataItems.author}</h1>
                  <p className="uppercase font-semibold w-96 pt-20 pb-10 text-slate-500">{dataItems.description}</p>
                  </div>
                </div>
                
              </div>
                
              </div>
              
            ))
            : null
        }
      </div>
    </>
  );
}

export default News;
