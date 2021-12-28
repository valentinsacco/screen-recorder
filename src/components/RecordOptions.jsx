import MicrophoneIcon from 'assets/microphone.svg'
import MicrophoneMutedIcon from 'assets/microphone-slash.svg'
import VideoIcon from 'assets/video.svg'
import VideoOutIcon from 'assets/video-slash.svg'

const RecordOptions = ({ options, setOptions }) => {

    const handleOptions = e => {
        const input = e.target.dataset.name
        setOptions(state => ({
            ...state,
            [input]: !state[input]
        }))
    }

    return (
        <div className='h-10 w-96 flex flex-row items-center justify-evenly mb-4 px-12'>
            <div>
                <img className='h-6 w-6 cursor-pointer' src={options.audio ? MicrophoneIcon : MicrophoneMutedIcon} data-name="audio" onClick={handleOptions}/>
            </div>
            <div>
                <img className='h-6 w-6 cursor-pointer' src={options.video ? VideoIcon : VideoOutIcon} data-name="video" onClick={handleOptions}/>
            </div>
        </div>
    )
}

export default RecordOptions