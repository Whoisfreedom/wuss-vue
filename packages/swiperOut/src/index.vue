<!--
 * @Author: null
 * @Email: 1020814597@qq.com
 * @Date: 2019-06-14 17:54:56
 * @LastEditors: null
 * @LastEditTime: 2019-07-23 14:06:14
 * @Description: 
 * @form: (0 U 0)
   * 组件的属性列表
   * @param {array} swiperOutBtns 侧滑菜单按钮列表 参数有 text, color, background, disabled
   * @param {number} buttonWidth 按钮的宽度
   * @param {boolean} close 是否展开
   * @param {string} backgroundColor 背景颜色
   * @param {number} height  容器的高度
   * @param {number} threshold 侧滑触发的阀值
   * @param {boolean} autoClose 点击按钮自动收起
   * @param {boolean} disabled 禁用侧滑菜单
 -->

<template>
  <div class="wuss-class wuss-swiper-out" scale-area="false">
    <div
      class="wuss-swiper-out-view"
      @touchstart="handleTouchStart"
      @touchmove="handleChange"
      @touchend="handleTouchEnd"
      :style="[styles,{'background':backgroundColor}]"
    >
      <div class="wuss-swiper-out-left">
        <slot />
      </div>
      <div class="wuss-swiper-out-right wuss-swiper-out-btns" ref="rightbtn">
        <div
          class="wuss-swiper-out-btn"
          v-for="(item,index) in datas"
          :key="index"
          :class="[item.disabled ? 'wuss-weiper-out-btn-disabled' : '' ]"
          :style="[{'color':item.color,'background':item.background,'fontSize':item.size,'width':buttonWidth}]"
          @touchend.stop="handleBtn(item.type)"
        >{{item.text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WSwiperOut",
  props: {
    swiperOutBtns: {
      type: Array,
      default: function() {
        return [
          {
            text: "删除",
            color: "#ffffff",
            background: "#e42112",
            disabled: false,
            size: "14px",
            type: "delete"
          }
        ];
      }
    },
    backgroundColor: {
      type: String,
      default: "#fff"
    },
    buttonWidth: String,
    height: {
      type: String,
      default: "#67c23a"
    },
    threshold: {
      type: [String, Number],
      default: 1
    },
    close: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autoClose: {
      type:Boolean,
      default: true
    }
  },
  data() {
    return {
      datas: this.swiperOutBtns,
      startX: 0,
      rightW: 0,
      moveX: 0,
      styles: { transform: "translate3d(0px, 0px, 0px)" }
    };
  },
  created() {},
  mounted() {
    let btnRightLen = this.$refs.rightbtn.clientWidth;
    // 自动打开
    if (!this.close) {
      this.styles = {
        transform: "translate3d(" + -btnRightLen + "px, 0px, 0px)"
      };
    }
  },
  computed: {},
  methods: {
    handleBtn(e) {
      this.$emit("handleBtnClick", e);

      if(this.autoClose){
        this.styles = {
          transition: "transform .3s",
          transform: "translate3d(0px, 0px, 0px)"
        };
      }
    },
    /**
     * movable-view 移动回调
     */
    handleChange(e) {
      e.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
      if (this.disabled) return false;

      let moveLen = e.touches[0].pageX - this.startX;
      let btnRightLen = this.$refs.rightbtn.clientWidth,
        newMoveLen;

      // 正常滑动
      newMoveLen = moveLen;

      // 右划最大值 目前未规划右侧划出所以不可大于0
      if (moveLen > 0) {
        newMoveLen = 0;
      }

      // 左滑最大值
      if (moveLen < -btnRightLen) {
        newMoveLen = -btnRightLen;
      }

      this.styles = {
        transform: "translate3d(" + newMoveLen + "px, 0px, 0px)"
      };
      this.pageX = e.touches[0].pageX;
      this.moveX = moveLen;
    },
    /**
     * movable-view 鼠标按下回调
     */
    handleTouchStart(e) {
      e.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
      // 设置手势按下起始位置
      this.startX = e.touches[0].pageX;
      this.rightW = this.$refs.rightbtn.clientWidth;
    },
    /**
     * movable-view 鼠标松开回调
     */
    handleTouchEnd() {
      const { startX, disabled, rightW, pageX, threshold } = this;
      if (disabled) return false;

      // 当前只含右向左划动
      let _width = rightW,
        absVal = Math.abs(pageX - startX);
      let that = this;

      if (absVal >= threshold * rightW) {
        // X轴移动距离大于等于阀值并且Y轴移动距离在Cell内
        that.styles = {
          transition: "transform .3s",
          transform: "translate3d(" + -_width + "px, 0px, 0px)"
        };
      } else if (absVal < _width) {
        //X轴移动距离小于最大值收起

        that.styles = {
          transition: "transform .3s",
          transform: "translate3d(0px, 0px, 0px)"
        };

        that.pageX = 0;
      } else if (absVal > _width) {
        // 终点X轴大于起点X轴并且小于阀值收起
      } else if (pageX === startX) {
        // 鼠标原地点击时,达到autoClose效果 自动收回
        that.styles = {
          transition: "transform .3s",
          transform: "translate3d(0px, 0px, 0px)"
        };
      }
    }
  }
};
</script>
<style scoped>
.wuss-swiper-out {
  overflow: hidden;
}

.wuss-swiper-out-view {
  position: relative;
}

.wuss-swiper-out-view::before {
  content: " ";
  position: absolute;
  left: 0;
  top: 1px;
  right: 0;
  height: 1px;
  background-color: #d9d9d9;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}

.wuss-swiper-out-view::after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 1px;
  right: 0;
  height: 1px;
  background-color: #d9d9d9;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}

.wuss-swiper-out-btns {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(100%, -50%);
  z-index: 1000;
  background: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
}

.wuss-swiper-out-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  text-align: center;
  font-size: 16px;
  color: #333333;
  height: 100%;
  width: 65px;
}

.wuss-weiper-out-btn-disabled {
  opacity: 0.4;
}

.wuss-swiper-out-left {
  height: 100%;
}
</style>


