<template>
  <transition name="fade">
    <div class="wuss-toast" :class="['wuss-toast-' + type]" v-show="visible" >
      <svg v-if="icon" class="icon toast-icon" aria-hidden="true"> <use :xlink:href="'#wuss-icon-' + icon"></use></svg>
      <p class="toast-message">{{message}}</p>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      message: '',
      duration: 3000,
      iconClass: '',
      customClass: '',
      onClose: null,
      closed: false,
      timer: null,
      type: 'default',
      icon: '',
    };
  },
  watch: {
    closed: function(val) {
      if(val) {
        this.visible = false;
      } else {
        this.visible = true;
      }
    }
  },
  methods: {
    close() {
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose(this);
      }
    },
    clearTimer() {
      clearTimeout(this.timer);
    },

    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
  },
  mounted() {
    this.startTimer();
  },
}
</script>
<style>
  .wuss-toast{
    position: fixed;
    width: 70%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
    text-align: center;
    padding: 5px;
    background-color: rgba(0,0,0,.5);
    color: #fff;
    z-index: 2010;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .wuss-toast.wuss-toast-default {
    top: 20%;
  }
  .wuss-toast.wuss-toast-top {
    top: 10%;
  }
  .wuss-toast.wuss-toast-middle {
    top: 50%;
  }
  .wuss-toast.wuss-toast-bottom {
    bottom: 10%;
  }
  .toast-icon{
    display: inline-block;
    width: 40px;
    height: 40px;
    color: #fff;
  }
  .toast-message{
    padding: 0;
    margin: 0;
  }
</style>


