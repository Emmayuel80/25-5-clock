import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
export default class TimerLengthControl extends React.Component {
    render() {
      return (
        <Paper className="length-control" style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
          <div id={this.props.titleID}>{this.props.title}</div>
          <Button
            className="btn-level"
            id={this.props.minID}
            variant="contained"
            color="secondary"
            onClick={this.props.onClick}
            value="-"
          >
            ➖
          </Button>
          <div className="btn-level" id={this.props.lengthID}>
            {this.props.length}
          </div>
          <Button
            className="btn-level"
            variant="contained"
            color="primary"
            id={this.props.addID}
            onClick={this.props.onClick}
            value="+"
          >
            ➕
          </Button>
        </Paper>
      );
    }
  }