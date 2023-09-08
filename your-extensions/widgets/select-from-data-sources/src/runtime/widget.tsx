import { React, type AllWidgetProps } from 'jimu-core'
import { type IMConfig } from '../config'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  return (
    <div className="widget-demo jimu-widget m-2">
      <p>Amit's Widget</p>
      <p>exampleConfigProperty: {props.config.exampleConfigProperty.length}</p>
      <p>exampleConfigProperty: {props.config.exampleConfigProperty}</p>
    </div>
  )
}

export default Widget
