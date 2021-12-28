let mediaRecorder

export const startRecording = async (options, recordSettings) => {    

    const { setRecording, setPreviewUrl, mimetype } = recordSettings

    const recordOptions = options ? options : ({
        mimeType: `video/${mimetype}; codecs=vp9`
    }) 
    
    try {

        let stream = await navigator.mediaDevices.getDisplayMedia(options)

        setRecording(true)
        
        let chunks = []
        let url = ''
    
        mediaRecorder = new MediaRecorder(stream, recordOptions)
    
        mediaRecorder.ondataavailable = e => {
            chunks.push(e.data)
        }
    
        mediaRecorder.onstop = () => {
            setRecording(false)
    
            const blob = new Blob(chunks, {
                type: `video/${mimetype}; codecs=vp9`
            })
    
            url = URL.createObjectURL(blob)
            setPreviewUrl(url)
        }
    
        mediaRecorder.start()
    } catch (error) {
        return null
    }
}

export const stopRecording = () => {
    mediaRecorder.stop()
}