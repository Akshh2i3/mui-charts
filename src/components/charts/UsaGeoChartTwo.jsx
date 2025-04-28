import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { usaUnemploymentData } from '../../data/mockData';

function Legend({ color, title, width }) {
  const height = 44;
  const marginTop = 18;
  const marginBottom = 16;
  const marginLeft = 0;
  const marginRight = 0;

  const thresholds = color.thresholds 
    ? color.thresholds() 
    : color.quantiles 
    ? color.quantiles() 
    : color.domain();

  const thresholdFormat = (d) => d.toFixed(0) + "%";

  const x = d3.scaleLinear()
    .domain([-1, color.range().length - 1])
    .rangeRound([marginLeft, width - marginRight]);

  const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .style("overflow", "visible")
    .style("display", "block");

  svg.append("g")
    .selectAll("rect")
    .data(color.range())
    .join("rect")
      .attr("x", (d, i) => x(i - 1))
      .attr("y", marginTop)
      .attr("width", (d, i) => x(i) - x(i - 1))
      .attr("height", height - marginTop - marginBottom)
      .attr("fill", d => d);

  svg.append("text")
    .attr("x", marginLeft)
    .attr("y", marginTop / 2)
    .attr("fill", "currentColor")
    .attr("text-anchor", "start")
    .attr("font-weight", "bold")
    .text(title);

  svg.append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x)
      .ticks(width / 80)
      .tickFormat(i => thresholdFormat(thresholds[i]))
      .tickSize(6)
      .tickValues(d3.range(0, thresholds.length)))
    .call(g => g.select(".domain").remove());

  return svg.node();
}

export default function UsaGeoChartTwo () {
  const svgRef = useRef();
  const { usTopoJson, unemployment, namemap } = usaUnemploymentData;

  useEffect(() => {
    if (!usTopoJson || !unemployment || !namemap) return;

    const width = 975;
    const height = 610;

    const color = d3.scaleQuantize([1, 10], d3.schemeBlues[9]);
    const path = d3.geoPath();
    const valuemap = new Map(unemployment.map(d => [namemap.get(d.name), d.rate]));

    const counties = topojson.feature(usTopoJson, usTopoJson.objects.counties);
    const states = topojson.feature(usTopoJson, usTopoJson.objects.states);
    const statemap = new Map(states.features.map(d => [d.id, d]));
    const statemesh = topojson.mesh(usTopoJson, usTopoJson.objects.states, (a, b) => a !== b);

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

    svg.selectAll("*").remove();

    svg.append("g")
      .attr("transform", "translate(610,20)")
      .append(() => Legend(color, {title: "Unemployment rate (%)", width: 260}));

    svg.append("g")
      .selectAll("path")
      .data(states.features)
      .join("path")
        .attr("fill", d => color(valuemap.get(d.id)))
        .attr("d", path)
      .append("title")
        .text(d => `${d.properties.name}\n${valuemap.get(d.id)}%`);

    svg.append("path")
      .datum(statemesh)
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-linejoin", "round")
      .attr("d", path);

  }, [usTopoJson, unemployment, namemap]);

  return <svg ref={svgRef} />;
};
