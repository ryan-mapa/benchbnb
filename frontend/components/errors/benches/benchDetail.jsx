import React from 'react';

const BenchDetail = ({bench}) => {

  const seatCount = Number(bench.seats);
  let seats = [];
  for (let i = 0; i < seatCount; i++) {
    seats.push(<img key={`${i}`} src="/assets/person.png" />)
  }

  return (
    <ul className="bench-detail">
      <li className="material-container" >Material: {bench.material}</li>
      <li className="seat-container">
        Can seat up to:
        <span className="seat-icon-container">{seats}</span>
      </li>
      <div className="hover-icon-container">
        <li className={bench.shaded ? "detail-icon tooltip" : "unavailable tooltip"}>
          <img src="/assets/shade.png" />
          <span className="tooltip-text">Shade</span>
        </li>
        <li className={bench.scenic ? "detail-icon tooltip" : "unavailable tooltip"}>
          <img src="/assets/scenic.png" />
          <span className="tooltip-text">Scenic View</span>
        </li>
        <li className={bench.wifi ? "detail-icon tooltip" : "unavailable tooltip"}>
          <img src="/assets/wifi.png" />
          <span className="tooltip-text">Wifi</span>
        </li>
        <li className={bench.layable ? "detail-icon tooltip" : "unavailable tooltip"}>
          <img src="/assets/lying-down.png" />
          <span className="tooltip-text">Layable</span>
        </li>
      </div>
      <li className="credits">
        <div>Icons made by <a href="https://www.flaticon.local/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.local/" title="Flaticon">www.flaticon.local</a></div>
      </li>
    </ul>
  )
}

export default BenchDetail;