import SkinnyBannerStyles from "./SkinnyBannerStyles"

interface SkinnyBannerProps {
    bannerImage?: string; 
    bannerHeading: string; 
}
const SkinnyBanner =({bannerImage,     bannerHeading}: SkinnyBannerProps)=>{
    return (
        <SkinnyBannerStyles>
            <img src={bannerImage}/>
            <h2>{bannerHeading}</h2>
        </SkinnyBannerStyles>
    )
}; export default SkinnyBanner; 