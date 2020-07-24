let simW = [-6.1, 7.1];
let simH = [-2.15, 6.5];


let loc_xscacle
let loc_yscacle

d3.selection.prototype.moveToBack = function () {
    return this.each(function () {
        var firstChild = this.parentNode.firstChild;
        if (firstChild) {
            this.parentNode.insertBefore(this, firstChild);
        }
    });
};


function drawElements(data, svg) {


    loc_xscacle = d3.scaleLinear(simW, [10, 500]);
    loc_yscacle = d3.scaleLinear(simH, [10, 350]);
    let colscale = d3.scaleLinear().domain([0, 60]).range(['green', 'red'])


    svg.selectAll(".locDot")
        .data(data)
        .enter()
        .append("path")
        .attr("class", "locDot")
        .attr("id", d => d.id)
        // .attr("fill",(d,i) => colscale(i))
        .attr("d", "m 20 20 a -6 6 7 0 1 14 0 l -7 23 l -7 -23")
        .attr("transform", d => {
            const orr2 = -90 + (Math.atan2(proj_yscacle(d.ly2) - proj_yscacle(d.ly1), proj_xscacle(d.lx2) - proj_xscacle(d.lx1)) * (180 / Math.PI));
            return "rotate(" + (orr2) + " " + (loc_xscacle(d.lx1) - 2) + " " + (loc_yscacle(d.ly1) - 2) + ") translate(" + (loc_xscacle(d.lx1) - 16) + "," + (loc_yscacle(d.ly1) - 16) + ")  scale(0.5) "
        })

/*
        svg.selectAll(".locDot")
        .data(data)
        .enter()
        .append("path")
        .attr("class", "locDot")
        .attr("id", d => d.id)
        // .attr("fill",(d,i) => colscale(i))
        .attr("d", "m 20 20 a -6 6 7 0 1 14 0 l -7 23 l -7 -23")
        .attr("transform", d => {
            const orr2 = -90 + d.torr
            return "rotate(" + (orr2) + " " + (loc_xscacle(d.tx) - 2) + " " + (loc_yscacle(d.ty) - 2) + ") translate(" + (loc_xscacle(d.tx) - 16) + "," + (loc_yscacle(d.ty) - 16) + ")  scale(0.5) "
        })
*/




    let line = d3.line()
        .x(function (d) {
            return loc_xscacle(d.lx1)
        })
        .y(function (d) {
            return loc_yscacle(d.ly1)
        })
            .curve(d3.curveLinear);


    loc.append("path")
        .data([data])
        .attr("class", "traj")
        .attr("d", line)
        .attr('stroke-width', 3)
        .attr('stroke', '#5b5b5b')
        .attr('fill', 'none')


    loadmap(loc, 'assets/images/map.jpg');

}