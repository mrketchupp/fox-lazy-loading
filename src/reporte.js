import { totalImages } from "./index";
import { imagesLoad } from "./lazy";

export const contador = ()=> {
    console.group('Reporte de imagenes');
    console.log(`🟡 Total de imagenes: ${totalImages}`);
    console.log(`🟢 Imagenes cargadas: ${imagesLoad}`);
    console.groupEnd('-----');
}