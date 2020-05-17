<template>
	<div class="container-stegano">
        <div class="row">
            <div class="col">
                <h4>Encode</h4>
                <form>
                    <div class="form-group">
                        <form>
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="customFile" v-on:change="handleFileUpload()">
                                <label class="custom-file-label" for="customFile">Choose file</label>
                            </div>
                        </form>
                        <br>
                        <h6>Enter your message:</h6>
                        <div class="form-group">
                            <textarea class="form-control" rows="2" id="comment" v-model="secretMessage"></textarea>
                        </div>
                    </div>
                </form>
                <div class="encode">
                    <button class="btn btn-warning" v-on:click="stegEncode()">
                        <a class="nav-link">Encode</a>
                    </button>
                </div>
            </div>

            <div class="col">
                <h4>Decode</h4>
                    <form>
                        <div class="form-group">
                            <br>
                            <div class="form-group">
                                <form>
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="customFile" v-on:change="handleFileUpload()">
                                        <label class="custom-file-label" for="customFile">Choose file</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </form>
                    <div class="decode">
                        <button class="btn btn-warning" v-on:click="stegDecode()">
                            <a class="nav-link">Decode</a>
                        </button>
                    </div>	
                </div>
            </div>
        </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data: function() {
        return {
            file: '',
            secretMessage: ''
        };
    },
    methods: {
        handleFileUpload() {
            this.file = this.$refs.file.files[0];
        },
        stegEncode() {
            let sampleFile = new FormData();
            sampleFile.append('file', this.file);

            const stegData = {
                sampleFile: this.sampleFile,
                secretMessage: this.secretMessage
            }

            axios.post('/StegaEncrypt',
                stegData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then(function(){
                console.log('Stegano Encrypt Success!');
            })
            .catch(function(){
                console.log('Stegano Encrypt Failed');
            });
        },
        getEncryptedFile() {
            axios({
                url: '/StegaEncrypt',
                method: 'GET',
                responseType: 'blob',
            }).then((response) => {
                var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                var fileLink = document.createElement('a');

                fileLink.href = fileURL;
                fileLink.setAttribute('download', 'encrypted.bin');
                document.body.appendChild(fileLink);

                fileLink.click();
            })
        },
        stegDecode() {
            let sampleFile = new FormData();
            sampleFile.append('file', this.file);

            const stegData = {
                sampleFile: this.sampleFile,
                secretMessage: this.secretMessage
            }

            axios.post('/StegaDecrypt',
                stegData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then(function(){
                console.log('Stegano Decrypt Success!');
            })
            .catch(function(){
                console.log('Stegano Decrypt Failed');
            });
        },
        getDecryptedFile() {
            axios.get('/StegaDecrypt').then(response => {
                this.secretMessage = response.secretMessage;
            }).catch(e => {
                this.error.push(e)
            })
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
</style>
