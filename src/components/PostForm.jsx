import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import {createPostAction} from '../redux/postsReducer';
import { showAlertAction, hideAlertAction } from '../redux/appReducer';
import Alert from './Alert';

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
        };
    }

    submitHandler = (event) => {
        event.preventDefault();
        const {title} = this.state;

        if(title.trim() != ''){
            const newPost = {
                title,
                id: Date.now().toString()
            }
            
            this.props.createPostAction(newPost);
        } else {
            this.props.showAlertAction();
        }
        this.setState({title: ''});
    }

    changeInputHandler = (event) => {
        this.setState(prev => ({
            ...prev,
            ...{[event.target.name]: event.target.value,}
        }))
    }
    
    render() {
        return (
            <form onSubmit={(e) => this.submitHandler(e)}>
                <div className="mb-3">
                    <label htmlFor="PostTitleInput" className="form-label">Post title</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="PostTitleInput" 
                        placeholder="Title" 
                        name='title'
                        value={this.state.title}
                        onChange={e => {
                            this.changeInputHandler(e);
                            this.props.hideAlertAction();
                        }}
                    />
                </div>
                {this.props.isAlert && <Alert message='Type the title'/>}
                <button type='submit' className='btn btn-success'>Create</button>
            </form>
        );
    }
}

const mapDispatchToProps = {
    createPostAction,
    showAlertAction,
    hideAlertAction
}

const mapStateToProps = (state) => {
    return {
        isAlert: state.app.isAlert
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);