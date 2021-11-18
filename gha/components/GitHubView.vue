<!-- Please remove this file from your project -->
<template>
  <svg width="500" height="300"></svg>
</template>

<script lang="ts">
import * as d3 from "d3"

export default {
  props: {
    jsonData: String,
  },
  mounted() {
    this.methods.getData(this.props.jsonData(), this.$el);
  },
  methods: {
    getData(jsonContent : string, element : any) {
      var svg = d3.select(this.$el);
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
            // We add attr here
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
      // vue loader will substitute data attribute for styles
      var STYLE_MODULE_NAME = this.$el.attributes[0].name;
      svg
        .append('g')
        .attr('transform', `translate(0, ${height * 0.3 + 20})`)
        .call(addRectsWithName, 'Scoped styles')
        .selectAll('rect')
        .attr(STYLE_MODULE_NAME, '')
      svg
        .append('g')
        .attr('id', 'bars-style-sass')
        .attr('transform', `translate(0, ${height * 0.6 + 20})`)
        .call(addRectsWithName, 'Sass styles');
      }
  }
};
</script>
