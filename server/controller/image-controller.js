


export const uploadImage = (request, response) => {
    console.log("req: ",request);
    console.log("data: ",request.data);
    console.log("file: ",request.file);
    if(!request.file) 
        return response.status(404).json("File not found");
    
    const imageUrl = `${url}/file/${request.file.filename}`;

    response.status(200).json(imageUrl);    
}


