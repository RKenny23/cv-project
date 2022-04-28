import React, { Component } from 'react';

class SavePageBtn extends Component {
  handlePageLayout = () => {
    const buttons = document.getElementsByTagName('button');
    Array.from(buttons, (button) => (button.style.display = 'none'));

    // disable input field, pointer cursor, and hover effect
    const inputs = document.getElementsByTagName('input');
    Array.from(inputs, (input) => {
      input.style.backgroundColor = 'white';
      input.style.color = 'black';
      input.style.cursor = 'default';
      input.disabled = true;
      return input;
    });

    // disable render info hover effect
    const renderDivs = document.getElementsByClassName('render-info');
    Array.from(renderDivs, (renderDiv) => {
      renderDiv.style.backgroundColor = 'white';
      renderDiv.style.border = 'none';
      return renderDiv;
    });

    // adjust section margins
    const workSection = document.querySelector('.work-section');
    workSection.style.marginBottom = '40px';
  };
  render() {
    return (
      <>
        <button className="save-page-btn" onClick={this.handlePageLayout}>
          Save CV
        </button>
      </>
    );
  }
}

export default SavePageBtn;
