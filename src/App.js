import React, { Component } from 'react';
import './App.css';
import AppleItem from "./AppleItem"

class App extends Component {
  constructor(props) {
    super(props);
    let index = 0;
    let name = "红苹果 --";
    let num = parseInt(Math.random() * 100000, 10);   //取随机数
    let weight = parseInt(Math.random() * 1000, 10);  //取随机数
    let obj = { "name": name, "num": num, "weight": weight, "index": index };
    let list = [];
    list.push(obj);   //初始化初始状态的数据
    this.state = {
      list: list,  //保存子组件变量的对象
      number: list.length,  //当前苹果数量
      totalWeight: list[0].weight,   //当前苹果的总重量
      eatApples: 0,  //吃掉苹果的数量
      eatWeighth: 0   //吃掉苹果的重量
    };
  }

  handleAddClick = () => {
    let { list, number, totalWeight } = this.state;
    let name = "红苹果 --";
    let num = parseInt(Math.random() * 100000, 10);
    let weight = parseInt(Math.random() * 1000, 10);
    let index;
    if (list.length !== 0) {
      index = list[list.length - 1].index;   //如果子组件的个数不为零,则取上一个组件的index,然后+1
      index++;
    } else {
      index = 0;  //如果子组件被清空,则重新计数
    }
    let obj = { "name": name, "num": num, "weight": weight, "index": index };
    list.push(obj);  //保存新的数据到数组
    totalWeight = 0  //清空总重量
    list.forEach((v) => {
      totalWeight += v.weight;   //求总重量
    })
    number = list.length;
    this.setState({  //刷新状态
      list: list,
      number: number,
      totalWeight: totalWeight
    })
  }

  changeWeight = (apple) => {
    let { list, totalWeight } = this.state;
    list.forEach((v) => {
      if (v.weight === apple) {
        v.weight = parseInt(Math.random() * 1000, 10);   //如果苹果的重量和我们点击的那个苹果的重量相等,就改变点击的那个苹果的重量
      }
    })
    totalWeight = 0;
    list.forEach((v) => {
      totalWeight += v.weight;   //对苹果的重量重新求和
    })
    this.setState({
      list: list,
      totalWeight: totalWeight
    })
  }

  eat = (index) => {
    let { list, number, totalWeight, eatApples, eatWeighth } = this.state;
    let hasEatWeight = list.filter((v) => {
      return v.index === index;
    })
    eatWeighth += hasEatWeight[0].weight   //过滤出吃掉的苹果,累计求和一共吃掉的重量 
    let left = list.filter((v) => {
      return v.index !== index;
    })
    number = left.length;  //过滤出剩下的苹果,其长度就是当前苹果的数量
    eatApples++;   //对每次吃掉的苹果进行计数
    totalWeight = 0;
    left.forEach((v) => {
      totalWeight += v.weight;   //累计当前苹果的重量
    })

    this.setState({
      list: left,
      number: number,
      eatApples: eatApples,
      totalWeight: totalWeight,
      eatWeighth: eatWeighth
    })
  }

  render() {
    let {list,number,totalWeight,eatApples,eatWeighth} = this.state;
    return (
      <div className="appleBasket">
        <div className="title">苹果篮子</div>
        <div className="stats">
            <div className="section">
            <div className="head">当前</div>
            <div className="content">{number}个苹果,{totalWeight}克</div>
          </div>
          <div className="section">
            <div className="head">已吃掉</div>
            <div className="content">{eatApples}个苹果,{eatWeighth}克</div>
          </div>
        </div>
        {/* 通过数据生成子元素,数组有多少对象就有多少子元素,并向子元素传递方法和值 */}
        {list.map((value,key) => <AppleItem changeWeight={(apple) => this.changeWeight(apple)} eat={(apple) => this.eat(apple)} key={key} apple={value} index={value.index}/>)}
        <div className="btn-div">
          <button onClick={this.handleAddClick}>摘苹果</button>
        </div>
      </div>
    );
  }
}

export default App;
