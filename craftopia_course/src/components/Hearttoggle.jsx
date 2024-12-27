import { useRef } from "react";

export default function Hearttoggle({heartFillId,heartStrikeId}) {

    let strikeheartRef = useRef(null);
    let fillheartRef = useRef(null);
    let CheckClass =()=>{
        if(fillheartRef.current.classList.contains('click-h')){
            alert('已加入最愛');
        }else{
            alert('已取消最愛');
        }
    }

    return (
        <>
            <figure className="icons-heart" onClick={()=>{
                // let fillheart=document.getElementById(heartFillId);
                // let strikeheart=document.getElementById(heartStrikeId);
                fillheartRef.current.classList.toggle('click-h');
                strikeheartRef.current.classList.toggle('click-h');
                CheckClass();
            }}>
                <img ref={strikeheartRef} id={heartStrikeId} src="./images/icons-heart.svg" alt="" />
                <img ref={fillheartRef} id={heartFillId} src="./images/icons-heart-hover.svg" alt="" />
            </figure>
        </>
    )
}