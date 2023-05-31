import {createAction, createReducer} from '@reduxjs/toolkit'
import { initalPostList } from 'constants/blog'
import { Post } from 'types/blog.type'

interface BlogState {
    postList:Post[]
}

const inintalState: BlogState = {
    postList :initalPostList
}

export const adddPost = createAction<Post>('blog/addPost')

const blogReducer = createReducer(inintalState,(builder)=>{

})

export default blogReducer