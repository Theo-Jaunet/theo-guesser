const simW = [-6.5, 7]
const simH = [-2.3, 6.1]

function drawElements(data, svg) {


    let xscale = d3.scaleLinear(simW, [10, 500]);
    let yscale = d3.scaleLinear(simH, [10, 500]);

    svg.selectAll(".locjDot")
        .data(data)
        .enter()
        .append("path")
        .attr("class", "locDot")
        .attr("id", d => d.id)
        .attr("d", "m 20 20 a -6 6 7 0 1 14 0 l -7 23 l -7 -23")
        .attr("transform", d => {
            const orr = -90 + (Math.atan2(yscale(d.ly2) - yscale(d.ly1), xscale(d.lx2) - xscale(d.lx1)) * (180 / Math.PI));
            return "translate(" + (xscale(d.lx1)) + " , " + (yscale(d.ly1)) + ") scale(0.5)  rotate(" + (orr) + ",4.5,6.25) "
        })

}