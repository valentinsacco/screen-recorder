import DownloadIcon from 'assets/download.svg'

const DownloadButton = ({ src }) => (
    <div className="w-96 mt-4">
        <a href={src} download className="h-12 w-96 bg-gray-100 rounded-xl cursor-pointer flex flex-row items-center justify-center">
            <img className="h-6 w-6 mr-2" src={DownloadIcon}/>
            <span className="text-gray-500 font-medium">Descargar</span>
        </a>
    </div>
)

export default DownloadButton