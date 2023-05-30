import React from "react";
import { Alert, Button } from "antd";

import icons from "./icons";

export class AlertError extends React.Component {
    render() {
        return (
          <Alert
              className={"sb-alert-error"}
              type="error"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15.8" viewBox="0 0 19 20.8">
                  <g id="Group_1471" data-name="Group 1471" transform="translate(-16 -9.6)">
                    <circle id="Ellipse_401" data-name="Ellipse 401" cx="9.5" cy="9.5" r="9.5" transform="translate(16 11)" fill="#ff372a" opacity="0.38"/>
                    <text id="_" data-name="!" transform="translate(24 25)" fill="#ff372a" stroke="#ff372a" strokeWidth="0.4" fontSize="14" fontFamily="Poppins-Regular, Poppins"><tspan x="0" y="0">!</tspan></text>
                  </g>
                </svg>
              }
              message={this.props.message}
              showIcon
          />
        );
    }
}
export class AlertInfo extends React.Component {
  render() {
      return (
          <Alert
              className={"sb-alert-info"}
              type="info"
              icon={icons.like}
              message={this.props.message}
              showIcon
              action={this.props.action}
          />
      );
  }
}

export class AlertWarning extends React.Component {
  render() {
      return (
        <Alert
            className={"sb-alert-warning"}
            type="warning"
            message={this.props.message}
            showIcon
        />
      );
  }
}

export class AlertWarningPass extends React.Component {
    render() {
        return (
          <Alert
           
              className={"alert-warning-pass-v2"}
              type="warning"
              message={this.props.message}
              showIcon
          />
        );
    }
  }

export class AlertSuccess extends React.Component {
    render() {
        return (
            <Alert
                className={"sb-alert-success"}
                type="success"
                message={this.props.message}
                showIcon
            />
        );
    }
}

