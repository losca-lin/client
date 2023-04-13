<template>
  <div>
    <div>
      <el-header style="width: 100%;height: 100px" class="fater-header">
        <div>
          <img src="../assets/nav/logo.jpg" style="width: 70px;height: 70px"/>
          <span class="fater-header-logo" style="margin-left: 80px">板球校队管理系统</span>
          <span style="float: right" @click="goto" class="fater-header-user">登录</span>
        </div>
      </el-header>
    </div>
    <div style="width: 100%; height:800px;margin-top:120px;display: flex;flex-wrap: wrap;">
      <div style="width: 50%">
        <el-carousel height="150px">
          <el-carousel-item v-for="item in imgList" :key="item.id">
            <img :src="item.url" width="100%" height="100%" alt="无图片"/>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div style="width: 50%;height: 150px;overflow-y:scroll;overflow-x:hidden;">
        <div style="padding-left: 20px">
          <h2>板球介绍</h2>
          <span>板球，又称木球，是一项锻炼手眼的协调能力，集上肢动作控制能力、技巧与力量为一体的综合性运动。比赛项目为团体赛。
        </span>
        </div>

      </div>
      <div style="width: 50%;height: 150px">
        <div style="padding-left: 10px">
          <h2>校队简介</h2>
          <span>板球有“绅士的游戏”之称，是一项集技巧与力量为一体的综合性运动。早在2014年，该院校就从组建板球校队开始，打造板球体育传统特色学校，目前拥有三支板球队，包括一支女队，队员均从在校学生及国内板球特色学校毕业生中遴选。2019年9月27日，国家体育总局小球运动管理中心与上海市板球协会、上海交通职业技术学院（上海市交通学校）签署了共建中国男子板球国家队、国家青年队合作协议，该院校正式成为国家男子板球训练基地，并全力备战将于2022年9月10日至25日在杭州举行的第十九届亚运会。
        </span>
        </div>
      </div>
      <div style="width: 50%;height: 150px">
        <div style="padding-left: 20px">
          <h2>规章制度</h2>
          <span>
           板球是以击球、投球和接球为主的运动。参与者分两队作赛，通常每队11人，一队做攻击，另一队做防守。
攻方球员为击球手，比赛时每次只可派两人落场，致力夺取高分数。一人负责击球取分，另一人配合夺分。守方则11位球员同时落场作赛，一人为投球手负责把球投中击球手身后的三柱门，力图将他赶出局，其他球员为外野手，负责把击球手打出的球接住，防止攻方得分。攻方的击球局完结后，两队便会攻守对调，得分较高那队为胜方。
          </span>
        </div>
      </div>
      <div style="width: 100%;">
        <v-chart :option="option_column" style="height: 400px"></v-chart>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getPageMembersCount
} from "@/api";

export default {
  data() {
    return {
      imgList: [
        {id: 1, url: require("@/assets/nav/1.jpg")},
        {id: 2, url: require("@/assets/nav/2.jpg")},
        {id: 3, url: require("@/assets/nav/3.jpg")},
      ],
      option_column: {
        title: {text: "成员组成结构图"},
        tooltip: {},
        xAxis: {
          data: [],
        },
        yAxis: {minInterval: 1},
        series: [
          {
            name: "人数",
            type: "bar",
            data: [],
          },
        ],
        toolbox: {
          show: true,
          feature: {
            mark: {show: true},
            saveAsImage: {show: true}
          }
        },
      },

    }
  },
  created() {
    this.getCount();
  },
  methods: {
    getCount() {
      getPageMembersCount().then((resp) => {
        resp.data.forEach(item => {
          this.option_column.xAxis.data.push(item.name)
          this.option_column.series[0].data.push(item.count)
        })
      })
    },
    init() {
    },
    goto() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.nav {
  background: url("../assets/nav/bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;


}
</style>
