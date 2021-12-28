import { useState, useEffect } from "react"
import Header from "components/Header"
import SelectDropdown from "components/SelectDropdown"
import Button from "components/Button"
import RecordOptions from "components/RecordOptions"
import PreviewVideo from "components/PreviewVideo"
import DownloadButton from "components/DownloadButton"
import { startRecording, stopRecording } from 'services/recorder'
import config from "config"

import VideoIcon from 'assets/video.svg'
import Footer from "components/Footer"

const App = () => {

    let userAgent = navigator.userAgent || navigator.vendor || window.opera

    const [selected, setSelected] = useState(null)
    const [recording, setRecording] = useState(false)
    const [previewUrl, setPreviewUrl] = useState(null)
    const [options, setOptions] = useState({
        video: { mediaSource: 'screen' },
        audio: true
    })
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const isAndroid = /android/i.test(userAgent)
        const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream

        if (isAndroid || isIOS) {
            setIsMobile(true)
        }
    }, [])

    const handleStartRecording = e => {
        const state = e.target.innerText
        const recordSettings = {
            setRecording, 
            setPreviewUrl,
            mimetype: selected
        }

        if (state === config.START_RECORDING_TEXT) {
            startRecording(options, recordSettings)
        } else {
            stopRecording(setRecording)
        }    
    }

    return (
        <div className="h-screen w-screen">
            <Header/>
            <main className="h-main w-full grid place-items-center">
                <div className="w-96">
                    <div className="flex flex-col items-center mb-6">
                        <div className="flex flex-row items-center justify-center mb-2">
                            <img className="h-6 w-6 mr-2" src={VideoIcon}/>
                            <h1 className="text-xl text-gray-500">Screen Recorder</h1>
                        </div>
                        { isMobile && <span className="text-gray-600 text-sm">We can´t record screen in a mobile phone</span> }
                    </div>
                    { selected ? (
                        <div>
                            { previewUrl && <PreviewVideo src={previewUrl}/> }
                            <RecordOptions options={options} setOptions={setOptions}/>
                            <Button onClick={handleStartRecording} recordingState={recording}/>
                            { previewUrl && <DownloadButton src={previewUrl}/> }
                        </div>
                    ) : (
                         <SelectDropdown text="Select a format" options={config.formatOptions} onSelect={setSelected}/>
                    ) }
                </div>
            </main>
            <Footer/>
        </div>
    ) 
}

export default App