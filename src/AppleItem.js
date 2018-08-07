import React , {Component} from 'react';

class AppleItem extends Component {
    constructor(props){
        super(props);
    }

    changeWeight = () => {
        let {apple} = this.props;
        setTimeout(function(){
          this.props.changeWeight(apple.weight)
        }.bind(this),300)  //通过回调函数传递信息到父组件
    }

    eat = () => {
        let {index} = this.props;
        this.props.eat(index);  //将参数也一起传到父组件
    }

    render() {
        let {apple} = this.props;
        //console.warn("apple",apple)
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