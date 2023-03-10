import React, { useState } from 'react';
import './css/ImageUpload.css';

export const ImageUpload = ({ setFileSubmitted }) => {
	const [selectedFile, setSelectedFile] = useState(null);
	const [isFilePicked, setIsFilePicked] = useState(false);
	const [submitDisabled, setSubmitDisabled] = useState(false);

	const changeHandler = (event) => {
		if (event.target.files.length === 0) {
			setSelectedFile(null);
			setIsFilePicked(false);
			setSubmitDisabled(true);
			return
		}
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

	const handleSubmission = () => {
		const formData = new FormData();
		formData.append('file', selectedFile);
		setSubmitDisabled(true);

		//I should make a hook for this
		fetch(
			'/upload',
			{
				method: 'POST',
				body: formData,
				enctype: 'multipart/form-data'
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success POST /images:', result);
				setFileSubmitted(true);
				setIsFilePicked(false);
				setSelectedFile(null);
				setSubmitDisabled(false);
			})
			.catch((error) => {
				console.error('Error POST /images:', error);
			});
	};

	const handleDiabledButton = () => {
		if (!isFilePicked || submitDisabled) {
			return true
		}
		return false
	}

	const handleDiabledButtonCss = () => {
		if (!isFilePicked || submitDisabled) {
			return 'darkgrey'
		}
		return 'white'
	}

	return (
		//Using the form element is probably a better idea
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
				<button
					className='submitButton'
					disabled={handleDiabledButton()}
					onClick={handleSubmission}
					style={{ backgroundColor: `${handleDiabledButtonCss()}` }}
				>Submit</button>
			</div>
		</div>
	);
};
