import React from "react";

function Email(){

    return(
        <>
            <div className="w-full py-20 text-white px-4">
                <div className="max-w-[1240px] mx-auto lg:grid grid-cols-2">
                    <div className="">
                        <h1 className="md:text-3xl tracking-wide sm:text-3xl font-semibold text-2xl">Want tips & tricks to optimize your flow?</h1>
                        <p>Sign up to our newsletter and stay up to date.</p>
                    </div>
                    <div className="my-4">
                        <div className="flex flex-col sm:flex-row items-center justify-between">
                        <form ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="Enter Email" className="flex h-12 pl-4 rounded-lg w-full"/>
                        <button className="text-black border-none bg-[#00df9a] font-medium px-3 py-3 w-[200px] tracking-wide rounded-lg mt-4
                        sm:mt-0 ml-3">Notify Me</button>
                        </form>
                        
                        </div>
                        <p className="pt-4">We care about protection of your data.Read pur <span className="text-[#00df9a] underline underline-offset-2">Privacy Policy</span></p>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Email