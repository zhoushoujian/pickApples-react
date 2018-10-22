import React , {Component} from 'react';

class AppleItem extends Component {

  changeWeight = () => {
    this.props.changeWeight(this.props.apple.weight)
  }

  eat = () => {
    this.props.eat(this.props.index); //将参数也一起传到父组件
  }

  render() {
    let {apple} = this.props;
    return (
      <div className="appleItem">
        <div className="apple">
          <img src="./apple.png" alt="apple" / >
        </div>
        <div className="info">
          <div className="name">
              {apple.name}{apple.num}号
          </div>
          <div className="weight">
            {apple.weight}克
          </div>
        </div>
        <div className="btn-div">
          <button onClick={this.eat}>吃掉</button>
          <button onClick={this.changeWeight}>重量改变</button>   {/* 调用方法,将子组件方法传递到父组件 */}
        </div>
      </div> 
    )
  }
}

export default AppleItem;