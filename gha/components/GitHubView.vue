<!-- Please remove this file from your project -->
<template>
  <div>
    <p>Visualization</p>
    <div id="gh_contributions"></div>
    <p>{{ jsonData }}</p>
  </div>
</template>

<script lang="ts">
import * as d3 from "d3"

export default {
  props: {
    jsonData: String,
  },
  mounted() {
    this.methods.getData(this.props.jsonData());
  },
  methods: {
    getData(jsonContent : string) {
      var margin = {top: 30, right: 30, bottom: 70, left: 60},
          width = 460 - margin.left - margin.right,
          height = 400 - margin.top - margin.bottom;

      // append the svg object to the body of the page
      var svg = d3.select("#gh_contributions")
        .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");
                
      d3.json(jsonContent)
        .then((data) => {
          console.log(data)
          // data.forEach(function(d) {                              
          //     d.date = d.date;                         
          //     d.contributionCount = +d.contributionCount;                                 
          // });

          // // X axis
          // var x = d3.scaleBand()
          //   .range([ 0, width ])
          //   .domain(data.map(function(d) { return d.date; }))
          //   .padding(0.2);
          // svg.append("g")
          //   .attr("transform", "translate(0," + height + ")")
          //   .call(d3.axisBottom(x))
          //   .selectAll("text")
          //     .attr("transform", "translate(-10,0)rotate(-45)")
          //     .style("text-anchor", "end");

          // // Add Y axis
          // var y = d3.scaleLinear()
          //   .domain([0, 13000])
          //   .range([ height, 0]);
          // svg.append("g")
          //   .call(d3.axisLeft(y));

          // // Bars
          // svg.selectAll("mybar")
          //   .data(data)
          //   .enter()
          //   .append("rect")
          //     .attr("x", function(d) { return x(d.date); })
          //     .attr("y", function(d) { return y(d.contributionCount); })
          //     .attr("width", x.bandwidth())
          //     .attr("height", function(d) { return height - y(d.contributionCount); })
          //     .attr("fill", "#69b3a2")
          //     })
        .catch((err) => {
            // Handle err
        });
    }
  }
};
</script>
