const PreviewVideo = ({ src }) => (
    <div className="w-96 mb-8">
        <video className="aspect-video rounded-xl" src={src} autoPlay controls/>
    </div>
)

export default PreviewVideo