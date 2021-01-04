import { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import * as Interfaces from './Interfaces';
import './ColorBox.css';

export default class ColorBox extends Component<{
  color: Interfaces.Color;
}> {
  state = {
    copied: false,
  };

  handleCopy = () => {
    this.setState({ copied: true }, () =>
      setTimeout(() => this.setState({ copied: false }), 1000)
    );
  };

  render() {
    const { color, name } = this.props.color;
    const { copied } = this.state;

    return (
      <CopyToClipboard text={color} onCopy={this.handleCopy}>
        <div style={{ background: color }} className="ColorBox">
          <div
            style={{ background: color }}
            className={`copy-overlay ${copied ? 'show' : ''}`}
          />
          <div className={`copy-msg ${copied ? 'show' : ''}`}>
            <h1>copied!</h1>
            <p>{color}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>

            <button className="copy-button">Copy</button>
          </div>

          <span className="see-more">More</span>
        </div>
      </CopyToClipboard>
    );
  }
}
