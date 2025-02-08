// Task 1: Code Correction
import { Component } from "react";
import '../ProfileStyles.css'

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Alex',
            hobbies: ['Reading', 'Painting', 'Puzzles'],
            editMode: false
        };

        this.changeName = this.changeName.bind(this)
    }

    setEditMode = () => {
        this.setState({ editMode: !this.state.editMode });
    }

    changeName() {
        this.setState({ name: 'Charlie' });
    }

    render() {
        return (
            <div className="user-profile">
                <h1>User Profile</h1>
                <h2>Name: {this.state.name}</h2>
                {this.state.editMode && <button onClick={this.changeName}>Change Name</button>}
                <br />
                <button onClick={this.setEditMode}>{this.state.editMode ? 'View' : 'Edit'}</button>

                <h2>Hobbies:</h2>
                <ul>
                    {this.state.hobbies.map((hobby, index) => (
                        <li key={index}>{hobby}</li>
                    ))}
                </ul>
            </div>
        );
    }
}


export default UserProfile;