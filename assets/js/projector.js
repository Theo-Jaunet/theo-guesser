function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

/*
let proj_xscacle
let proj_yscacle
*/


function fakedata(npoints) {

    let data = [];

    const xLim = [-6.5, 7]
    const yLim = [-2.3, 6.1]

    for (let i = 0; i < npoints; i++) {

        data.push({
            px1: getRandomFloat(0, 25),
            py1: getRandomFloat(0, 25),
            px2: getRandomFloat(5, 25),
            py2: getRandomFloat(5, 25),
            dist: getRandomFloat(0, 25),
            lx1: getRandomFloat(xLim[0], xLim[1]),
            ly1: getRandomFloat(yLim[0], yLim[1]),
            lx2: getRandomFloat(xLim[0], xLim[1]),
            ly2: getRandomFloat(yLim[0], yLim[1]),
            id: i
        })

    }

    return data
}


function drawPoints(data, svg) {


    // let p1 = [d3.extent(data.map(d => d.px1)), d3.extent(data.map(d => d.py1))];
    // let p2 = [d3.extent(data.map(d => d.px2)), d3.extent(data.map(d => d.py2))];
    // console.log([Math.min(p1[1], p2[1]), Math.max(p1[1], p2[1])]);
    // let p1 = [[-5.714306831359863, 15.70352840423584],[-5.092494487762451, 14.56442642211914]];
    // let p2 = p1
    //
    // console.log(p1)
    // proj_xscacle = d3.scaleLinear([Math.min(p1[0][0], p2[0][0]), Math.max(p1[0][1], p2[0][1])], [15, 500]);
    // proj_yscacle = d3.scaleLinear([Math.min(p1[1][0], p2[1][0]), Math.max(p1[1][1], p2[1][1])], [15, 500]);

    // let proj_xscacle = d3.scaleLinear().domain(p1[0]).range([20, 515]); // Scale to Change based on SVG Size
    // let proj_yscacle = d3.scaleLinear().domain(p1[1]).range([20, 515]);

    // console.log(d3.extent(data.map(d => d.py1)));
    // console.log(data.map(d => d.py1));


    svg.selectAll(".projDot")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", "projDot")
        .attr("cx", d => proj_xscacle(d.px1))
        .attr("cy", d => proj_yscacle(d.py1))
        .attr("r", "8")
        .attr("fill", (d) => colscale(euclidian_dist([loc_xscacle(d.lx1), loc_yscacle(d.ly1)], [loc_xscacle(d.lx2), loc_yscacle(d.ly2)])))
        .attr("stroke", "black")
        .style("stroke-width", "1px")

    /*   svg.selectAll(".projDot")
           .data(data)
           .enter()
           .append("path")
           .attr("class", "projDot")
           .attr("num", d => d.id)
           .attr("fill", (d) => colscale(euclidian_dist([proj_xscacle(d.px1), proj_yscacle(d.py1)], [proj_xscacle(d.px2), proj_yscacle(d.py2)])))
           .attr("d", "m 20 20 a -6 6 7 0 1 14 0 l -7 23 l -7 -23")
           .attr("stroke", "#555555")
           .style("stroke-width", "1px")
           .attr("transform", d => {
               const orr = -90 + (Math.atan2(proj_yscacle(d.py2) - proj_yscacle(d.py1), proj_xscacle(d.px2) - proj_xscacle(d.px1)) * (180 / Math.PI));
               return "rotate(" + (orr) + " " + (proj_xscacle(d.px1) - 2.5) + " " + (proj_yscacle(d.py1) - 2.5) + ") translate(" + (proj_xscacle(d.px1) - 24.5) + "," + (proj_yscacle(d.py1) - 21.5) + ")  scale(0.8)"

               // return "rotate(" + (orr2) + " " + (loc_xscacle(d.lx1) - 2.5) + " " + (loc_yscacle(d.ly1) - 2.5) + ") translate(" + (loc_xscacle(d.lx1) - 24.5) + "," + (loc_yscacle(d.ly1) - 21.5) + ")  scale(0.8) "
           })*/


    /*  svg.selectAll("rect")
      .data(data)
      .enter().append("rect").attr("x", d =>proj_xscacle(d.px1)-5).attr("y",  d =>proj_yscacle(d.py1)-5).attr("width", 10).attr("height", 10).attr("fill","pink")*/
}

function euclidian_dist(a, b) {
    let sum = 0;

    for (let n = 0; n < a.length; n++) {
        sum += Math.pow(a[n] - b[n], 2)
    }
    return Math.sqrt(sum)
}