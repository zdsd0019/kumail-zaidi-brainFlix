import React from 'react';
import Plus from '../../assets/icons/svg/icon-upload.svg';

function UploadBtn() {
	return (
		<button className="btn-upload">
			<img src={Plus} alt=" + " className="btn" /> UPLOAD
		</button>
	);
}

export default UploadBtn;
