import React from 'react'

const index = () => {
  return (
    <>
    <div className="flex justify-center">
        <div className="bg-gray-200 rounded-lg w-5/6">
            <div className="grid grid-cols-3 grid-flow-row gap-2">
                
                    <div className="col-start-1 rounded-lg bg-black text-white m-2 p-2">30 Yr. Treasury Note:</div>
                    <div className="col-start-2 rounded-lg bg-black text-white m-2 p-2">10 Yr. Treasury Note: </div>
                    <div className="col-start-3 rounded-lg bg-black text-white m-2 p-2">1 Yr. Treasury Note: </div>
                    <div className="col-start-1 rounded-lg bg-black text-white m-2 p-2">10 Yr. SPY:</div>
                    <div className="col-start-2 rounded-lg bg-black text-white m-2 p-2">3 Yr. SPY: </div>
                    <div className="col-start-3 rounded-lg bg-black text-white m-2 p-2">SPY YTD: </div>
                    <div className="col-start-1 rounded-lg bg-black text-white m-2 p-2">10 Yr. QQQ:</div>
                    <div className="col-start-2 rounded-lg bg-black text-white m-2 p-2">3 Yr. QQQ: </div>
                    <div className="col-start-3 rounded-lg bg-black text-white m-2 p-2">QQQ YTD: </div>
                    <div className="col-start-1 rounded-lg bg-black text-white m-2 p-2">10 Yr. BTC:</div>
                    <div className="col-start-2 rounded-lg bg-black text-white m-2 p-2">3 Yr. BTC: </div>
                    <div className="col-start-3 rounded-lg bg-black text-white m-2 p-2">BTC YTD: </div>
                    <div className="col-start-1 rounded-lg bg-black text-white m-2 p-2">10 Yr. CPI:</div>
                    <div className="col-start-2 rounded-lg bg-black text-white m-2 p-2">3 Yr. CPI: </div>
                    <div className="col-start-3 rounded-lg bg-black text-white m-2 p-2">CPI YTD: </div>
                    <div className="col-start-1 rounded-lg bg-black text-white m-2 p-2">10 Yr. GDP:</div>
                    <div className="col-start-2 rounded-lg bg-black text-white m-2 p-2">3 Yr. GDP: </div>
                    <div className="col-start-3 rounded-lg bg-black text-white m-2 p-2">GDP YTD: </div>
                    <div className="col-start-1 rounded-lg bg-black text-white m-2 p-2">10 Yr. UR:</div>
                    <div className="col-start-2 rounded-lg bg-black text-white m-2 p-2">3 Yr. UR: </div>
                    <div className="col-start-3 rounded-lg bg-black text-white m-2 p-2">UR YTD: </div>
                    <div className="col-start-1 rounded-lg bg-black text-white m-2 p-2">10 Yr. CP:</div>
                    <div className="col-start-2 rounded-lg bg-black text-white m-2 p-2">3 Yr. CP: </div>
                    <div className="col-start-3 rounded-lg bg-black text-white m-2 p-2">CP YTD: </div>

                

            </div>
            
        </div>
    </div>
<div className="flex justify-center">
    <div className="w-5/6">
            <div className="grid grid-cols-4 gap-2 mt-2">
            <div className="grid grid-flow-row col-start-1 col-end-2 bg-gray-200 rounded-lg">
                <h2 className="text-center text-purple-600 font-bold">Sector - YTD</h2>
                <div className="grid grid-cols-2">
                    <p className="font-bold text-black ml-2">Technology: </p>
                    <p className="font-bold text-green-600">43.79%</p>
                </div>
                <div className="grid grid-cols-2">
                    <p className="font-bold text-black ml-2">Communication Services: </p>
                    <p className="font-bold text-green-600">33.58%</p>
                </div>
                <div className="grid grid-cols-2">
                    <p className="font-bold text-black ml-2">Consumer Cyclical: </p>
                    <p className="font-bold text-green-600">16.25%</p>
                </div>
                <div className="grid grid-cols-2">
                    <p className="font-bold text-black ml-2">Inudstrials: </p>
                    <p className="font-bold text-green-600">7.29%</p>
                </div>
                <div className="grid grid-cols-2">
                    <p className="font-bold text-black ml-2">Financials: </p>
                    <p className="font-bold text-green-600">5.27%</p>
                </div>
                <div className="grid grid-cols-2">
                    <p className="font-bold text-black ml-2">Basic Materials: </p>
                    <p className="font-bold text-green-600">2.08%</p>
                </div>
                <div className="grid grid-cols-2">
                    <p className="font-bold text-black ml-2">Healthcare: </p>
                    <p className="font-bold text-red-600">1.3%</p>
                </div>
                <div className="grid grid-cols-2">
                    <p className="font-bold text-black ml-2">Energy: </p>
                    <p className="font-bold text-red-600">2.48%</p>
                </div>
                <div className="grid grid-cols-2">
                    <p className="font-bold text-black ml-2">Consumer Defensive: </p>
                    <p className="font-bold text-red-600">4.24%</p>
                </div>
                <div className="grid grid-cols-2">
                    <p className="font-bold text-black ml-2">Real Estate: </p>
                    <p className="font-bold text-red-600">7.59%</p>
                </div>
                <div className="grid grid-cols-2">
                    <p className="font-bold text-black ml-2">Utilities: </p>
                    <p className="font-bold text-red-600">9.64%%</p>
                </div>
            </div>
            <div className="col-start-2 col-end-5 bg-gray-200 rounded-lg ">
                <h2 className="text-center">News</h2>
                <div className="border-solid border-purple-600 border-y-2 my-2">
                    <h3 className="text-black p-2 font-bold">FRED ADDS NEW PERSONAL CONSUMPTION EXPENDITURES(PCE) PRICE INDEX DATA</h3>
                    <p className="text-black p-2">FRED has added 42 data series with new features of the personal consumption expenditures (PCE) price index. On September 28, 2023, the US Bureau of Economic Analysis started reporting two new PCE price indexes: one excluding the energy and housing 
                    <span className="font-bold on-hover text-purple-600"> Continue Reading...</span>
                    </p>
                </div>
                <div className="border-solid border-purple-600 border-b-2 my-2">
                    <h3 className="text-black p-2 font-bold">FRED ADDS NEW PERSONAL CONSUMPTION EXPENDITURES(PCE) PRICE INDEX DATA</h3>
                    <p className="text-black p-2">FRED has added 42 data series with new features of the personal consumption expenditures (PCE) price index. On September 28, 2023, the US Bureau of Economic Analysis started reporting two new PCE price indexes: one excluding the energy and housing 
                    <span className="font-bold on-hover text-purple-600"> Continue Reading...</span>
                    </p>
                </div>
            </div>
        </div>
        </div>
        </div>
        <div className="flex justify-center">

        <div className="w-5/6 bg-gray-200 mt-2 rounded-lg">
            <h2 className="text-center font-bold text-purple-600 py-2">Upcoming Economic Events</h2>
            <div className="grid grid-cols-7 text-center">
                <div className="border-r-2 border-purple-600 text-black">
                   <h3 className=" font-bold border-b-2 border-purple-600"> October 17. 2023 </h3> 
                   <h4>Quartely Retail E-Commerce Sales</h4>
                   <h4>Quartely Bank Funding Rate</h4>
                   <h4>Labor Force Participation by State</h4>

                </div>
                <div className="border-r-2 border-purple-600 text-black">
                   <h3 className=" font-bold border-b-2 border-purple-600"> October 17. 2023 </h3> 
                   <h4>Quartely Retail E-Commerce Sales</h4>
                   <h4>Quartely Bank Funding Rate</h4>
                   <h4>Labor Force Participation by State</h4>

                </div>
                <div className="border-r-2 border-purple-600 text-black">
                   <h3 className=" font-bold border-b-2 border-purple-600"> October 17. 2023 </h3> 
                   <h4>Quartely Retail E-Commerce Sales</h4>
                   <h4>Quartely Bank Funding Rate</h4>
                   <h4>Labor Force Participation by State</h4>

                </div>
                <div className="border-r-2 border-purple-600 text-black">
                   <h3 className=" font-bold border-b-2 border-purple-600"> October 17. 2023 </h3> 
                   <h4>Quartely Retail E-Commerce Sales</h4>
                   <h4>Quartely Bank Funding Rate</h4>
                   <h4>Labor Force Participation by State</h4>

                </div>
                <div className="border-r-2 border-purple-600 text-black">
                   <h3 className=" font-bold border-b-2 border-purple-600"> October 17. 2023 </h3> 
                   <h4>Quartely Retail E-Commerce Sales</h4>
                   <h4>Quartely Bank Funding Rate</h4>
                   <h4>Labor Force Participation by State</h4>

                </div>
                <div className="border-r-2 border-purple-600 text-black">
                   <h3 className=" font-bold border-b-2 border-purple-600"> October 17. 2023 </h3> 
                   <h4>Quartely Retail E-Commerce Sales</h4>
                   <h4>Quartely Bank Funding Rate</h4>
                   <h4>Labor Force Participation by State</h4>

                </div>
                <div className=" border-purple-600 text-black ">
                   <h3 className=" font-bold border-b-2 border-purple-600"> October 17. 2023 </h3> 
                   <h4>Quartely Retail E-Commerce Sales</h4>
                   <h4>Quartely Bank Funding Rate</h4>
                   <h4>Labor Force Participation by State</h4>

                </div>


            </div>

        </div>
        </div>
        <div className="flex justify-center">
        <div className="w-5/6 bg-gray-200 mt-2 rounded-lg">
            <h2 className="text-center"> Explore Data</h2>
            <div className="grid grid-cols-3 grid-flow-row">
            <div className="m-2 w-fit rounded-lg p-0.5 ">
                <div className="mb-1 bg-purple-900 rounded-lg">
                <h2 className="text-black font-bold text-lg text-center">Producer Price Index</h2>
                </div>
                <div className="bg-black rounded-lg">
                <img className="items-center " src="/DSFT.png" alt="DSFT image" width="175"></img>
                <div className="rounded-lg text-center bg-black">
                    <h3 className="border-b p-1">Transportation & Warehousing</h3>
                    <h3 className="border-b p-1">Manufacturing</h3>
                    <h3 className="border-b p-1">Utilities</h3>
                    <h3 className="border-b p-1">Information</h3>
                    <h3 className="border-b p-1">Educational Services</h3>
                </div>
                </div>
            </div>
            <div className="m-2 w-fit rounded-lg p-0.5 ">
                <div className="mb-1 bg-purple-900 rounded-lg">
                <h2 className="text-black font-bold text-lg text-center">Consumer Price Indexes</h2>
                </div>
                <div className="bg-black ">
                <img className="items-center " src="/DSFT.png" alt="DSFT image" width="175"></img>
                <div className="rounded-lg text-center bg-black">
                <h3 className="border-b p-1">Transportation & Warehousing</h3>
                    <h3 className="border-b p-1">Manufacturing</h3>
                    <h3 className="border-b p-1">Utilities</h3>
                    <h3 className="border-b p-1">Information</h3>
                    <h3 className="border-b p-1">Educational Services</h3>
                </div>
                </div>
            </div>
            <div className="m-2 w-fit rounded-lg p-0.5 ">
                <div className="mb-1 bg-purple-900 rounded-lg">
                <h2 className="text-black font-bold text-lg text-center">Cryptocurrencies</h2>
                </div>
                <div className="bg-black ">
                <img className="items-center " src="/DSFT.png" alt="DSFT image" width="175"></img>
                <div className="rounded-lg text-center bg-black">
                <h3 className="border-b p-1">Transportation & Warehousing</h3>
                    <h3 className="border-b p-1">Manufacturing</h3>
                    <h3 className="border-b p-1">Utilities</h3>
                    <h3 className="border-b p-1">Information</h3>
                    <h3 className="border-b p-1">Educational Services</h3>
                </div>
                </div>
            </div>
            <div className="m-2 w-fit rounded-lg p-0.5 ">
                <div className="mb-1 bg-purple-900 rounded-lg">
                <h2 className="text-black font-bold text-lg text-center">Stock Market Indexes</h2>
                </div>
                <div className="bg-black ">
                <img className="items-center " src="/DSFT.png" alt="DSFT image" width="175"></img>
                <div className="rounded-lg text-center bg-black">
                <h3 className="border-b p-1">Transportation & Warehousing</h3>
                    <h3 className="border-b p-1">Manufacturing</h3>
                    <h3 className="border-b p-1">Utilities</h3>
                    <h3 className="border-b p-1">Information</h3>
                    <h3 className="border-b p-1">Educational Services</h3>
                </div>
                </div>
            </div>
            <div className="m-2 w-fit rounded-lg p-0.5 ">
                <div className="mb-1 bg-purple-900 rounded-lg">
                <h2 className="text-black font-bold text-lg text-center">Interest Rates</h2>
                </div>
                <div className="bg-black ">
                <img className="items-center " src="/DSFT.png" alt="DSFT image" width="175"></img>
                <div className="rounded-lg text-center bg-black">
                <h3 className="border-b p-1">Transportation & Warehousing</h3>
                    <h3 className="border-b p-1">Manufacturing</h3>
                    <h3 className="border-b p-1">Utilities</h3>
                    <h3 className="border-b p-1">Information</h3>
                    <h3 className="border-b p-1">Educational Services</h3>
                </div>
                </div>
            </div>
            <div className="m-2 w-fit rounded-lg p-0.5 ">
                <div className="mb-1 bg-purple-900 rounded-lg">
                <h2 className="text-black font-bold text-lg text-center">Interest Rates</h2>
                </div>
                <div className="bg-black ">
                <img className="items-center " src="/DSFT.png" alt="DSFT image" width="175"></img>
                <div className="rounded-lg text-center bg-black">
                <h3 className="border-b p-1">Transportation & Warehousing</h3>
                    <h3 className="border-b p-1">Manufacturing</h3>
                    <h3 className="border-b p-1">Utilities</h3>
                    <h3 className="border-b p-1">Information</h3>
                    <h3 className="border-b p-1">Educational Services</h3>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        
</>
  )
}

export default index
