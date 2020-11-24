import React, { Component } from "react";

// 引入 ECharts 主模块
import echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/bar";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";

class EchartsTest extends Component {
  componentDidMount() {
    var myChart = echarts.init(document.getElementById("ProportionOfPosts"));
    const option = {
      // backgroundColor: "#273454",
      title: {
        text: "员工职类",
        left: "center",
      },
      color: ["#cd4692", "#9658c3", "#6c6be2", "#01aebf", "#18b794"],
      tooltip: {
        trigger: "item",
        formatter: "{b} : {c}人 ({d}%)",
        textStyle: {
          fontSize: 16,
        },
      },
      legend: {
        data: ["开发", "测试", "设计", "产品"],
        orient: "vertical",
        right: "5%",
        top: "13%",
        itemWidth: 20,
        itemHeight: 20,
        itemGap: 30,
        textStyle: {
          color: "#",
          fontSize: 16,
        },
      },
      series: [
        {
          name: "员工职类",
          type: "pie",
          left: '0',
          clockwise: false,
          startAngle: 90,
          radius: "75%",
          center: ["44%", "50%"],
          hoverAnimation: false,
          roseType: "radius", //area
          data: [
            {
              value: 20,
              name: "产品",
            },
            {
              value: 20,
              name: "测试",
            },
            {
              value: 25,
              name: "设计",
            },
            {
              value: 40,
              name: "开发",
            },
          ],
          itemStyle: {
            normal: {
              // borderColor: "#273454",
              borderWidth: "5",
            },
          },
          label: {
            show: true,
            position: "outside",
            formatter: "{a|{b}：{d}%}\n{hr|}",
            rich: {
              hr: {
                backgroundColor: "t",
                borderRadius: 100,
                width: 0,
                height: 10,
                padding: [3, 3, 0, -16],
                shadowColor: "#1c1b3a",
                shadowBlur: 1,
                shadowOffsetX: "0",
                shadowOffsetY: "2",
              },
              a: {
                padding: [-35, 15, -20, 5],
              },
            },
          },
          labelLine: {
            normal: {
              length: 20,
              length2: 30,
              lineStyle: {
                width: 1,
              },
            },
          },
          label: {
              normal: {
                  show: true,
                  position: 'inside',
                  formatter: '{d}%',
                  formatter: function(data){
                      return data.percent.toFixed(0)+"%";
                  },
                  textStyle : {
                      align : 'center',
                      baseline : 'middle',
                      fontFamily : '微软雅黑',
                      fontSize : 15,
                      fontWeight : 'bolder'
                  }
              },
          },
        },
      ],
    };
    // 绘制图表
    myChart.setOption(option);
  }
  render() {
    return (
      <div id="ProportionOfPosts" style={{ width: '100%', height: 300  }}></div>
    );
  }
}

export default EchartsTest;
