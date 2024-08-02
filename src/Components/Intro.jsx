import React from 'react'
import './earth.css'

function Intro() {
    return (
        <div>
            <section 
            className=" earth bg-center bg-no-repeat bg-cover w-full text-white mb-7">
                <div className="flex flex-col lg:flex-row mx-auto text-white">
                    <div className="px-6 lg:px-[10%] py-20 lg:py-40 text-center flex lg:justify-center">
                        <h2 className="text-3xl lg:text-4xl text-green-600 leading-tight lg:leading-tight max-w-[400px] mx-auto lg:mx-0 shadow-lg font-bold">
                            SUSTAINIFY<br />
                            <span className="text-lg lg:text-xl text-white">Your Carbon Footprint Companion</span>
                        </h2>
                    </div>
                    <div className="bg-[rgba(0,0,0,0.5)] p-6 lg:p-8 flex flex-col justify-center items-center h-auto lg:h-[400px] mx-auto my-10 lg:my-20">
                        <div className="text-center">
                            <h3 className="text-2xl lg:text-3xl leading-tight lg:leading-tight font-semibold">
                                Reduce Your Emissions
                            </h3>
                            <div className="mx-auto lg:mx-0">
                                <p className="mb-6 text-white leading-6 my-4">
                                    In our modern world, every action we take has an impact on the environment. Whether it’s driving to work, heating our homes, or even the food we eat, our daily choices contribute to our carbon footprint – the total amount of greenhouse gases we produce.
                                </p>
                                <p className="mb-6 text-white leading-6 my-4">
                                    Understanding and managing your carbon footprint is the first step towards a more sustainable future.
                                </p>
                                <p className="text-white leading-6 my-4">
                                    When you neutralize your footprint, you will protect forests around the world — a critical step in our fight against climate change.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Intro
