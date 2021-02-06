import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        isEditMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.status !== this.props.status && !this.state.isEditMode) this.setState({status: this.props.status});
    }

    activateEditMode = () => {
        this.setState({
            isEditMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            isEditMode: false
        })
        this.props.updateUserStatus(this.state.status);
    }

    onInputChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {this.state.isEditMode ?
                    <input onChange={(e) => this.onInputChange(e)} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    :
                    <p onTouchEnd={this.activateEditMode} onDoubleClick={this.activateEditMode}>{this.props.status}</p>
                }
            </div>
        )
    }
}

export default ProfileStatus;