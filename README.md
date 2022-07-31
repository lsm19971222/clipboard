##安装
```
npm install clipboard
```
##使用
```
const { default: clipboard } = require('clipboard')
导入样式
import 'clipboard_zh/dist/styles/index.css'
```

##参数说明
```
接收一个对象(下方数值类型无需带单位)
{
  innerData,       //想要展示的文本信息(必传)
  width = '',      //文本框宽度
  height = '',     //文本框高度
  textColor = '',  //文本字体颜色
  font-weight: '', //文本粗细
  font-size: ''    //字体大小
}
```
