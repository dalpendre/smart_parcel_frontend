import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Owner extends Component {
  render() {
    const { data: owner } = this.props;

    return (
      <tr key={owner.id}>
        <td>{owner.name}</td>
        <td>
          <img
            src={owner.avatar}
            alt={owner.name}
            className="img-fluid"
            style={{ maxWidth: '50px', maxHeight: '50px' }}
          />
        </td>
      </tr>
    );
  }
}

export default Owner;