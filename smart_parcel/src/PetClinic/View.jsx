import React, { Component } from 'react';
import { API_ENDPOINT } from '../env';
import { Link } from 'react-router-dom';
import Owner from '../components/Owner';
import { useParams } from 'react-router-dom'; // Import useParams hook
import axios from 'axios';

// Higher Order Component (HOC) to pass route params to a class component
const withRouteParams = (Component) => (props) => {
  const params = useParams();
  return <Component {...props} params={params} />;
};

class View extends Component 
{
  constructor(props) {
    super(props);
    this.state = {
      ownerData: null,
      error: null,
      isLoading: true,
    };
  }

  fetchOwnersData(id) 
  {
    axios.get(`${API_ENDPOINT}/owners/${id}`)
      .then(response => {
        this.setState({
          ownerData: response.data,
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

  componentDidMount() {
    const { id } = this.props.params; // Access id from route params

    this.fetchOwnersData(id); // Fetch data using the extracted id
  }

  render() {
    const { ownerData, error, isLoading } = this.state;

    return (
      <div>
        <div>
          <Link to="/PetClinic/Index">
            <button>Go back</button>
          </Link>
          <h2>Owner Details</h2>
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : ownerData ? (
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Name</th>
                  <th>Avatar</th>
                </tr>
              </thead>
              <tbody>
                <Owner key={ownerData.id} data={ownerData} />
              </tbody>
            </table>
          ) : (
            <p>No owner details found</p>
          )}
        </div>
        {/*Pet table here */}
        <div>
            <h2>Pets</h2>
        </div>
      </div>
    );
  }
}

export default withRouteParams(View); // Wrap the View component with HOC