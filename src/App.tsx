import React from 'react';
import FetchedPosts from './components/FetchedPosts';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import { createPostAction } from './redux/postsReducer';

function App() {
	return (
		<div className="container pt-3">
			<div className='row'>
				<div className='col'> 
					<PostForm  />
				</div>
			</div>
			<div className='row'>
				<div className='col'>
					<h2>Sync Posts:</h2> 
					<PostList />
				</div>
				<div className='col'> 
					<h2>Async Posts:</h2>
					<FetchedPosts />
				</div>
			</div>
		</div>
	);
}

export default App;
