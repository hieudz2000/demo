import React from "react";


export class TwoColumn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      className:''
    };
  }
  
  componentDidMount () {
    
  }
  
  render() {
    return <div style={{paddingTop:26,...(this.props.style||{})}} className={this.props.className||''}>
        <div style={{display: "inline-block",verticalAlign: "top",padding: "14px 26px 0 12px",float:"left"}} className="sb-column-left-2C">
          {this.props.columnLeft}
        </div>
        <div style={{marginLeft:81}} className="sb-column-right-2C">
           {this.props.columnRight}
        </div>
    </div>;
  }
}
