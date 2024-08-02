import React from "react";

function Info() {
    return (
        <div>
            <main className="bg-white block">
                <section className="mb-16 bg-white">
                    <div className="mx-4 block">
                        <div className="mb-6">
                            <h2 className="text-3xl lg:text-4xl leading-tight text-center uppercase text-green-700 mb-2 font-bold">
                                Why reduce your CO<sub>2</sub> footprint?
                            </h2>
                            <p className="mt-3 mb-16 text-base text-center leading-relaxed">
                                Elevated levels of CO<sub>2</sub> in the atmosphere can have a wide range of effects on the environment, climate, and living organisms.
                            </p>

                            <div className="flex flex-wrap justify-center">

                                <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                                    <div className="text-center p-4 bg-[#F1EBDA] rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                                        <img  
                                            src="https://images.pexels.com/photos/60013/desert-drought-dehydrated-clay-soil-60013.jpeg?auto=compress&cs=tinysrgb&w=600"
                                            alt="Climate-Change"
                                            className="rounded-md w-full h-64 object-cover mx-auto mb-4"
                                        />
                                        <h3 className="text-lg lg:text-xl mb-4 leading-tight font-semibold text-gray-800">Climate Change</h3>
                                        <p className="mb-1 leading-relaxed text-center text-sm text-gray-600">Elevated CO<sub>2</sub> levels trap heat in the atmosphere, leading to an increase in global temperatures. Higher temperatures can lead to more intense and frequent extreme weather events, such as hurricanes, droughts, heatwaves, and heavy rainfall.</p>
                                    </div>
                                </div>

                                <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                                    <div className="text-center p-4 bg-cyan-100 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                                        <img  
                                            src="https://images.unsplash.com/photo-1464925257126-6450e871c667?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG9jZWFuJTIwYWNpZGlmaWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                                            alt="Ocean Acidification"
                                            className="rounded-md w-full h-64 object-cover mx-auto mb-4"
                                        />
                                        <h3 className="text-lg lg:text-xl mb-4 leading-tight font-semibold text-gray-800">Ocean Acidification</h3>
                                        <p className="mb-1 leading-relaxed text-center text-sm text-gray-600">Increased CO<sub>2</sub> is absorbed by the oceans, forming carbonic acid and lowering the pH levels of seawater. It can harm marine organisms, especially those with calcium carbonate shells or skeletons, such as corals, mollusks, and some plankton species.</p>
                                    </div>
                                </div>

                                <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                                    <div className="text-center p-4 bg-emerald-100 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                                        <img  
                                            src="https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=600"
                                            alt="Agricultural Impact"
                                            className="rounded-md w-full h-64 object-cover mx-auto mb-4"
                                        />
                                        <h3 className="text-lg lg:text-xl mb-4 leading-tight font-semibold text-gray-800">Agricultural Impact</h3>
                                        <p className="mb-1 leading-relaxed text-center text-sm text-gray-600">While some plants may benefit from higher CO<sub>2</sub> levels (enhanced photosynthesis), others may suffer from increased heat, drought, and changes in pest populations. It can lead to lower levels of essential nutrients like protein, iron, and zinc.</p>                                
                                    </div>
                                </div>

                                <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                                    <div className="text-center p-4 bg-gray-200 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                                        <img  
                                            src="https://cdn.pixabay.com/photo/2024/07/16/02/43/medicine-8898174_640.jpg"
                                            alt="Human Health"
                                            className="rounded-md w-full h-64 object-cover mx-auto mb-4"
                                        />
                                        <h3 className="text-lg lg:text-xl mb-4 leading-tight font-semibold text-gray-800">Human Health</h3>
                                        <p className="mb-1 leading-relaxed text-center text-sm text-gray-600">Increased temperatures can lead to more cases of heat exhaustion and heatstroke. It can exacerbate air pollution, leading to respiratory problems such as asthma and bronchitis. Also it can expand the range of vector-borne diseases such as malaria and Lyme disease.</p>                                                               
                                    </div>
                                </div>
                        
                                <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                                    <div className="text-center p-4 bg-amber-100 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                                        <img  
                                            src="https://t3.ftcdn.net/jpg/07/45/29/66/240_F_745296603_fZbgQxBqloVubQa2nbdMggrBVgvtc4hw.jpg"
                                            alt="Ecosystem Disruption"
                                            className="rounded-md w-full h-64 object-cover mx-auto mb-4"
                                        />
                                        <h3 className="text-lg lg:text-xl mb-4 leading-tight font-semibold text-gray-800">Ecosystem Disruption</h3>
                                        <p className="mb-1 leading-relaxed text-center text-sm text-gray-600">Changes in temperature and precipitation patterns can alter habitats, making them unsuitable for some species and leading to shifts in biodiversity. Rapid environmental changes can outpace the ability of many species to adapt, increasing the risk of extinction.</p>                                                                                              
                                    </div>
                                </div>

                                <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                                    <div className="text-center p-4 bg-indigo-100 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                                        <img  
                                            src="https://media.istockphoto.com/id/1218810022/vector/businesswoman-with-umbrella-protecting-money-from-corona-virus-attack-business-financial.jpg?s=612x612&w=0&k=20&c=QocBOf6vNkJs19dWYa1600QRLL7a0jQZdsQPNewvd_Y="
                                            alt="Economic Impact"
                                            className="rounded-md w-full h-64 object-cover mx-auto mb-4"
                                        />
                                        <h3 className="text-lg lg:text-xl mb-4 leading-tight font-semibold text-gray-800">Economic Impact</h3>
                                        <p className="mb-1 leading-relaxed text-center text-sm text-gray-600">Extreme weather events and rising sea levels can cause significant damage to infrastructure, homes, and businesses. Climate-related events can disrupt supply chains, agricultural production, and overall economic stability.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Info
