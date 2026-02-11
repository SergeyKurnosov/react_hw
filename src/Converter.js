import './Converter.css';
import React from "react";

class Converter extends React.Component {


    decimalToBinary() {
        let number = document.getElementById("decimal-to-binary").value;
        let result = document.getElementById("decimal-to-binary-result");
        result.innerHTML = Number(number).toString(2);
    }

    decimalToHexadecimal() {
        let number = document.getElementById("decimal-to-hexadecimal").value;
        let result = document.getElementById("decimal-to-hexadecimal-result");
        result.innerHTML = Number(number).toString(16);
    }

    binaryToDecimal() {
        let number = document.getElementById("binary-to-decimal").value;
        let result = document.getElementById("binary-to-decimal-result");
        result.innerHTML = parseInt(number, 2);
    }
    hexadecimalToDecimal() {
        let number = document.getElementById("hexadecimal-to-decimal").value;
        let result = document.getElementById("hexadecimal-to-decimal-result");
        result.innerHTML = parseInt(number, 16);
    }

    binaryToHexadecimal() {
        let number = document.getElementById("binary-to-hexadecimal").value;
        let result = document.getElementById("binary-to-hexadecimal-result");
        let decimal = parseInt(number, 2);
        result.innerHTML = Number(decimal).toString(16);
    }


    render() {
        return (
            <details>
                <summary>Number System</summary>
                <input type="number" id="decimal-to-binary" min={0} placeholder="Десятичное в двоичное" onChange={this.decimalToBinary} />
                <div id="decimal-to-binary-result"></div>

                <input type="number" id="decimal-to-hexadecimal" min={0} placeholder="Десятичное в шестнадцатеричное" onChange={this.decimalToHexadecimal}  />
                <div id="decimal-to-hexadecimal-result"></div>

                <input type="number" id="binary-to-decimal" min={0} placeholder="Двоичное в десятичное" onChange={this.binaryToDecimal}  />
                <div id="binary-to-decimal-result"></div>

                <input type="text" id="hexadecimal-to-decimal" min={0} placeholder="Шестнадцатеричное в десятичное" onChange={this.hexadecimalToDecimal}  />
                <div id="hexadecimal-to-decimal-result"></div>

                <input type="text" id="binary-to-hexadecimal" min={0} placeholder="Двоичное в шестнадцатеричное" onChange={this.binaryToHexadecimal}  />
                <div id="binary-to-hexadecimal-result"></div>

            </details>
        )

    }

}


export default Converter;