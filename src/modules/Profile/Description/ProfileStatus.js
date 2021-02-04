import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        isEditMode: false
    }

    toggleEditMode = () => {
        this.setState({
            isEditMode: !this.state.isEditMode
        })
    }

    render() {
        return (
            <div>
                {this.state.isEditMode ?
                    <input autoFocus={true} onBlur={this.toggleEditMode} value={this.props.status}/>
                    :
                    <p onDoubleClick={this.toggleEditMode}>{this.props.status}</p>
                }
            </div>
        )
    }
}

export default ProfileStatus;