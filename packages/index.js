import './assets/iconfont.js'
import './assets/common.css';
import Button from './button/index.js';
import Picker from './picker/index.js';
import Icon from './icon/index.js';
import Steps from './steps/index.js';
import Step from './step//index.js';
import Tag from './tag//index.js';

const components = [
  Button,
  Picker,
  Icon,
  Steps,
  Step,
  Tag
];

const install = function (Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Button,
  Picker,
  Icon,
  Steps,
  Step,
  Tag
};
