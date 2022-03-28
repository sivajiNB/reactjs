import React from "react";

class FetchAPI extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
        });
      });
  }
  render() {
    return (
      <table className="tat" border="1">
        <th>username</th>
        <th>Full_Name</th>
        <th>User_Email</th>
        <th>website</th>
        {this.state.items.map((item) => (
          <tr>
            <td>{item.username}</td>
            <td> {item.name}</td>
            <td> {item.email}</td>
            <td>{item.website}</td>
          </tr>
        ))}
      </table>
    );
  }
}

export default FetchAPI;
