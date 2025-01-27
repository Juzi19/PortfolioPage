"use client"

import { useEffect, useState } from "react"

export default function IconsSlideshow(props:{icons:string[][]}){
    const distance = 14.3;
    //Pfad, name, startposition(in %)
    const icons = props.icons
    //Initialisiert den state für alle icons
    const [icons_left, setIconsLeft] = useState(icons.map((icon, index)=>({name: icon[1], state: (index*distance)+42.9, moving: true})))
    let queue:number[] = []
    //Indizes der icons, die sich bewegen

    //State nach oben zählen
    function moveIcons(speed=0.05){
        setIconsLeft((icons_left)=>{
            //Kopie der icons
            let updatedIconsLeft = [...icons_left]
            let pos_last_item = 0
            for(let i = 0; i < updatedIconsLeft.length; i++){
                //Überprüft ob item am ende angekommen ist
                if(updatedIconsLeft[i].state <= 0){
                    //fügt zu warteschlange hinzu
                    queue.push(i)
                    //hier mit der set methode arbeiten
                    //setzt moving auf falsch
                    updatedIconsLeft[i].moving = false
                    updatedIconsLeft[i].state = 85.7;
                    
                }
                //Für elemente mit größer 85.7 position
                else if(updatedIconsLeft[i].state > 85.7){
                    updatedIconsLeft[i].moving = false;
                    updatedIconsLeft[i].state = 85.7;
                    queue.push(i) // Warteschlange aktualisieren
                }
                //bewegt item
                else if(updatedIconsLeft[i].moving){
                    updatedIconsLeft[i].state -= speed;
                    //wenn ein abstand zum start besteht
                    if (updatedIconsLeft[i].state>pos_last_item){
                        pos_last_item = updatedIconsLeft[i].state

                    }
                    Math.pow(updatedIconsLeft[i].state, 2)
                }
            }
            //schicke neues los wenn genug abstand
            if ((queue.length > 0) && (pos_last_item<(85.7-distance))) {
                const nextMovingIndex = queue[0];
                updatedIconsLeft[nextMovingIndex].moving = true;
                updatedIconsLeft[nextMovingIndex].state = 85.7; // Position anpassen
                queue.shift();
            }
        return updatedIconsLeft
        })
        
    }


    function animate(){
        moveIcons();
        requestAnimationFrame(animate)
    }
    useEffect(()=>{
        const animationframeid = requestAnimationFrame(animate)

        // Aufräumen, falls der Komponent unmontiert wird
        return (() => cancelAnimationFrame(animationframeid));
    }, []) 

    //Slide show
    return(
        <div className="relative h-full w-full flex z-30 flex-row bg-white">
            <div className="absolute z-20 w-[14.3%] h-full bg-white"></div>
            <div className="absolute left-[14.3%] z-20 w-[28.6%] h-full bg-gradient-to-r from-white to-transparent" id="start"></div>
            <div id="spanimages" className="absolute left-[18.18%] flex flex-row h-full w-[42.9%] z-0">
            </div>
            {icons.map((icons, index)=>(
                <img key={index} src={icons[0]} alt={icons[1]} style={{left: `${icons_left[index].state}%`}} className={`absolute w-[14.3%] h-full z-10 p-[6px]`}/>
            ))}
            
            <div className="absolute left-[71.4%] w-[14.4%] h-full bg-gradient-to-l from-white to-transparent z-20" id="end"></div> 
            <div className="absolute z-20 left-[85.7%] w-[14.3%] h-full bg-white"></div>
        </div>
            
        
    )
}