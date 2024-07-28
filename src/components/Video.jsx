const Video = ({source})=>{
    return(
        <video controls className="rounded-lg max-h-[500px]">
            <source src={source} type="video/mp4"/>
        </video>
    )
}

export default Video