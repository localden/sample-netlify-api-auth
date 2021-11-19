<!-- Please remove this file from your project -->
<template>
<div>
  <svg id="ghcontrib" width="800" height="800"></svg>
  <p>{{ jsonData }}</p>
</div>
</template>

<script>
const d3 = require("d3");

export default {
  props: {
    jsonData: String,
  },
  methods: {
    getData(jsonContent) {
      var data = JSON.parse(jsonContent);
      console.log("PARSED!");

    // set the dimensions and margins of the graph
    const margin = {top: 30, right: 30, bottom: 70, left: 60},
        width = 800 - margin.left - margin.right,
        height = 800 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3.select("#ghcontrib")
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

      console.log(svg);

      // X axis
      const x = d3.scaleBand()
        .range([ 0, width ])
        .domain(data.map(d => d.date))
        .padding(0.2);

      svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
          .attr("transform", "translate(-10,0)rotate(-45)")
          .style("text-anchor", "end");

      // Add Y axis
      const y = d3.scaleLinear()
        .domain([0, 13000])
        .range([ height, 0]);
      svg.append("g")
        .call(d3.axisLeft(y));

      // Bars
      svg.selectAll("mybar")
        .data(data)
        .join("rect")
          .attr("x", d => x(d.date))
          .attr("y", d => y(d.contributionCount))
          .attr("width", x.bandwidth())
          .attr("height", d => height - y(d.contributionCount))
          .attr("fill", "#69b3a2")

    },
    mounted() {
      this.getData(this.jsonData);
    },
  },
};
</script>

<style>
#bars-style {
  fill: #dd11ef;
}

.axis-label {
  fill: #000;
}
</style>
