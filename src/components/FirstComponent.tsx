import * as React from "react";

export interface FirstComponentProps { author: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<FirstComponentProps, {}> {
    render() {
        return <h1>Hello from {this.props.author} and {this.props.framework}!</h1>;
    }
}