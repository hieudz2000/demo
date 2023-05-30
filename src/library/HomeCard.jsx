import React from "react";


export class HomeCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      className:''
    };

    this.HomeCard = React.createRef()
  }
  resizeWindow = (width)=>{
    // if(width > 300 && width < 365){
    //   this.state.className!="max365"&&this.setState({className:"max365"})
    // }
    // else 
    if(width <= 300){
      this.state.className!="max300"&&this.setState({className:"max300"})
    }
    else if(this.state.className!=""){
      this.setState({className:""})
    }
  }
  componentDidMount () {
    this.HomeCard&&this.HomeCard.current&&this.resizeWindow(this.HomeCard.current.offsetWidth);
    window.addEventListener('resize', ()=>{
      this.HomeCard&&this.HomeCard.current&&this.resizeWindow(this.HomeCard.current.offsetWidth);
    })
  }
  componentWillUnmount() {
    window.removeEventListener('resize', ()=>{})
  }

  render() {
    return <div 
      ref={this.HomeCard}
      style={this.props.style?this.props.style:{}}
      className={"home-card "+this.state.className}
    >
      <div className={"hcard-box"}>
        {this.props.left_content&&<div className={"hcard-box-left"} style={this.props.left_style?this.props.left_style:{}}>
          {this.props.left_content}
        </div>}
        <div className={"hcard-box-center"} style={{...(!this.props.right_content?{marginRight:10}:{}),...(this.props.center_style?this.props.center_style:{})}}>
          <div>
            <div className={"hcard-box-center-title"} >{this.props.title}</div>
            {this.props.des&&<div>{this.props.des}</div>}
          </div>
        </div>
        {this.props.right_content&&<div className={"hcard-box-right"} style={this.props.right_style?this.props.right_style:{}}>
          {this.props.right_content}
        </div>}
      </div>
    </div>;
  }
}
