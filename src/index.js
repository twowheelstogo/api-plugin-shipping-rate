import pkg from "../package.json";
import {PACKAGE_NAME} from "./config/constants.js";
export default async function register(app){
    app.registerPlugin({
        label:"Shipment rate plugin",
        name:PACKAGE_NAME,
        version:pkg.version
    })
}