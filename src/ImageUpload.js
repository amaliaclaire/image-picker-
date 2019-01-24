import React from 'react';
import { Input, Grid, Segment, Image, Form } from 'semantic-ui-react'


class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
  }

  _handleSubmit(e) {
    e.preventDefault()

    console.log('handle uploading', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  render() {
     let {imagePreviewUrl} = this.state;
     let $imagePreview = null;
     console.log(imagePreviewUrl);
     if (imagePreviewUrl) {
       $imagePreview = (<img src={imagePreviewUrl} />);
     } else {
       $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
     }

     return (
         <div className="previewComponent">
             <Form onSubmit={(e)=>this._handleSubmit(e)}>
               <Input className="fileInput text container"
                 type="file"
                 onChange={(e)=>this._handleImageChange(e)} />
             </Form>
           <Image className="imgPreview"> {$imagePreview} </Image>
         </div>
     )
   }
 }

 export default ImageUpload;
