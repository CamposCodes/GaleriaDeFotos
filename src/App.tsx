import * as Photos from "./services/photos";
import * as C from "./App.styles";
import {FormEvent, useEffect, useState} from "react";
import {Photo} from "./types/Photo";
import { motion } from "framer-motion";
import { PhotoItem } from "./components/PhotoItem";
import {BiFolderPlus} from "react-icons/bi";
import {Footer} from "./components/Footer";
import load from "./imgs/icon.png";
import empty from "./imgs/empty.gif";

const App = () => {

    const Load = {
        variantA: { scale: 0, opacity: 1},
        variantB: { scale: [1,0,1],  rotate: [360,720,1080], opacity:[1,1,1]},
    }

    const [uploading, setUploading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        const getPhotos = async () => {
            setLoading(true);   
            setPhotos(await Photos.getAll()); 
            setLoading(false);
        }
        getPhotos();
    },[]);

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>)=> {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const file = formData.get('image') as File;

        if(file && file.size > 0){
            setUploading(true);
            let result = await Photos.Insert(file);
            setUploading(false);

            if(result instanceof Error){
                alert(`${result.name} - ${result.message}`);
            }
            else{
                let newPhotoList = [...photos];
                newPhotoList.push(result);
                setPhotos(newPhotoList);
            }
        }

    }
    return(
        <C.Container>
            <C.Area>
                <C.Header>Galeria de Fotos</C.Header>

                <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
                    <label>
                        <input type="file" name="image" id="image"/>
                        Selecionar arquivo <BiFolderPlus/>
                    </label>
                    <input type="submit" value="Enviar"/>
                    {uploading && (<p>Enviando...</p>)}
                </C.UploadForm>

                {loading &&
                    <C.ScreenWarning>
                        <motion.div 
                        className="emoji"
                        variants={Load}
                        initial="variantA"
                        animate="variantB"
                        transition={{
                            type: "spring",
                            mass: 1,
                            stiffness: 200,
                            damping: 10,
                            duration: 2,
                            repeat: 10,
                        }}> <img src={load} alt=""/>
                        </motion.div>
                    </C.ScreenWarning>
                }
                {!loading && photos.length > 0 &&
                    <C.PhotoList>
                        {photos.map((item,index)=>(
                            <PhotoItem key={index} name={item.name} url={item.url}/>
                        ))}
                    </C.PhotoList>
                }
                {!loading && photos.length === 0 &&
                    <C.ScreenWarning>
                        <div className="emoji">
                            <img src={empty} alt=""/>
                            <p>Não há fotos cadastradas.</p>
                        </div>
                    </C.ScreenWarning>
                }
                <Footer/>
            </C.Area>
        </C.Container>
    );
}



export default App;
