<template>
  <div>
    <Menu mode="horizontal" :theme="theme" active-name="1">
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
        <Switch size="large" v-model="switchDefault" @on-change="changeTheme">
            <span slot="open">明亮</span>
            <span slot="close">暗黑</span>
        </Switch>
    </Menu>
  </div>
</template>

<script>
  export default {
    name: 'PageOne',
    data() {
      return {
        theme: 'dark',
        switchDefault: false
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

<style lang="less" scoped>
.ivu-switch-large{
  float: right;
  top: 20px;
  right: 5px;
}
</style>