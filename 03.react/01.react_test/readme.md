## 总结三大属性
* state
  * 状态
  * 作用：更新页面的变化
  * 使用：
    * 初始化 state = { xxx: xxx }
    * 读取 this.state.xxx
    * 更新 this.setState({xxx: xxx})
* props
  * 属性
  * 作用：组件外向组件内传递变化的数据（注意：组件内不要修改props）
  * 使用：
    * 定义类型和必要性限制 static propTypes = { xxx: PropTypes.string.isRequired }
    * 定义默认值 static defaultProps = { xxx: xxx }
    * 读取 this.props.xxx
* refs
  * 引用
  * 作用：用来获取真实DOM元素
  * 使用：
    * stringRef
    * funcRef
    * createRef