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
      const margin = { top: 30, right: 30, bottom: 70, left: 60 },
        width = 800 - margin.left - margin.right,
        height = 800 - margin.top - margin.bottom;

      // append the svg object to the body of the page
      const svg = d3.select("#ghcontrib");

      var x = d3.scale.ordinal().rangeRoundBands([0, width], 0.05);

      var y = d3.scale.linear().range([height, 0]);

      var xAxis = d3.svg
        .axis()
        .scale(x)
        .orient("bottom")
        .tickFormat(d3.time.format("%Y-%m"));

      var yAxis = d3.svg.axis().scale(y).orient("left").ticks(10);

      x.domain(
        data.map(function (d) {
          return d.date;
        })
      );
      y.domain([
        0,
        d3.max(data, function (d) {
          return d.contributionCount;
        }),
      ]);

      svg
        .append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-90)");

      svg
        .append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Value ($)");

      svg
        .selectAll("bar")
        .data(data)
        .enter()
        .append("rect")
        .style("fill", "steelblue")
        .attr("x", function (d) {
          return x(d.date);
        })
        .attr("width", x.rangeBand())
        .attr("y", function (d) {
          return y(d.contributionCount);
        })
        .attr("height", function (d) {
          return height - y(d.contributionCount);
        });
    },
    mounted() {
      console.log("Mounted!")
      this.getData(this.jsonData);
      console.log(this.jsonData);
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
