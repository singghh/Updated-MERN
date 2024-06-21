import React from "react";
import smile1 from "../assets/man1smile.avif";
import smile2 from "../assets/women1smile.avif";
import smile3 from "../assets/women2smile.jpg";



function Team(){

    return(
        <>
        <div className="pt-4 py-4 md:px-14 px-4">
            <div className="bg-white p-10 rounded-lg flex flex-col gap-6 sm:max-w-[100%] lg:max-w-[71%]">
                
                <div>
                    <h1 className="font-semibold text-3xl tracking-wide pb-5">Team</h1>
                    <p className="pb-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias veritatis dolor at expedita inventore itaque. Illum commodi voluptas soluta labore voluptatem porro quidem nisi quia repudiandae, veniam, sed, amet explicabo.</p>
                </div>
                <div className="flex md:flex-row gap-5 bg-[#e8f4fd] p-4 rounded-lg justify-between items-center flex-col md:gap-10">
                    <div className="flex flex-col">
                        <div className="pb-3">
                        <img src={smile1} alt="Man smile" className="w-30 h-24 rounded-lg"/></div>
                        <div className="text-center">
                        <h1 className="font-semibold tracking-normal">John Smith</h1>
                        <p className="text-[16px] text-gray-600 w-40">Designation here</p>
                        </div>
                    </div>

                    <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iusto minima ipsam laborum animi autem odit nostrum pariatur officia quasi alias dolorum voluptatibus, rerum beatae officiis velit amet totam. Assumenda?</p>
                    </div>
                </div>



                <div className="flex md:flex-row gap-5 bg-[#e8f4fd] p-4 rounded-lg justify-between items-center flex-col md:gap-10">
                    <div className="flex flex-col">
                        <div className="pb-3">
                        <img src={smile2} alt="Man smile" className="w-30 h-24 rounded-lg"/></div>
                        <div className="text-center">
                        <h1 className="font-semibold tracking-normal">John Smith</h1>
                        <p className="text-[16px] text-gray-600 w-40">Designation here</p>
                        </div>
                    </div>

                    <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sapiente, impedit labore ut optio porro dolore et consectetur, assumenda sed libero modi. Animi ipsam iusto quo id esse iste ea.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iusto minima ipsam laborum animi autem odit nostrum pariatur officia quasi alias dolorum voluptatibus, rerum beatae officiis velit amet totam. Assumenda?</p>
                    </div>
                </div>


                <div className="flex md:flex-row gap-5 bg-[#e8f4fd] p-4 rounded-lg justify-between items-center flex-col md:gap-10">
                    <div className="flex flex-col">
                        <div className="pb-3">
                        <img src={smile3} alt="Man smile" className="w-30 h-24 rounded-lg"/></div>
                        <div className="text-center">
                        <h1 className="font-semibold tracking-normal">John Smith</h1>
                        <p className="text-[16px] text-gray-600 w-40">Designation here</p>
                        </div>
                    </div>

                    <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iusto minima ipsam laborum animi autem odit nostrum pariatur officia quasi alias dolorum voluptatibus, rerum beatae officiis velit amet totam. Assumenda?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dignissimos voluptatibus officiis, nihil ab reprehenderit eligendi fugit. Voluptates nulla molestias asperiores delectus placeat pariatur animi assumenda quae, quod error impedit.
                            </p>
                    </div>
                </div>


            </div>
        </div>
        </>
    );

}

export default Team