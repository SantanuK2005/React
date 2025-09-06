import React from "react";
import {useForm} from "react-hook-form";
import {button, Input, Select, RTE} from "../index"
import appwriteService from "../../appwrite/config";
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({post}) {
    const {register, handleSubmit, watch, setValue, control, getValue} = useForm({
        defaultValues : {
            title: post?.title || "",
            slug: post?.slug || "",
            content: post?.content || "",


        },
     });
    return (
        <div>PostForm</div>
    )
}

export default PostForm;