<template>
  <div>
    <h3>layout</h3>
    <h4>布局</h4>
    <h5>default</h5>
    <w-row class="layout-row1">
      <w-col class="layout-col" :span="6">span[6]</w-col>
      <w-col class="layout-col" :span="6">span[6]</w-col>
      <w-col class="layout-col" :span="6">span[6]</w-col>
      <w-col class="layout-col" :span="6">span[6]</w-col>
    </w-row>
    <w-row class="layout-row1">
      <w-col class="layout-col" :span="8">span[8]</w-col>
      <w-col class="layout-col" :span="8">span[8]</w-col>
      <w-col class="layout-col" :span="8">span[8]</w-col>
    </w-row>
    <h5>gutter</h5>
    <w-row :gutter="10" class="layout-row1">
      <w-col class="layout-col" :span="8">gutter[10]</w-col>
      <w-col class="layout-col" :span="8">gutter[10]</w-col>
      <w-col class="layout-col" :span="8">gutter[10]</w-col>
    </w-row>
    <h5>offset</h5>
    <w-row :gutter="10" class="layout-row1">
      <w-col class="layout-col" :span="8">span[8]</w-col>
      <w-col class="layout-col" :offset="8" :span="8">offset[8]</w-col>
    </w-row>
    
    <h5>push</h5>
    <w-row :gutter="10" class="layout-row1">
      <w-col class="layout-col" :span="8">span[8]</w-col>
      <w-col class="layout-col" :push="8" :span="8">push[8]</w-col>
    </w-row>

    <h5>pull</h5>
    <w-row :gutter="10" class="layout-row1">
      <w-col class="layout-col" :span="8">span[8]</w-col>
      <w-col class="layout-col" :pull="2" :span="8">pull[2]</w-col>
    </w-row>
  </div>
</template>
<script>
export default {

}
</script>

<style>
  .layout-row1 {
    height: 30px;
    line-height: 30px;
    margin: 10px 0;
    text-align: center;
  }
  .layout-row1 > .layout-col:nth-of-type(odd) > .wuss-col-body {
    background-color: rgb(119,193,243);
  }
  .layout-row1 > .layout-col:nth-of-type(even) > .wuss-col-body{
    background-color: rgb(153,209,246);
  }
</style>

