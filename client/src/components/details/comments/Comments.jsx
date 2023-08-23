import styled from "@emotion/styled";
import { Box, Button, TextareaAutosize } from "@mui/material";
import { useContext, useState } from "react";
import { DataContext } from "../../../context/DataProvider";

const Container = styled(Box)`
  margin-top: 100px;
  display: flex;
`;
const Image = styled('img')({
    width: 50,
    height: 50,
    borderRadius: '50%'
});


const StyledTextArea = styled(TextareaAutosize)`
    height: 100px !important;
    width: 100%; 
    margin: 0 20px;
`;


const initialValue = {
    name: '',
    postId: '',
    date: new Date(),
    comments: ''
}

const Comments = ({ post }) => {
  const url = "https://static.thenounproject.com/png/12017-200.png";
  
  const [comment, setcomment] = useState(initialValue);

  const { account } = useContext(DataContext);
  return (
    <Box>
      <Container>
        <Image src={url} alt="dp" />
        <StyledTextArea 
           minRows={5} 
           placeholder="what's on your mind?"
           value={comment.comments}
        //    onChange={(e) => handleChange(e)} 
         />
        <Button
          variant="contained"
          color="primary"
          size="medium"
          style={{ height: 40 }}
        >Post</Button>
      </Container>
      <Box></Box>
    </Box>
  );
};

export default Comments;
