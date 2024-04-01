import iconsSprite from "../../assets/sprite.svg";


type IconPropsType = {
    iconId: string;
    fill?: string;
    width?: string;
    height?: string;
    viewBox?: string;
}
export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "30"} height={props.height || "30"} viewBox={props.viewBox || "0 0 512 512"}>

                <use fill={props.fill || 'black'} xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
);
};

