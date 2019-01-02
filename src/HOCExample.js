import React from 'react';

// This function takes a component...
function addPropsData(WrappedComponent) {
    // ...and returns another component...
    return class extends React.Component {

        render() {
            const myData = "Sang is the hero we all needed";
            // ... and renders the wrapped component with the fresh data!
            // Notice that we pass through any additional props
            return <WrappedComponent data={myData} {...this.props} />;
        }
    };
}

const NormalComponent = ({data}) => (
    <div>some data: {data}</div>
);

const AddedPropsDataComponent = addPropsData(NormalComponent);


