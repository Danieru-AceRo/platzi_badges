import React from 'react';



class BadgeForm extends React.Component {
    // state = {

    // }
    // handleChange = e => {
    //     // console.log({
    //     // name: e.target.name,
    //     // value: e.target.value,
    //     // })
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }
    handleClick = e => {
        console.log(
            'was clicked'
        )
    };
    // handleSubmit = e => {
    //     e.preventDefault();
    //     console.log('was sumited')
    // }
    render() {
        return(
            <React.Fragment>
                
                <form onSubmit= {this.props.onSubmit}>
                    <div className='form-group'>
                        <label>First Name</label>
                        <input 
                            type="text"
                            onChange= {this.props.onChange}
                            className= 'form-control'
                            name= 'firstName'
                            value = {this.props.formValue.firstName}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Last Name</label>
                        <input 
                            type="text"
                            onChange= {this.props.onChange}
                            className= 'form-control'
                            name= 'lastName'
                            value = {this.props.formValue.lastName}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input 
                            type="emailn"
                            onChange= {this.props.onChange}
                            className= 'form-control'
                            name= 'email'
                            value = {this.props.formValue.email}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Job Title</label>
                        <input 
                            type="text"
                            onChange= {this.props.onChange}
                            className= 'form-control'
                            name= 'jobTitle'
                            value = {this.props.formValue.jobTitle}
                        />
                    </div>
                    <div className='form-group'>
                        <label>twitter</label>
                        <input 
                            type="text"
                            onChange= {this.props.onChange}
                            className= 'form-control'
                            name= 'twitter'
                            value = {this.props.formValue.twitter}
                        />
                    </div>
                    <button
                        onClick={this.handleClick} 
                        className = 'btn btn-primary' 
                    >
                        Save
                    </button>

                    {this.props.error && (
                        <p className='text-danger'>{this.props.error.message}</p>
                    )}
                </form>
            </React.Fragment>
        )
    }
}

export default BadgeForm