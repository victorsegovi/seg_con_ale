const Link = ({bgClear, CTA})=>{
    if(bgClear){
        return <a href="https://wa.me/18503764872" target="_blank" className="text-[#F81842] font-bold p-3 bg-[#F8F7F7] w-full rounded-lg max-w-[352px] text-center">{CTA}</a>
    }else{
        return <a href="https://wa.me/18503764872" target="_blank" className="text-[#F8F7F7] bg-[#F81842] p-3 text-center font-bold">{CTA}</a>
    }
}

export default Link