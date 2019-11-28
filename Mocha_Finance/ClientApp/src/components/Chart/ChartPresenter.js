import React from "react";
import { ChartCanvas, Chart } from "react-stockcharts";
import { AreaSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import {
  createVerticalLinearGradient,
  hexToRGBA
} from "react-stockcharts/lib/utils";
import { max, min } from "d3-array";
import { scaleTime } from "d3-scale";
import { curveMonotoneX } from "d3-shape";
import style from "./chart.module.scss";

const WIDTH = 800;
const HEIGHT = 400;

const canvasGradient = createVerticalLinearGradient([
  { stop: 0, color: hexToRGBA("#b5d0ff", 0.2) },
  { stop: 0.7, color: hexToRGBA("#6fa4fc", 0.4) },
  { stop: 1, color: hexToRGBA("#4286f4", 0.8) }
]);

const ChartPresenter = ({ data, handleDateRange }) => {
  const dateMin = min(data, d => d.date);
  const dateMax = max(data, d => d.date);
  return (
    <div>
      {data.length === 0 ? (
        <p>Loading the chart...</p>
      ) : (
        <>
          <div className={style.btns}>
            <button
              name="5y"
              className={style.BtnDate}
              onClick={handleDateRange}
            >
              5Y
            </button>
            <button
              name="1y"
              className={style.BtnDate}
              onClick={handleDateRange}
            >
              1Y
            </button>
            <button
              name="6m"
              className={style.BtnDate}
              onClick={handleDateRange}
            >
              6M
            </button>
          </div>
          <ChartCanvas
            ratio={0}
            margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
            seriesName="MSFT"
            width={WIDTH}
            height={HEIGHT}
            data={data}
            type="svg"
            xAccessor={data => data.date}
            xScale={scaleTime()}
            xExtents={[dateMin, dateMax]}
            mouseMoveEvent={true}
            zoomEvent={true}
            clamp={true}
          >
            <Chart id={0} yExtents={d => d.close}>
              <defs>
                <linearGradient id="MyGradient" x1="0" y1="100%" x2="0" y2="0%">
                  <stop offset="0%" stopColor="red" stopOpacity={0.2} />
                  <stop offset="70%" stopColor="#20bf6b" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#4b6584" stopOpacity={0.8} />
                </linearGradient>
              </defs>
              <XAxis axisAt="bottom" orient="bottom" ticks={6} />
              <YAxis axisAt="left" orient="left" />
              <AreaSeries
                yAccessor={d => d.close}
                fill="url(#MyGradient)"
                strokeWidth={2}
                interpolation={curveMonotoneX}
                canvasGradient={canvasGradient}
              />
            </Chart>
          </ChartCanvas>
        </>
      )}
    </div>
  );
};

export default ChartPresenter;
