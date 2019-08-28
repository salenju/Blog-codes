import React from 'react';
import _RowCroll04 from './_RowCroll04'
import audioData from './123.mp3'

const RowCrollDemo04 = (props) => {

  return (
    <div>
      <_RowCroll04 time={2} startCrollCount={8}>
        <p>第1条数据</p>
        <p>第2条数据</p>
        <p>第3条数据</p>
        <p>第4条数据</p>
        <p>第5条数据</p>
        <p>第6条数据</p>
        <p>第7条数据</p>
        <p>第8条数据</p>
        <p>第9条数据</p>
        <p>第10条数据</p>
        <p>第11条数据</p>
        <p>第12条数据</p>
        <p>第13条数据</p>
        <p>第14条数据</p>
        <p>第15条数据</p>
        <p>第16条数据</p>
        <p>第17条数据</p>
        <p>第18条数据</p>
        <p>第19条数据</p>
      </_RowCroll04>
      <audio autoPlay='true' >
        <source src={audioData} />
      </audio>
    </div>
  )
}

export default RowCrollDemo04