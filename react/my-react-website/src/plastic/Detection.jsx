import React, { useState, useEffect, useRef } from "react";
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';
import Loader from 'react-spinner-loader';
import { IoCloudUploadSharp } from "react-icons/io5";

function Detection() {
    const [isModelLoading, setIsModelLoading] = useState(false);
    const [model, setModel] = useState(null);
    const [imgUrl, setImgUrl] = useState(null);
    const imgRef = useRef();
    const [ans1,setAns1]=useState([]);
    const [loader, setLoader] = useState(true);
    

    async function ans(){
        setIsModelLoading(true);
        try{
            const response=await mobilenet.load()
            setModel(response);
            setIsModelLoading(false);
        }
        catch(e){
            console.log(e);
            setIsModelLoading(false);
        }
    }
    useEffect(()=>{
        ans()
    },[])

    if(isModelLoading){
        return <Loader show = {loader} type = "body" message="Loading Please Wait ..." stack="vertical"/>
    }
    const uploadImg=(e)=>{
        const {files}=e.target;
        if(files.length>0){
            const url=URL.createObjectURL(files[0]);
            setImgUrl(url);
        }
        else{
            setImgUrl(null)
        }
    }

    async function doThis() {

        try {
            const predictions = await model.classify(imgRef.current);
            setAns1(predictions);
            console.log(predictions)
        } catch (error) {
            console.error('Error classifying image:', error);
        }
    }
    
    return(
        <>
        <div className="flex justify-center">
        <div className="w-[800px]">
            <div className="flex justify-center flex-col items-center mt-10 border-dashed border-[#2196f3] border-2 rounded-lg h-[550px]">
                <div className="flex justify-center items-center">
                
                <div className="">
                <div className="flex justify-center items-center flex-col pt-6 pr-5 pl-5"> 
                <div className="flex justify-center items-center flex-col">
                <IoCloudUploadSharp size={50} color="#2196f3"/></div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-lg text-gray-500 pb-5 pt-2">Drag and drop a file</p>
                    <input type="file" accept="image/*" capture="camera" className="b file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-[16px] file:font-semibold
       file:text-white
      file:bg-[#2196f3]" onChange={uploadImg} for="Browse" id="inputFile"/>
      <span className="pt-2"><p className="">* File supported .png, .jpg & .webp</p></span>
                </div>
                </div>
                <div className="pr-3 pt-4 pl-3 pb-4">
                    {
                        imgUrl&&<img src={imgUrl} alt="" crossOrigin="anonymous" ref={imgRef} className="h-72"/>
                    }
                </div>
                
                <div className="flex justify-center">
                    {imgUrl&&<button className="px-4 py-2 rounded-2xl border-2" onClick={doThis}>Detect</button>}
                </div>
                </div>
                <div>
                    {
                        ans1.length>0?
                            ans1.map((item,index)=>{
                                return(
                                    <div key={index}>
                                        <p className="text-xl font-semibold capitalize pl-4 pr-4">{item.className}</p>
                                    </div>
                                )
                            })
                        :null
                    }
                </div>
                </div>
            </div>
            </div>
            </div>
        </>
    )

}
export default Detection