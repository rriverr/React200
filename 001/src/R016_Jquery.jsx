import React from "react";
import $ from "jquery";

class R016_Jquery extends React.Component {
  input_alert = (e) => {
    const input_val = $("#inputId").val();
    alert(input_val);
  };

  render() {
    return (
      <div>
        <h2>[THIS IS Jquery]</h2>
        <input id="inputId" name="inputName" />
        <button id="buttonId" onClick={(e) => this.input_alert(e)}>
          Jquery Button
        </button>
      </div>
    );
  }
}

export default R016_Jquery;
