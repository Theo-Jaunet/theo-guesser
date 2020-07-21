function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

let proj_xscacle
let proj_yscacle


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


    let p1 = [d3.extent(data.map(d => d.px1)), d3.extent(data.map(d => d.py1))]
    let p2 = [d3.extent(data.map(d => d.px2)), d3.extent(data.map(d => d.py2))]
    // console.log([Math.min(p1[1], p2[1]), Math.max(p1[1], p2[1])]);

    console.log(p1)
    proj_xscacle = d3.scaleLinear([Math.min(p1[0][0], p2[0][0]), Math.max(p1[0][1], p2[0][1])], [15, 500]);
    proj_yscacle = d3.scaleLinear([Math.min(p1[1][0], p2[1][0]), Math.max(p1[1][1], p2[1][1])], [15, 500]);

    // console.log(d3.extent(data.map(d => d.py1)));
    // console.log(data.map(d => d.py1));

    svg.selectAll(".projDot")
        .data(data)
        .enter()
        .append("path")
        .attr("class", "projDot")
        .attr("num", d => d.id)
        .attr("d", "m 20 20 a -6 6 7 0 1 14 0 l -7 23 l -7 -23")
        .attr("transform", d => {
            const orr = -90 + (Math.atan2(proj_yscacle(d.py2) - proj_yscacle(d.py1), proj_xscacle(d.px2) - proj_xscacle(d.px1)) * (180 / Math.PI));
            return "rotate(" + (orr) + " " + (proj_xscacle(d.px1) - 2) + " " + (proj_yscacle(d.py1) - 2) + ") translate(" + (proj_xscacle(d.px1) - 16) + "," + (proj_yscacle(d.py1) - 16) + ")  scale(0.5) "
        })
}

function euclidian_dist(a, b) {
    let sum = 0;

    for (let n = 0; n < a.length; n++) {
        sum += Math.pow(a[n] - b[n], 2)
    }
    return Math.sqrt(sum)
}