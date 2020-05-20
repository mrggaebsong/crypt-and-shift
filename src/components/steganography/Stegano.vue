<template>
	<div class="container-stegano">
        <div class="row">
            <div class="col">
                <h4>Encrypt</h4>
                <form>
                    <div class="form-group">
                        <form>
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="customFile" accept="image/*" @change="onFileSelected">
                                <label class="custom-file-label" for="customFile">Choose file</label>
                            </div>
                        </form>
                        <br>
                        <h6>Enter your message:</h6>
                        <div class="form-group">
                            <textarea class="form-control" rows="2" id="comment" v-model="text"></textarea>
                        </div>
                    </div>
                </form>
                <div class="encode">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                    <button class="btn btn-warning" @click="stegEncode"> Encrypt </button>
                </div>
                <div class="image-preview">
                    <img class="preview" :src="myImage" alt="steganoEncrypt">
                </div>
            </div>

            <div class="col">
                <h4>Decrypt</h4>
                    <form>
                        <div class="form-group">
                            <br>
                            <div class="form-group">
                                <form>
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="customFile" @change="onFileSelected">
                                        <label class="custom-file-label" for="customFile">Choose file</label>
                                   <br><br>
                        
                        <button class="btn btn-warning" @click="stegDecode">
                            <a class="nav-link">Decrypt</a>
                        </button>
                    </div>
                                </form>
                            </div>
                        </div>
                    </form>	
                    <br><br>
                    <h6>Decrypted message:</h6>
                    <div class="form-group">
                            <textarea class="form-control" rows="2" id="comment" v-model="decryptMessage"></textarea>
                        </div>
                </div>
            </div>
        </div>
</template>


<script>
    import axios from 'axios';
    
    const imageResource = "";

    export default {
        data: function() {
        return {
            image: "",
            text: '',
            decryptMessage: '',
            encryptFile: ""
        };
    },
    computed: {
        myImage() {
            // console.log("'data:image/png;base64, ${this.image}'")
            return 'data:image/png;base64, ${this.image}'
        }
    },
    created() {
        this.loadImage();
    },
    methods: {
        onFileSelected(event) {
            // console.log(event);
            this.image = event.target.files[0];
        },
        loadImage() {
            this.image = imageResource;
            console.log(this.image);
        },
        stegEncode() {
            // e.preventDefault();
            let data = new FormData();
            data.append('sampleFile', this.image, this.image.name);
            data.append('text', this.text);

            axios({
                method: 'post',
                url: 'http://localhost:3000/StegaEncrypt',
                data,
                headers: {
                    "Accept": "multipart/form-data",
                    "Content-Type": "multipart/form-data",
                    "Access-Control-Allow-Origin": "http://localhost:3000",
                    "Access-Control-Allow-Methods": "POST",
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
                }
            }).then(res => {
                // let data = {"data":res.data};
                this.imageResource = res.data;
                // console.log('Success!', data);
                // console.log(res.data);
                console.log(this.imageResource);
                
                // let reader = new FileReader();
                // reader.readAsDataURL(res.data);
                // reader.onload = () => {
                //     this.encryptImage = reader.result;
                // }
            }).catch(function(){
                console.log('Failed', data);
            });
        },
        stegDecode() {
            // e.preventDefault();
            let data = new FormData();
            data.append('sampleFile', this.image, this.image.name);

            axios({
                method: 'post',
                url: 'http://localhost:3000/StegaDecrypt',
                data,
                headers: {
                    "Accept": "multipart/form-data",
                    "Content-Type": "multipart/form-data",
                    "Access-Control-Allow-Origin": "http://localhost:3000",
                    "Access-Control-Allow-Methods": "POST",
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
                }
            }).then(res => {
                this.decryptMessage = res.data;
                console.log('Success!', data);
                console.log(res.data);
            }).catch(function(){
                console.log('Failed', data);
            });
        }
    }
}
</script>

<style>
    .col {
        background-color: #85b3cc;
        border: 1px solid gray;
        margin: 50px;
        height: 50%;
        padding: 30px;
    }

    .container-stegano {
        text-align: center;
    }

    button {
        display: block;
        margin: 20px;
    }

    .genkey button {
        margin-top: 40px;
    }

    a {
        color: white;
    }

    a:hover {
        color: white;
    }

    .decode {
        margin-top: 105px;
    }

    .image-preview {
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        padding: 20px;
    }
    img.preview {
        width: 200px;
        background-color: white;
        border: 1px solid #DDD;
        padding: 5px;
    }
</style>
