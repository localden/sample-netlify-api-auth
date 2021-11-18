<!-- Please remove this file from your project -->
<template>
  <div>
    <svg id="gh_contrib" width="800" height="800"></svg>
  </div>
</template>

<script>
const d3 = require('d3');

export default {
  props: {
    jsonData: String,
  },
  methods: {
    getData(jsonContent) {
      var svg = d3.select("#gh_contrib");
      var width = +svg.attr('width');
      var height = +svg.attr('height');
      var data = JSON.parse(jsonContent)
      var x = d3.scaleBand()
        .rangeRound([0, width]).padding(0.1)
        .domain(data.map(d => d.date));
      var y = d3.scaleLinear()
        .rangeRound([height * 0.3 - 20, 0])
        .domain([0, d3.max(data, d => d.contributionCount)])

      function addRectsWithName(elem, name) {
        elem
          .append('text')
          .text(name)
          .attr('x', width / 2)
          .attr('y', 5)
          .attr('text-anchor', 'middle');
        elem.selectAll('rect')
          .data(data)
          .enter()
            .append('rect')
            .attr('x', d => x(d.date))
            .attr('class', d => d.date)
            .attr('y', d =>  y(d.contributionCount))
            .attr('width', x.bandwidth())
            .attr('height', d => y.range()[0] - y(d.contributionCount))
      }

      svg
        .append('g')
        .attr('id', 'bars-style')
        .attr('transform', `translate(0, 20)`)
        .call(addRectsWithName, 'Basic styles');
      }
  },
  mounted() {
    this.getData(this.jsonData);
  },
};
</script>

<style>
#bars-style {
  fill: #dd11ef
}
</style>
