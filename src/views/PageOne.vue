<template>
  <div>
    <Menu mode="horizontal" :theme="theme" active-name="1">
      <Row>
        <Col span="22">
          <MenuItem name="1">
            <Icon type="ios-paper" />
            内容管理
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people" />
            用户管理
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-stats" />
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <Icon type="ios-construct" />
            综合设置
        </MenuItem>
        </Col>
        <Col span="2">
          <Switch size="large" v-model="switchDefault" @on-change="changeTheme">
            <span slot="open">明亮</span>
            <span slot="close">暗黑</span>
          </Switch>
        </Col>
      </Row>
    </Menu>
      <Row>
        <Col span="24">
          <Carousel v-model="carouselValue" loop class="caro" style="height: 300px">
            <CarouselItem>
              <div class="demo-carousel">1</div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">2</div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">3</div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">4</div>
            </CarouselItem>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col span="8">
          <Circle :percent="100" stroke-color="#5cb85c">
            <Icon type="ios-checkmark" size="60" style="color:#5cb85c"></Icon>
          </Circle>
        </Col>
        <Col span="8">
          <Circle :percent="circlePer1" :stroke-color="color">
            <Icon v-if="circlePer1 == 100" type="ios-checkmark" size="60" style="color:#5cb85c"></Icon>
            <span v-else class="demo-Circle-inner" style="font-size:24px">{{this.circlePer1}}%</span>
          </Circle>
          <ButtonGroup size="small">
            <Button icon="ios-add" @click="add"></Button>
            <Button icon="ios-remove" @click="minus"></Button>
          </ButtonGroup>
        </Col>
        <Col span="8">
          <Circle :percent="35" stroke-color="#ff5500">
            <span class="demo-Circle-inner">
              <Icon type="ios-close" size="50" style="color:#ff5500"></Icon>
            </span>
          </Circle>
        </Col>
      </Row>
  </div>
</template>

<script>
  export default {
    name: 'PageOne',
    data() {
      return {
        theme: 'dark',
        switchDefault: false,
        carouselValue: 0,
        circlePer1: 80
      }
    },
    methods: {
      changeTheme(status) {
        // console.log('status-',status)
        // console.log(this.switchDefault)
        this.theme = !status ? 'dark' : 'light'
      },
      add(){
        if(this.circlePer1 >= 100) return
        this.circlePer1 += 10
      },
      minus(){
        if(this.circlePer1 <= 0) return
        this.circlePer1 -= 10
      }
    },
    computed: {
      color() {
        let color = '#2db7f5'
        if (this.circlePer1 == 100) {
          color = '#5cb85c'
        }
        return color
      }
    },
  }
</script>

<style lang="less">
.ivu-col-span-2 {
  padding-left: 25px;
}
.caro .ivu-carousel-list, .demo-carousel{
  height: 250px;
  background-color: aliceblue;
  text-align: center;
}
.ivu-carousel-arrow>*{
  position: absolute;
  transform: translate(-50%,-50%);
}
.ivu-col-span-8{
  text-align: center;
}
</style>