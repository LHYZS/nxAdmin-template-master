<template>
  <div class="app-container">
    <div class="item">
      <h4>在线人数</h4>
      <nx-data-display :option="option"></nx-data-display>
    </div>
    <div class="item">
      <h4>热门课程</h4>
      <nx-data-tabs :option="easyDataOption"></nx-data-tabs>
    </div>
    <div class="item">
      <h4>热门教师</h4>
      <nx-data-card :option="easyDataOption0"></nx-data-card>
    </div>
  </div>
</template>

<script>

import nxDataDisplay from '@/components/nx-data-display/nx-data-display'
import nxDataCard from '@/components/nx-data-card/nx-data-card'
import nxDataTabs from '@/components/nx-data-tabs/nx-data-tabs'
export default {
  name: 'report',
  components: {
    nxDataDisplay,
    nxDataCard,
    nxDataTabs

  },
  data() {
    return {
      option: {
        span: 8,
        color: '#15A0FF',
        data: [
          {
            count: 100,
            title: '日在线数'
          },
          {
            count: 3500,
            title: '月在线数'
          },
          {
            count: 42000,
            title: '年在线数'
          }
        ]
      },
      easyDataOption: {
        span: 6,
        data: [
          {
            title: '软件工程',
            subtitle: '实时',
            count: 79,
            allcount: 100,
            text: '已选报人数',
            color: 'rgb(49, 180, 141)',
            key: '类'
          },
          {
            title: '高等数学',
            subtitle: '实时',
            count: 31,
            allcount: 50,
            text: '已选报人数',
            color: 'rgb(56, 161, 242)',
            key: '附'
          },
          {
            title: '线性代数',
            subtitle: '实时',
            count: 90,
            allcount: 102,
            text: '已选报人数',
            color: 'rgb(117, 56, 199)',
            key: '评'
          },
          {
            title: '军事理论',
            subtitle: '实时',
            count: 90,
            allcount: 110,
            text: '已选报人数',
            color: 'rgb(59, 103, 164)',
            key: '新'
          }
        ]
      },
      easyDataOption0: {
        span: 6,
        borderColor: '#fff',
        data: [
          {
            name: '王益答教师',
            src: 'static/img/mock/card/card-1.jpg',
            text: '教授高等数学，教学风格幽默风趣'
          },
          {
            name: '李晓迪教授',
            src: 'static/img/mock/card/card-2.jpg',
            text: '教授软件工程，知识渊博，有问必答'
          },
          {
            name: '史莱克教师',
            src: 'static/img/mock/card/card-3.jpg',
            text: '教授大学英语，基础扎实，沉着稳健'
          },
          {
            name: '乐嘉',
            src: 'static/img/mock/card/card-4.jpg',
            text: '教授心理学，探知人性的另一面'
          }
        ]
      }
    }
  },
  created() {},
  watch: {},
  mounted() {},
  computed: {}
}
</script>

<style scoped>
.item {
  margin-bottom: 16px;
}
</style>
<style lang ="scss">
    @import '../../styles/data-card.scss';
    @import '../../styles/data-display.scss';
    @import '../../styles/data-tabs.scss';
</style>
