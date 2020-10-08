let simW = [-6.1, 7.1];
let simH = [-2.15, 6.5];


let loc_xscacle;
let loc_yscacle;

d3.selection.prototype.moveToBack = function () {
    return this.each(function () {
        var firstChild = this.parentNode.firstChild;
        if (firstChild) {
            this.parentNode.insertBefore(this, firstChild);
        }
    });
};

function drawElementsBad(data, svg) {

    loadmap(d3.select("#locReal"), 'assets/images/map.jpg');

    loc_xscacle = d3.scaleLinear(simW, [10, 500]);
    loc_yscacle = d3.scaleLinear(simH, [10, 350]);


    svg.selectAll(".locDot")
        .data(data)
        .enter()
        .append("path")
        .attr("class", "locDot")
        .attr("id", d => d.id)
        .attr("fill", (d) => colscale(euclidian_dist([loc_xscacle(d.lx1), loc_yscacle(d.ly1)], [loc_xscacle(d.tx), loc_yscacle(d.ty)])))
        .attr("stroke", "#555555")
        .style("stroke-width", "1px")
        .attr("d", "m 20 20 a -6 6 7 0 1 14 0 l -7 23 l -7 -23")
        .attr("transform", d => {
            const orr2 = (-180 + d.lorr1)// + (Math.atan2(loc_yscacle(d.ly2) - loc_yscacle(d.ly1), loc_xscacle(d.lx2) - loc_xscacle(d.lx1)) * (180 / Math.PI));
            return "rotate(" + (orr2) + " " + (loc_xscacle(d.lx1) - 2.5) + " " + (loc_yscacle(d.ly1) - 2.5) + ") translate(" + (loc_xscacle(d.lx1) - 24.5) + "," + (loc_yscacle(d.ly1) - 21.5) + ")  scale(0.8) "
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


    /*
        let line = d3.line()
            .x(function (d) {
                return loc_xscacle(d.lx1)
            })
            .y(function (d) {
                return loc_yscacle(d.ly1)
            })
                .curve(d3.curveLinear);


        svg.append("path")
            .data([data])
            .attr("class", "traj")
            .attr("d", line)
            .attr('stroke-width', 3)
            .attr('stroke', '#5b5b5b')
            .attr('fill', 'none')
    */


    loadmap(svg, 'assets/images/map.jpg');

}


function drawElements(data, svg) {


    loc_xscacle = d3.scaleLinear(simW, [10, 500]);
    loc_yscacle = d3.scaleLinear(simH, [10, 350]);


    svg.selectAll(".locDot")
        .data(data)
        .enter()
        .append("path")
        .attr("class", "locDot")
        .attr("id", d => d.id)
        .attr("fill", (d) => colscale(euclidian_dist([loc_xscacle(d.lx1), loc_yscacle(d.ly1)], [loc_xscacle(d.lx2), loc_yscacle(d.ly2)])))
        .attr("d", "m 20 20 a -6 6 7 0 1 14 0 l -7 23 l -7 -23")
        .attr("stroke", "#555555")
        .style("stroke-width", "1px")
        .attr("transform", d => {
            const orr2 = (-180 + d.lorr1)
            // const orr2 = (Math.atan2(loc_yscacle(d.ly2) - loc_yscacle(d.ly1), loc_xscacle(d.lx2) - loc_xscacle(d.lx1)) * (180 / Math.PI));
            return "rotate(" + (orr2) + " " + (loc_xscacle(d.lx1) - 2) + " " + (loc_yscacle(d.ly1) - 2) + ") translate(" + (loc_xscacle(d.lx1) - 21.5) + "," + (loc_yscacle(d.ly1) - 24.5) + ")  scale(0.8) "
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


    /*
        let line = d3.line()
            .x(function (d) {
                return loc_xscacle(d.lx1)
            })
            .y(function (d) {
                return loc_yscacle(d.ly1)
            })
                .curve(d3.curveLinear);


        svg.append("path")
            .data([data])
            .attr("class", "traj")
            .attr("d", line)
            .attr('stroke-width', 3)
            .attr('stroke', '#5b5b5b')
            .attr('fill', 'none')
    */


    loadmap(svg, 'assets/images/map.jpg');

}