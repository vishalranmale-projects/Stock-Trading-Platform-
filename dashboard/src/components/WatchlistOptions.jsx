import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";
import { Tooltip, Grow } from "@mui/material";
export default function WatchListItem({ uid, sell }) {
  return (
    <>
      <span className="actions">
        <span>
          <Tooltip title="buy" placement="top" arrow TransitionComponent={Grow}>
            <button
              className="buy"
              onClick={() => {
                sell(true);
              }}
            >
              Buy
            </button>
          </Tooltip>
          <Tooltip
            title="Sell"
            placement="top"
            arrow
            TransitionComponent={Grow}
          >
            <button className="sell">Sell</button>
          </Tooltip>
          <Tooltip
            title="Analytics (A)"
            placement="top"
            arrow
            TransitionComponent={Grow}
          >
            <button className="action chart">
              <BarChartOutlined className="icon chart" />
            </button>
          </Tooltip>
          <Tooltip
            title="More"
            placement="top"
            arrow
            TransitionComponent={Grow}
          >
            <button className="action mt-5">
              <MoreHoriz className="icon" />
            </button>
          </Tooltip>
        </span>
      </span>
    </>
  );
}
