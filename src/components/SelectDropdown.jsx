import { useState } from "react"
import { motion } from 'framer-motion'

import ArrowDownIcon from 'assets/arrow-down.svg'

const rotateVariants = {
    open: { rotate: '180deg' },
    closed: { rotate: '0deg' }
}

const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 }
}

const SelectDropdown = ({ text, options = [], onSelect }) => {

    const [openDropdown, setOpenDropdown] = useState(false)
    const [selectedMime, setSelectedMime] = useState(null)

    const handleSelect = (mime) => {
        onSelect(mime)
        setSelectedMime(mime)
        if (openDropdown) {
            setOpenDropdown(state => !state)
        }
    }
 
    return (
        <div className="grid place-items-center">
            <div>
                <button className="h-14 w-96 flex flex-row justify-between bg-gray-100 rounded-xl items-center px-4" onClick={() => setOpenDropdown(state => !state)}>
                    <span className="text-gray-400 text-base font-medium">{selectedMime ? selectedMime : text}</span>
                    <motion.img 
                        animate={openDropdown ? 'open' : 'closed'}
                        variants={rotateVariants}
                        className="h-6 w-6"
                        src={ArrowDownIcon}
                    />
                </button>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={openDropdown ? 'open' : 'closed'} 
                    variants={variants} 
                    transition={{ duration: 0.15 }}
                    className="h-auto w-96 mt-6 p-4 rounded-xl bg-gray-100">
                    <ul>
                        { options.map(({ text, mime }, i) => (
                            <li key={i} className="h-12 w-full rounded-xl cursor-pointer grid place-items-center hover:bg-gray-200" onClick={() => handleSelect(mime)}>
                                <span className="text-gray-500">{text}</span>
                            </li>
                        )) }
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}

export default SelectDropdown