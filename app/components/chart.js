import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

export default (props) => {
  return (
    <div>
      <Sparklines data={props.data} width={props.width} height={props.height}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} ({props.unit})</div>
    </div>
  )
}

function average(arr) {
  console.log(arr);
  return (arr.reduce( (p, c) => {
    return p + c
  }) / arr.length).toFixed()
}
