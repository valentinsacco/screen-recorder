import { motion, AnimatePresence } from "framer-motion"
import config from "config"

import RecordIcon from 'assets/record.svg' 
import StopIcon from 'assets/stop.svg' 

const clickedVariants = {
    clicked: { rotate: '720deg' },
    unclicked: { rotate: '0deg' }
}

const Button = ({ onClick, recordingState }) => {

    const handleClick = e => {
        onClick(e)
    }

    return (
        <AnimatePresence>
            <motion.div>
                <button className="h-12 w-96 bg-red-600 rounded-xl cursor-pointer flex flex-row items-center justify-center" onClick={handleClick}>
                    <AnimatePresence>
                        <motion.img 
                                animate={recordingState ? 'clicked' : 'unclicked'}
                                variants={clickedVariants}
                                className="h-6 w-6 mr-2" 
                                src={recordingState ? StopIcon : RecordIcon}
                            />
                    </AnimatePresence>
                    <motion.span className="text-white font-medium">
                        {recordingState ? config.STOP_RECORDING_TEXT : config.START_RECORDING_TEXT}
                    </motion.span>
                </button>
            </motion.div>
        </AnimatePresence>
    )
}

export default Button