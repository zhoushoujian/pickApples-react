import React from 'react';

type IProps = {
  changeWeight: (weight: number) => void;
  eat: (index: number) => void;
  apple: IApple;
  index: number;
};

interface IApple {
  name: string;
  num: number;
  weight: number;
  index: number;
}

const AppleItem = ({ changeWeight, eat, apple, index }: IProps) => {
  const changeAppleWeight = () => {
    changeWeight(apple.weight);
  };

  const eatApple = () => eat(index);

  return (
    <div className='appleItem'>
      <div className='apple'>
        <img src='./apple.png' alt='apple' />
      </div>
      <div className='info'>
        <div className='name'>
          {apple.name}
          {apple.num}号
        </div>
        <div className='weight'>{apple.weight}克</div>
      </div>
      <div className='btn-div'>
        <button onClick={eatApple}>吃掉</button>
        <button onClick={changeAppleWeight}>重量改变</button> {/* 调用方法,将子组件方法传递到父组件 */}
      </div>
    </div>
  );
};

export default AppleItem;
