import React, { Component } from 'react';
import { API_ENDPOINT } from '../env';
import { Link } from 'react-router-dom';
import Owner from '../components/Owner';
import axios from 'axios'; // Import Axios

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownersData: [],
      error: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.fetchOwnersData();
  }

  fetchOwnersData() {
    axios.get(`${API_ENDPOINT}/owners`)
      .then(response => {
        this.setState({
          ownersData: response.data,
          error: null,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({
          error: error.message,
          isLoading: false
        });
      });
  }

  render() {
    const { ownersData, error, isLoading } = this.state;

    return (
      <div>
        <Link to="/"><button>Go back</button></Link>
        <h1>Welcome to PetClinic</h1>

        <div className="container">
          <Link to="/PetClinic/Create"><button>Create new owner</button></Link>

          <h2>Owners</h2>
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : ownersData.length === 0 ? (
            <p>No owners found</p>
          ) : (
            <table className="table table-bordered">
              <tbody>
                {ownersData.map(owner => (
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
                    <td>
                      <Link to={`/PetClinic/View/${owner.id}`}>
                        <button>View</button>
                      </Link>
                      &nbsp;
                      <button>Delete</button>
                      {/* Add other owner details here if needed */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
  }
}

export default Index;