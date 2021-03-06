import React, { Component } from 'react';
import "./App.css";
import Header from './Header';

class LiveTransactions extends Component {

    render() {
        let { quantity, name, price } = this.props;
        return (
            <tr>
                <td>{quantity}</td>
                <td>
                    <a href="#/inventory/product/{{product._id}}">{name}</a>
                </td>
                <td>
                    <span>{price}</span>
                    <br/>
                    <small className="small-text">
                        <em>(${price} each)</em>
                    </small>
                </td>
            </tr>
        );
    }
}
export default LiveTransactions;