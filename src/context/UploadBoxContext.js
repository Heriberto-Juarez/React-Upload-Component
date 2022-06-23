import { useState, createContext, useCallback } from "react";
export const UploadBoxContext = createContext({})

export const UploadBoxProvider = ({ children }) => {

    const [isVisible, setIsVisible] = useState(false)
    const [files, setFiles] = useState([])
    const [progress, setProgress] = useState(0)
    const [isUploading, setIsUploading] = useState(false)
    const [showError, setShowError] = useState(false)
    const [message, setMessage] = useState('')

    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.forEach((file) => {
            setFiles((prevState) => {
                return [
                    ...prevState,
                    file
                ]
            })
        })
    }, [])
    

    const removeFile = (file) => {
        setFiles((prevState) => {
            return prevState.filter((f) => {
                return f !== file
            })
        })
    }

    return (<UploadBoxContext.Provider value={{
        isVisible,
        setIsVisible,
        files, 
        setFiles,
        progress,
        setProgress,
        isUploading,
        setIsUploading,
        showError,
        setShowError,
        message,
        setMessage,
        onDrop,
        removeFile,
    }}>
        {children}
    </UploadBoxContext.Provider>)
}