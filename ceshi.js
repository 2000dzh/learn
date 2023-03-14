var upLimit = 600; // 上限
var lowlimit = 0; // 下限
 
 
// 定义线的颜色
let lineColor =  ['yellow','blue']
// 生成 visualMap
let visualMap = []
lineColor.map((item,index)=>{
  visualMap.push({
      type: 'piecewise',
      show: false,
      dimension: 1,
      // seriesIndex: [0, 1], // 虽然可以指定多个series，但是线的颜色只能设置一条
      seriesIndex: index,
      pieces: [{
        gt: upLimit,
        color: 'red' //超过部分的颜色
      }, {
        lt: 0,
        color: lineColor[index]
      }],
      outOfRange: { // 在选中范围外 的视觉元素，这里设置在正常范围内的图形颜色
        color: lineColor[index],
      },
    })
})
 
option = {
  tooltip: {
    trigger: 'axis',
    boundaryGap: false
  },
  xAxis: {
    type: 'category',
    boundaryGap: false
  },
  yAxis: {
    type: 'value'
    // boundaryGap: [0, '30%']
  },
  visualMap: visualMap,
  color:lineColor,
  series: [
    {
      name:'线1',
      type: 'line',
      smooth: false,
      symbol: 'none',
      lineStyle: {
        // 这里不能设置颜色，不然会以这个为准，设置的范围变色将不起作用
        width: 2
      },
      markLine: {
        symbol: 'none',
        label: {
          show: false
        },
         lineStyle:{
          color:'red'
        },
        data: [
          {
            yAxis: upLimit
          }
        ]
      },
      // areaStyle: {},
      data: [
        ['2019-10-10', 200],
        ['2019-10-11', 560],
        ['2019-10-12', 750],
        ['2019-10-13', 580],
        ['2019-10-14', 250],
        ['2019-10-15', 300],
        ['2019-10-16', 450],
        ['2019-10-17', 300],
        ['2019-10-18', 100]
      ]
    },
    {
      name:'线2',
      type: 'line',
      smooth: false,
      symbol: 'none',
      lineStyle: {
        // 这里不能设置颜色，不然会以这个为准，设置的范围变色将不起作用
        width: 2
      },
      markLine: {
        symbol: 'none',
        label: {
          show: false
        },
        lineStyle:{
          color:'red'
        },
        data: [
          {
            yAxis: upLimit
          }
        ]
      },
      // areaStyle: {},
      data: [
        ['2019-10-10', 100],
        ['2019-10-11', 360],
        ['2019-10-12', 950],
        ['2019-10-13', 280],
        ['2019-10-14', 150],
        ['2019-10-15', 300],
        ['2019-10-16', 550],
        ['2019-10-17', 100],
        ['2019-10-18', 900]
      ]
    }
  ]
};