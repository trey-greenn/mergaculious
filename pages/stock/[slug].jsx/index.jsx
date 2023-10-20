// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_904e4') && 'TradingView' in window) {
          new window.TradingView.widget({
            autosize: true,
            symbol: "NASDAQ:AAPL",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "light",
            style: "1",
            locale: "en",
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: "tradingview_904e4"
          });
        }
      }
    },
    []
  );

  return (
    <><div>
      <h1 className="bg-black text-white flex justify-center font-bold  p-4">APPLE Inc.</h1>

    </div>
    <div className="grid grid-cols-11 bg-black p-4 gap-4">
        <div className="col-start-2 col-end-6 mt-12 p-6 bg-purple-900 rounded-lg">
        <div className='tradingview-widget-container' style={{ height: "100%", width: "100%" }}>
      <div id='tradingview_c03df' style={{ height: "calc(100% - 32px)", width: "100%" }} />
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">YTD</span></a>
      </div>
    </div>
        </div>
        <div className="col-start-6 col-end-9 mt-12 p-6 bg-purple-900 rounded-lg">
        <div className='tradingview-widget-container' style={{ height: "100%", width: "100%" }}>
      <div id='tradingview_c03df' style={{ height: "calc(100% - 32px)", width: "100%" }} />
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">3 Year</span></a>
      </div>
    </div>
        </div>
        <div className="col-start-9 col-end-12 mt-12 p-6 bg-purple-900 rounded-lg">
        <div className='tradingview-widget-container' style={{ height: "100%", width: "100%" }}>
      <div id='tradingview_c03df' style={{ height: "calc(100% - 32px)", width: "100%" }} />
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">10 Years</span></a>
      </div>
    </div>
        </div>

      </div>
      <div>
          <h2 className="text-white mx-12 pt-12 pb-4">
            Company Financial Ratios
          </h2>
<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>
    <div className="grid grid-cols-7">
  <object className="col-start-2 col-end-7 mt-12" data="/DCF Model_Apple.pdf"  type="application/pdf" width="100%" height="500px"></object>

  </div>

        </div>
      
      
      </>
  );
}
