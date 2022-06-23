import ImageFromFile from '../ImageFromFile/ImageFromFile';
import { useDropzone } from 'react-dropzone'
import { useContext } from "react";
import { UploadBoxContext } from '../../context/UploadBoxContext'
import PropTypes from 'prop-types'
import './uploadbox.css'

const FilesList = ({ files, onRemove }) => {
    return files.map((file, idx) => {
        return (<div className='fl-pvw' key={`img-preview-${idx}`}>
            <ImageFromFile file={file} ></ImageFromFile>
            <san className='close-preview' onClick={() => onRemove(file)}>&times;</san>
        </div>)
    })

}

export const UploadBox = ({ accept }) => {
    const { onDrop, isUploading, files, removeFile, progress } = useContext(UploadBoxContext)
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <>
            <div>
                <div className='col'>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} accept={accept} />
                        {
                            isDragActive ?
                                <div className='drag-space'>Drop the files here ...</div> :
                                <div className='drag-space'>Drag and drop some files here, or click to select files</div>
                        }
                    </div>
                </div>
            </div>
            <div>
                <div className='fil-prv-lst'>
                    <FilesList files={files} onRemove={removeFile} />
                </div>
            </div>
            <div>
                {isUploading && <progress className='progress-item' value={progress}></progress>}
            </div>
        </>);
}

UploadBox.defaultProps = {
    accept: "image/*"
}

UploadBox.propTypes = {
    accept: PropTypes.string,
}

