import { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import WatchlistOptions from "./WatchlistOptions.jsx";
export default function WatchListItem({ sell,handlewindow,stock, key }) {
  const [showWatchlistActions, setWatchlistActions] = useState(false);

  function handleMouseEnter() {
    setWatchlistActions(true);
  }
  function handleMouseExit() {
    setWatchlistActions(false);
  }
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="down" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && (
        <WatchlistOptions
          sell={sell}
          handlewindow={ handlewindow}
          name={stock.name}
          price={stock.price}
        />
      )}
    </li>
  );
}
