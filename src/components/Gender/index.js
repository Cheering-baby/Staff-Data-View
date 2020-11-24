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
    var myChart = echarts.init(document.getElementById("Gender"));
    var option = {
      title: {
        text: "性别比例",
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{b} : {c}人 ({d}%)",
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: [
            { value: 30, name: "男" },
            { value: 70, name: "女" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    // 绘制图表
    myChart.setOption(option);
  }
  render() {
    return <div id="Gender" style={{ width: "100%", height: 300 }}></div>;
  }
}

export default EchartsTest;
