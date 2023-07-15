import Navbar from "@/components/navbar/navbar"
import bookcss from "./book.module.css"
export default function Books() {
  return (
    <div className={bookcss.container}>

      <Navbar />

      <div className={bookcss.container_input}>

        <input className={bookcss.title} type="text" placeholder="Titulo del libro" />

        <input type="file" id="filePdf" className={bookcss.file_input} name="file-input" />

        <label id="fileInputPdf" className={bookcss.file_input_label} for="file-input"

        >Subir Archivo</label>
        <input type="file" id="fileImg" className={bookcss.file_input} name="file-input" />

        <label id="fileInputImg" className={bookcss.file_input_label} for="file-input"
        >Imagen</label>

        <button className={bookcss.enter} >Subir</button>

      </div>
    </div>
  )
}