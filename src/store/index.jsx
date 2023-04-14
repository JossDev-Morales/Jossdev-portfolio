import { configureStore } from '@reduxjs/toolkit'
import Response from './slice/response.slice'
import Content from './slice/Content.slice'
export default configureStore({
    reducer: {
        Response,
        Content
    }
})


