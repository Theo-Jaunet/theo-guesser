const simW = [-6.5, 7]
const simH = [-2.3, 6.1]

let loc_xscacle
let loc_yscacle


function drawElements(data, svg) {


     loc_xscacle = d3.scaleLinear(simW, [10, 500]);
     loc_yscacle = d3.scaleLinear(simH, [10, 350]);

    svg.selectAll(".locDot")
        .data(data)
        .enter()
        .append("path")
        .attr("class", "locDot")
        .attr("id", d => d.id)
        .attr("d", "m 20 20 a -6 6 7 0 1 14 0 l -7 23 l -7 -23")
        .attr("transform", d => {
            const orr2 = -90 + (Math.atan2(proj_yscacle(d.ly2) - proj_yscacle(d.ly1), proj_xscacle(d.lx2) - proj_xscacle(d.lx1)) * (180 / Math.PI));
            return "rotate(" + (orr2) + " " + (loc_xscacle(d.lx1) - 2) + " " + (loc_yscacle(d.ly1) - 2) + ") translate(" + (loc_xscacle(d.lx1) - 16) + "," + (loc_yscacle(d.ly1) - 16) + ")  scale(0.5) "
        })

}