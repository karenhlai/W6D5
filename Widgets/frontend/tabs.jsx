import React from 'react';

export class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0 
    };
  }

  render () {
    const tabbos = this.props.tabbos.map((tab, idx) => {
      return (<h1>{tab.title}</h1>);
    });

    return (
      <>
        {tabbos}
      </>
    );
  }
}


// props = {
//   tabbos: [stuff],
//   stuff: "cheese"
// }