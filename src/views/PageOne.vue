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
      
      
        
    </Menu>
  </div>
</template>

<script>
  export default {
    name: 'PageOne',
    data() {
      return {
        theme: 'dark',
        switchDefault: false,
        carouselValue: 0
      }
    },
    methods: {
      changeTheme(status) {
        // console.log('status-',status)
        // console.log(this.switchDefault)
        this.theme = !status ? 'dark' : 'light'
      }
    },
  }
</script>

<style lang="less">
.ivu-col-span-2 {
  padding-left: 25px;
}
.caro .ivu-carousel-list{
  height: 250px;
  background-color: aliceblue;
}
.ivu-carousel-arrow>*{
  position: absolute;
  transform: translate(-50%,-50%);
}
</style>