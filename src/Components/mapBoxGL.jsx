import React, {useState } from 'react'
import ReactMapGl, {Marker} from 'react-map-gl'
import { MotoButtonClose } from '../styled'

const MapBoxGl = (props) => {
    
    const showOff = ()=>{
        props.showOff.setMotoModal(false)
    }

    const [viewport, setviewport] = useState({
        latitude: 18.5898466,
        longitude: -69.9919067,
        zoom: 18,
        width:  window.innerWidth,
        height: window.innerHeight
    })
    return (
        <ReactMapGl 
            mapStyle={'mapbox://styles/mapbox/navigation-night-v1'}
            mapboxApiAccessToken={'pk.eyJ1IjoiZGFybGluZzE2NSIsImEiOiJja3B1djg3dXgwZDNoMm9vaWhtZWZ4d3VlIn0.rIZl0am47DGVngkU6j38hQ'}
            {...viewport} 
            onViewportChange={(newView)=> setviewport(newView)}>
            
            <MotoButtonClose onClick={showOff}>Cerrar</MotoButtonClose>

            <Marker 
                latitude={18.5898466} 
                longitude={-69.9919067}
                offsetTop={-viewport.zoom * 3}
                offsetLeft={-viewport.zoom * 3}
            >
                <button style={{background: "none", border: "none", cursor:"pointer", margin: "0"}} >
                    <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" 
                        alt="Moto taxi icon"
                        style={{margin: "0"}}
                        width={viewport.zoom * 3}
                        height={viewport.zoom * 3}
                    />
                </button>
            </Marker>
        </ReactMapGl>
    );
}
 
export default MapBoxGl;