import axios from "axios";

const KEY = 'AIzaSyCZ-SE1QfG2tD499_mMR9kYgr9ZcHh1cjI'

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params :{
        part: 'snippet',
        maxResults : '5',
        key: KEY
    }
})