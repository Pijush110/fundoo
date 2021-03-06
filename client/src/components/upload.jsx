import React, { Component } from 'react';


class Upload extends Component {
    triggerInputFile() {
        console.log("galat hai")
        this.fileInput.click();
    }
    uploadImage(e) {
        this.props.uploadImage(e.target.files[0],this.props.note._id)
    }
    render() {
        return (
            <div>
                <span>
                    <img src={require('../assets/notePictures.svg')}
                        alt="upload pic icon"
                        onClick={() => { this.triggerInputFile() }} />

                    <input ref={fileInput => this.fileInput = fileInput}
                        type="file" style={{ 'display': 'none' }}
                        onChange={(e) => this.uploadImage(e)}
                    />

                </span>
            </div>
        )
    }
}
export default Upload