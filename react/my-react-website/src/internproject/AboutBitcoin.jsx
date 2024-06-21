import React from "react";
import stock1 from "../assets/stock1.avif";
import stock2 from "../assets/stock2.avif";
import { FaArrowRight } from "react-icons/fa6";
import HeroNewSubComponent from "./HeroNewSubComponent";

function AboutBitcoin(){

    return(
        <>
        <div className="pt-4 py-4 md:px-14 px-4">
            <div className="sm:max-w-[100%] lg:max-w-[71%]">
                <div className="bg-white px-8 py-8 rounded-lg">
                        <h1 className="text-3xl font-semibold pt-6 pb-6 ">About Bitcoin</h1>
                    <div className="md:border-b-2">
                            <h2 className="font-semibold text-xl pb-2 ">What is Bitcoin?</h2>
                            <p className="bordser-b-2 pb-3 leading-7">Bitcoin is a payment system that uses virtual currency instead of fiat or physical currency. It's created, distributed, traded, and stored using a decentralized ledger system called a blockchain. The blockchain is a shared database that stores data secured by encryption methods. Bitcoin is open-source, meaning its design is public, nobody owns or controls Bitcoin, and everyone can take part.</p>
                    </div>
                    <div>
                        <h1 className="font-semibold text-xl pb-2 pt-3">Lorem ipsum dolor sit</h1>
                        <p className="leading-7 pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime animi dolore saepe vero quam soluta quisquam repellat reiciendis, voluptatem quidem cumque unde tenetur magnam possimus modi sit rerum. Ipsum, totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quibusdam mollitia odit vero repellat dolores debitis cum tempore exercitationem voluptatum in, quam inventore! In, laboriosam. Sapiente veniam fugiat quod animi!</p>
                    </div>
                    <div>
                        <p className="leading-7 pb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident error, asperiores aliquam tempora praesentium debitis delectus. In reiciendis accusantium nisi quam! Debitis voluptatum sunt, sit odit incidunt consequuntur a reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse culpa dolore quos iure aliquam nemo neque explicabo nobis tenetur. Reiciendis doloremque voluptate ea optio accusantium debitis vero provident minima ipsum?</p>
                    </div>
                    <div className="pb-5 md:border-b-2 leading-7">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, ullam. Explicabo autem molestiae nisi, perferendis eum, dolores odit debitis natus id consequuntur rerum sed inventore quos sapiente atque, nulla repellat.
                    </div>
                    <div className="">
                        <h1 className="font-semibold text-2xl pt-4 pb-4">Already Holding Bitcoin?</h1>
                        <div className="flex md:border-b-2 pb-4 gap-7 flex-wrap">
                            <div className="profit p-3 rounded-md w-[400px]">
                                <div className="flex gap-4 sm:gap-6 items-center">
                                    <img src={stock1} alt="Stock 1" className="w-20 h-22 rounded-lg sm:w-28"/>
                                    <div className="flex flex-col gap-5">
                                    <h1 className="text-white font-semibold text-[16px]
                                    sm:text-[18px] tracking-wide sm:w-40 w-36">Calculate your Profits</h1>
                                    
                                    <div className="bg-white flex items-center px-1 sm:px-4 py-2 rounded-lg gap-1 justify-around">
                                            <button className="text-black font-semibold text-[14px] sm:text-[16px]">Check Now</button>
                                            <div>
                                            <FaArrowRight size={20} color="black"/></div>
                                    </div>
                                    

                                    </div>
                                </div>
                            </div>
                            <div className="profit2 p-3 rounded-md w-[400px]">
                                <div className="flex gap-6 items-center">
                                    <img src={stock2} alt="Stock 2" className="w-20 h-22 rounded-lg sm:w-28"/>
                                    <div className="flex flex-col gap-5">
                                    <h1 className="text-white font-semibold text-[16px]
                                    sm:text-[18px] tracking-wide sm:w-40 w-36">Calculate your liability</h1>
                                    <div className="bg-white flex items-center px-1 sm:px-4 py-2 rounded-lg gap-1 justify-around">
                                            <button className="text-black font-semibold text-[14px] sm:text-[16px]">Check Now</button>
                                            <FaArrowRight size={20} color="black"/>
                                    </div>
                                    
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="pt-3">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit corporis consequuntur veritatis ea harum, maxime illum libero, officia magnam quasi eaque deserunt, repellat consequatur exercitationem. Vero dolore quos similique assumenda.</p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
        </>
    )

}
export default AboutBitcoin