<!--
 * @Author: null
 * @Email: 3027704690@qq.com
 * @Date: 2019-08-14 10:10:04
 * @LastEditors: null
 * @LastEditTime: 2019-08-14 10:10:04
 * @Description: 
 * @form: (0 U 0)
 -->
<template>
  <div id="picker">
    <h3>picker</h3>
    <h4>选择器</h4>
    <w-picker :prop="prop" v-model="chooseList" :pickList="pickList" placeholder="请选择picker" @change="choose" title="选择器" :pickerVisible.sync="visible"></w-picker>
  </div>
</template>

<script>

export default {
  name: 'picker',
  data() {
    return {
      visible: false,
      prop: {
        label: 'name',
        value: 'value',
        children: 'children'
      },
      chooseList: [1, 21],
      pickList: [
        {
          name: '鸡',
          value: 1,
          children: [
            {
              name: '鸡',
              value: 114,
              children: [
                {
                  name: '鸭',
                  value: 112,
                  children: [
                    {
                      name: '鸭',
                      value: 111,
                    },
                  ]
                },
              ]
            },
            {
              name: '你',
              value: 21,
            },
            {
              name: '太',
              value: 31,
            },
            {
              name: '美',
              value: 41,
            },
            {
              name: '唱',
              value: 51,
            },
            {
              name: '跳',
              value: 61,
            },
            {
              name: '篮球',
              value: 71,
            },
            {
              name: 'rap',
              value: 81,
            }
          ],
        },
        {
          name: '你',
          value: 2,
          children: [{
            name: '篮球',
            value: 71,
          },
          {
            name: 'rap',
            value: 81,
          }
          ],
        },
        {
          name: '太',
          value: 3,
        },
        {
          name: '美',
          value: 4,
        },
        {
          name: '唱',
          value: 5,
        },
        {
          name: '跳',
          value: 6,
        },
        {
          name: '篮球',
          value: 7,
          children: [{
            name: '7篮球',
            value: 71,
          },
          {
            name: '7rap',
            value: 81,
          }
          ],
        },
        {
          name: 'rap',
          value: 8,
        }
      ],
    }
  },
  methods: {
    choose() {
    },
  }
}
</script>

<style>
</style>
