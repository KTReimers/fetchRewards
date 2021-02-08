import React, {useState} from 'react';
import "nes.css/css/nes.min.css";


const Data = () => {
    const [info, setInfo] = useState([]);


    const getData = () =>{
        fetch("/hiring.json")
        .then(response => response.json())
        .then(response => {response.sort(function (a,b){
            return a.listId - b.listId; {}
            })
            setInfo(response)
        })
        .catch(err => {console.log(err)
    }, [])}
    return (
        <>
            <div className="container-fluid">
            <p><img src="https://images.twinkl.co.uk/tr/image/upload/illustation/dog-bone.png" style={{width: "200px", padding: "20px"}}></img><button type="button" className="nes-btn is-primary" onClick={getData}>Get Data</button><img src="https://img.pngio.com/dog-png-image-dogs-puppy-pictures-free-download-dogpng-1725_1000.png" style={{width:"200px", padding: "20px"}}></img></p>
            <div className="nes-table-responsive">
                <table className="nes-table is-bordered" style={{backgroundColor: "aqua"}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>List ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            info.map((item, i) => {
                                return item.name ?
                                <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.listId}</td>
                                <td>{item.name}</td>
                            </tr>
                                : ""
                            })
                        }
                    </tbody>
                </table>
            </div>
            </div>
        </>
    );
}

export default Data;