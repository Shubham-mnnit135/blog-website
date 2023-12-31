

import React, { useState, useEffect, useContext, useRef } from 'react';

import { styled, Box, TextareaAutosize, Button, InputBase, FormControl  } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';


const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 10
    }
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`;

const Textarea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    text-align: justify;
    &:focus-visible {
        outline: none;
    }
`;

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
}

const CreatePost = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [post, setPost] = useState(initialPost);
    const [imageURL,setImageURL] = useState('');
    const { account } = useContext(DataContext);
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    const url = post.picture
    ? post.picture
     : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
    
     useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget(
          {
            cloudName: "dlgw7zwei",
            uploadPreset: "stchdbg5",
            maxFiles: 1,
          },
          (err, result) => {
            if (result.event === "success") {
              setImageURL(result.info.secure_url);
              post.picture = result.info.secure_url;
              post.categories = location.search?.split('=')[1] || 'All';
              post.username = account.username;
            }
          }
        );
      }, []);
   

    const savePost = async () => {
        let response = await API.createPost(post);
        if(response.isSuccess)
             navigate('/');
    }

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    return (
        <Container>
            {
                imageURL ===''
                ?
                   <Image src={url} alt="post" />
                :
                   <Image src={imageURL} alt="post" />
            }
            <StyledFormControl>
                <label htmlFor="fileInput">
                    <Add fontSize="large" color="action" onClick={()=> widgetRef.current?.open()}/>
                </label>
                <InputTextField onChange={(e) => handleChange(e)} name='title' placeholder="Title" />
                <Button onClick={() => savePost()} variant="contained" color="primary">Publish</Button>
            </StyledFormControl>

            <Textarea
                rowsMin={5}
                placeholder="Tell your story..."
                name='description'
                onChange={(e) => handleChange(e)} 
            />
        </Container>
    )
}

export default CreatePost;