<template>
  <div>
    <h3>toast</h3>
    <h4>提示框</h4>
    <w-button type="primary" @click="defaulta">default</w-button>
    <w-button type="primary" @click="top">top</w-button>
    <w-button type="primary" @click="middle">middle</w-button>
    <w-button type="primary" @click="bottom">bottom</w-button>
    <w-button type="primary" @click="timeOut">延时5s</w-button>
    <w-button type="primary" @click="success">icon:success</w-button>
  </div>
</template>
<script>
export default {
  name: 'toast',
  created() {
    
  },
  methods: {
    defaulta() {
      this.$toast('default')
    },
    middle() {
      this.$toast.middle('middle')
    },
    top() {
      this.$toast.top('top')
    },
    bottom() {
      this.$toast.bottom('bottom')
    },
    timeOut() {
      this.$toast({
        duration: 5000,
        message: '我能停5秒'
      })
    },
    success() {
      this.$toast({
        duration: 5000,
        message: '我是成功',
        icon: 'success'
      })
    }
  }
}
</script>

