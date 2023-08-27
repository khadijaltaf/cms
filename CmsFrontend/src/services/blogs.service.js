// import axios from 'axios';


let apiUrl = 'http://localhost:8080/main/'
export const getBlogs = async()=>{
    try{
   let response= await axios.get(apiUrl + "blogs");
   return response.data;
    }
    catch(error){
        console.error(error);
    }

}