// USA Geo Chart using react-google-charts
import { Container, Box, Typography } from "@mui/material";
import React from "react";
import { usMapData } from "../../data/mockData";
import Chart from "react-google-charts";

export default function UsaGeoChartOne() {
  return (
    <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2 }}>
      <Typography variant="h6">React-Google-Charts</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Chart
          chartEvents={[
            {
              eventName: "select",
              callback: ({ chartWrapper }) => {
                const chart = chartWrapper.getChart();
                const selection = chart.getSelection();
                if (selection.length === 0) return;
                const selectedState = usMapData[selection[0].row + 1];
                console.log(selectedState);
              },
            },
          ]}
          chartType="GeoChart"
          width="100%"
          height="500px"
          data={usMapData}

          options={{
            region: "US",
            resolution: "provinces",
            colorAxis: { colors: ["#aec6cf", "#045a8d"] },
          }}
        />
      </Box>
    </Box>
  );
}
