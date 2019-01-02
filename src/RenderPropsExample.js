import React from 'react';

class PublicComponent extends React.Component {
    state = {
        data: "Sang is the hero we don't deserve."
    };
    render(){
        return (
            <div>
                {this.props.render(this.state)}
            </div>
        )
    }
}

const InjectedComponent = ({data}) => (
    <div>{data}</div>
);

//usage
export const Usage = () => (
    <PublicComponent render={InjectedComponent} />
);