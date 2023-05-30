import React from "react";
import { Button } from "antd";
import colors from "./colors";
import { Link } from "react-router-dom";

export class SBButton extends React.Component {
    render() {
        var style = {};
        if (this.props.disabled) {
            style = {
                boxShadow: "0 1px 0 0 " + colors._color_bg_disabled,
                backgroundColor: colors._color_bg_disabled,
                borderColor: colors._color_bg_disabled,
                color: colors._color_text_disabled
            };
        } else if (this.props.color) {
            style = {
                boxShadow: "0 1px 0 0 " + this.props.color,
                backgroundColor: this.props.color,
                borderColor: this.props.color,
                color: colors._color_white
            };
        } else {
            style = {
                boxShadow: "0 1px 0 0 " + colors._color_red,
                backgroundColor: colors._color_red,
                borderColor: colors._color_red,
                color: colors._color_white
            };
        }

        return (
            <Button
                className={"sb-button-vs1 " + (this.props.className || "")}
                onClick={() => {
                    this.props.onClick && this.props.onClick();
                }}
                onMouseEnter={(e) => {
                    this.props.onMouseEnter && this.props.onMouseEnter();
                }}
                onMouseLeave={(e) => {
                    this.props.onMouseLeave && this.props.onMouseLeave();
                }}
                loading={this.props.loading || false}
                style={{
                    verticalAlign: "middle",
                    minHeight: 36,
                    height: "auto",
                    marginTop: "-1px",
                    marginBottom: "1px",
                    textTransform: "uppercase",
                    fontWeight: "500",
                    borderRadius: 6,
                    fontSize: 12,
                    ...style,
                    ...(this.props.style || {}),
                }}
                disabled={this.props.disabled || false}
                icon={this.props.icon}
            >
                {this.props.children}
            </Button>
        );
    }
}

export class SBUpgrade extends React.Component {
    render() {
        return (
            <div
                style={{
                    borderTop: "1px solid " + colors._color_border,
                    marginTop: 20,
                    paddingTop: 8,
                    ...(this.props.style || {})
                }}
            >
                <div style={{ margin: "0px 0 5px" }}>{this.props.msg}</div>
                <div>
                    <Link to={"/plan"}>
                        <SBButton color={colors._color_red}>
                            Upgrade to Premium
                        </SBButton>
                    </Link>
                </div>
            </div>
        );
    }
}
