import axios from 'axios'

const getBreeds = async () => {
    try{
        return await axios.get("http://192.168.10.15:8080/test.json")
    } catch(error){
        console.error(error);
    }
};

const countBreeds = async () => {
    const breeds = await getBreeds();

    if(breeds.data.message){
        console.log("number of dog : ${Object.entries(breeds.data.message).length}")
    }
}

countBreeds();


// import axios from 'axios'
//
//
// const instance = axios.create({
//     baseURL: '.',
//     timeout : 100000
// })
//
// instance.interceptors.request.use(
//     function(config){
//         return config
//     },
//     function(error){
//         return Promise.reject(error)
//     }
// )
//
// instance.interceptors.response.use(
//     function(response){
//         return Promise.resolve(response)
//     },
//     function(error){
//         console.error(error)
//         if(error.response && error.response.data && error.response.data.MSG){
//             setTimeout(() => {
//                 // alert(error.response.data.MSG).then(res => {
//                 //     if(!res) return
//                 //     else if (['100', '110'].includes(error.response.data.CODE)){
//                 //         console.log('logout')
//                 //     }
//                 // })
//                 console.log('timeout!!')
//             }, 100)
//         }
//     }
// )
