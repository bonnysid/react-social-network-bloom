import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        isEditMode: false,
        status: this.props.status
    }

    toggleEditMode = () => {
        this.setState({
            isEditMode: !this.state.isEditMode
        })
    }

    onInputChange = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    render() {
        return (
            <div>
                {this.state.isEditMode ?
                    <input onChange={this.onInputChange} autoFocus={true} onBlur={this.toggleEditMode} value={this.state.status}/>
                    :
                    <p onDoubleClick={this.toggleEditMode}>{this.props.status}</p>
                }
            </div>
        )
    }
}

export default ProfileStatus;