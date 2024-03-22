//UnIcons
/**  引入图标库   **/
import * as Icons from 'vue-unicons/dist/icons.js'

let names = []
const getIcons = () => {
    Object.entries(Icons).map((value, index) => {
        // console.log(key,value)
        if (!names.includes(value[1].name)){
            names.push(value[1].name)
        }
    })
}
getIcons()
export default names;

