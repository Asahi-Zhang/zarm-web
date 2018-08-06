webpackJsonp([31],{148:function(n,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=t(65),l=t.n(e),i=t(66),a=t.n(i),s=t(67),d=t.n(s),u=t(68),r=t.n(u),M=t(69),g=t.n(M),m=t(269),c=(t(294),t(272),function(n){function o(){return a()(this,o),r()(this,(o.__proto__||l()(o)).apply(this,arguments))}return g()(o,n),d()(o,[{key:"document",value:function(){return t(478)}}]),o}(m.a));o.default=c},478:function(n,o){n.exports="## Modal 模态框\n在当前页面打开一个模态对话框。\n\n### 基础用法\n\nModal组件的基础用法。\n\n:::demo 可以通过`Modal.Header`,`Modal.Body`,`Modal.Footer`子组件定义模态框的不同部分。\n\n```js\n  constructor(props) {\n    super(props);\n    this.state = {\n      modalVisible: false\n    };\n  }\n  toggleModal() {\n    this.setState({\n      modalVisible: !this.state.modalVisible\n    });\n  }\n  render() {\n    const { modalVisible } = this.state;\n    return (\n      <div>\n        <Button theme=\"info\" onClick={() => this.toggleModal()}>展示模态框</Button>\n        <Modal visible={modalVisible}>\n          <Modal.Header title=\"标题\" onClose={() => this.toggleModal()} />\n          <Modal.Body className=\"test\">\n            我是一个模态框\n          </Modal.Body>\n          <Modal.Footer>\n            <Button onClick={() => this.toggleModal()}>取消</Button>\n            <Button theme=\"success\" onClick={() => { alert('你点击了确定') }}>确定</Button>\n          </Modal.Footer>\n        </Modal>\n      </div>\n    )\n  }\n```\n:::\n\n### 不同的动画\n\n支持多种展示动画。\n\n:::demo 可以通过`animationType`属性设置不同的动画方式，默认`zoom`。\n\n```js\n  constructor(props) {\n    super(props);\n    this.state = {\n      modalVisible: false,\n      animationType: 'zoom'\n    };\n  }\n  toggleModal(animationType) {\n    this.setState({\n      modalVisible: !this.state.modalVisible,\n      animationType\n    });\n  }\n  render() {\n    const { modalVisible, animationType } = this.state;\n    return (\n      <div className=\"buttons\">\n        <Button onClick={() => this.toggleModal('zoom')}>zoom</Button>\n        <Button onClick={() => this.toggleModal('door')}>door</Button>\n        <Button onClick={() => this.toggleModal('flip')}>flip</Button>\n        <Button onClick={() => this.toggleModal('rotate')}>rotate</Button>\n        <Button onClick={() => this.toggleModal('slideUp')}>slideUp</Button>\n        <Button onClick={() => this.toggleModal('slideDown')}>slideDown</Button>\n        <Button onClick={() => this.toggleModal('slideLeft')}>slideLeft</Button>\n        <Button onClick={() => this.toggleModal('slideRight')}>slideRight</Button>\n        <Button onClick={() => this.toggleModal('moveUp')}>moveUp</Button>\n        <Button onClick={() => this.toggleModal('moveDown')}>moveDown</Button>\n        <Button onClick={() => this.toggleModal('moveLeft')}>moveLeft</Button>\n        <Button onClick={() => this.toggleModal('moveRight')}>moveRight</Button>\n        <Modal visible={modalVisible} animationType={animationType}>\n          <Modal.Header title=\"标题\" onClose={() => this.toggleModal()} />\n          <Modal.Body>\n            我是一个模态框\n          </Modal.Body>\n          <Modal.Footer>\n            <Button onClick={() => this.toggleModal()}>取消</Button>\n            <Button theme=\"success\" onClick={() => { alert('你点击了确定') }}>确定</Button>\n          </Modal.Footer>\n        </Modal>\n      </div>\n    )\n  }\n```\n:::\n\n### 圆角模态框\n\n可以设置圆角模态框。\n\n:::demo 使用`radius`属性设置圆角\n\n```js\n  constructor(props) {\n    super(props);\n    this.state = {\n      modalVisible: false\n    };\n  }\n  toggleModal() {\n    this.setState({\n      modalVisible: !this.state.modalVisible\n    });\n  }\n  render() {\n    const { modalVisible } = this.state;\n    return (\n      <div>\n        <Button theme=\"info\" onClick={() => this.toggleModal()}>圆角模态框</Button>\n        <Modal visible={modalVisible} radius>\n          <Modal.Header title=\"标题\" onClose={() => this.toggleModal()} />\n          <Modal.Body>\n            我是一个模态框\n          </Modal.Body>\n          <Modal.Footer>\n            <Button onClick={() => this.toggleModal()}>取消</Button>\n            <Button theme=\"success\" onClick={() => { alert('你点击了确定') }}>确定</Button>\n          </Modal.Footer>\n        </Modal>\n      </div>\n    )\n  }\n```\n:::\n\n\n### Modal Attributes\n| 参数      | 说明    | 类型      | 可选值       | 默认值   |\n|---------- |-------- |---------- |-------------  |-------- |\n| visible    | 是否可见  | boolean  |   -            |    false     |\n| width     | 宽度   | number  |   -            |    600     |\n| radius     | 是否圆角   | boolean    | - | false   |\n| animationType     | 动画方式  | string    | zoom,door,flip... | zoom   |\n| animationDuration     | 动画时长(ms)  | number   | - | 300  |\n\n\n### Modal Events\n| 事件名称 | 说明 | 回调参数 |\n|---------- |-------- |---------- |\n| onMaskClick | 点击遮罩触发的事件 | — |\n\n\n### Modal.Header Attributes\n| 参数      | 说明    | 类型      | 可选值       | 默认值   |\n|---------- |-------- |---------- |-------------  |-------- |\n| title    | 标题  | string  |   -            |    ''     |\n\n### Modal.Header Events\n| 事件名称 | 说明 | 回调参数 |\n|---------- |-------- |---------- |\n| onClose | 点击关闭图标触发的事件 | — |"}});