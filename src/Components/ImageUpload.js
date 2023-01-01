import React, { useState } from 'react';
import './css/ImageUpload.css';

export const ImageUpload = ({setFileSubmitted}) => {
	const [selectedFile, setSelectedFile] = useState(null);
	const [isFilePicked, setIsFilePicked] = useState(false);
	const [submitDisabled, setSubmitDisabled] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

	const handleSubmission = () => {
		const formData = new FormData();
		formData.append('file', selectedFile)
		setSubmitDisabled(true)

		fetch(
			'http://ec2-3-143-24-17.us-east-2.compute.amazonaws.com/upload',
			{
				method: 'POST',
				body: formData,
				enctype: 'multipart/form-data'
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
				setFileSubmitted(true)
				setIsFilePicked(false)
				setSelectedFile(null)
				setSubmitDisabled(false)
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	return (
		<div className='formContainer'>
			<input className='fileButton' type="file" name="file" onChange={changeHandler} />
			{isFilePicked ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details, only PNG allowed.</p>
			)}
			<div>
				<button className='submitButton' disabled={submitDisabled} onClick={handleSubmission}>Submit</button>
			</div>
		</div>
	)
}
