<template>
    <div class="row">
        <div class="col"  align="left">
            <h4>Encryption</h4>
            <div class="btn-group">
                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{ciphers}}
                </button>
                <ul class="dropdown-menu">
                    <li class="dropdown-item" v-for="type in encryptType" v-bind:key="type" v-on:click="selectEncryptType(type)">
                        <a href="#">{{type}}</a>
                    </li>
                </ul>
            </div>
            <form>
                <div class="form-group">
                    <h6>Select Input:</h6>
                    <div class="form-group">
                        <div class="btn-group">
                            <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                {{inputTypeButton}}
                            </button>
                            <ul class="dropdown-menu">
                                <li class="dropdown-item" v-for="input in inputType" v-bind:key="input" v-on:click="selectInputType(input)">
                                    <a href="#">{{input}}</a>
                                </li>  
                            </ul>
                        </div>
                        <div class="condition-render">
                            <div class="secretMessage" v-if="inputTypeButton === 'Plain Text'">
                                <textarea class="form-control" rows="1" id="comment" v-model="secretMessage"></textarea>
                            </div>
                            <div class="custom-file" v-else-if="inputTypeButton === 'File'">
                                <input type="file" class="custom-file-input" id="customFile" @change="handleFileUpload">
                                <label class="custom-file-label" for="customFile">Choose file</label>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <form>
                <div class="form-group">
                    <h6>Select Mode:</h6>
                        <div class="form-group">
                            <div class="btn-group">
                                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                {{mode}}
                                </button>
                                <ul class="dropdown-menu">
                                    <li class="dropdown-item" v-for="mode in encryptMode" v-bind:key="mode" v-on:click="selectEncryptMode(mode)">
                                        <a href="#">{{mode}}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
            </form>
            <form>
                <div class="form-group">
                    <h6>Key Size:</h6>
                    <div class="form-group">
                        <div class="btn-group">
                            <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {{size}}
                            </button>
                            <ul class="dropdown-menu">
                                <li class="dropdown-item" v-for="size in keySize" v-bind:key="size" v-on:click="selectKeySize(size)">
                                    <a href="#">{{size}}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </form>
            <form>
                <div class="form-group">
                    <h6>Enter Secret key:</h6>
                    <p>You can get this from <a href="/genkey">'Generate Key'</a> Page</p>
                    <div class="form-group">
                        <textarea class="form-control" rows="1" id="comment" v-model="secrete_key"></textarea>
                    </div>
                    <h6>Enter Private Key (Initial Vector):</h6>
                    <p>You can get this from <a href="/genkey">'Generate Key'</a> Page</p>
                    <div class="form-group">
                        <textarea class="form-control" rows="1" id="comment" v-model="iv"></textarea>
                    </div>
                </div>
            </form>
            <form>
                <div class="form-group">
                    <h6>Output format :</h6>
                        <div class="form-group">
                            <div class="btn-group">
                                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                {{format}}
                                </button>
                                <ul class="dropdown-menu">
                                    <li class="dropdown-item" v-for="format in outputFormat" v-bind:key="format" v-on:click="selectOutputFormat(format)">
                                        <a href="#">{{format}}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
            </form>
            <button class="btn btn-warning" @click="encryptData" data-toggle="showOutput" data-target="#outputPnl">
                <a class="nav-link">Encrypt <span v-if="inputTypeButton === 'File'"> & Download</span></a>
            </button>
            <div class="showOutput" v-if="isClicked">
                <div class="showSecretMessage" v-if="inputTypeButton === 'Plain Text'">
                    <h6>encryption text:</h6>
                        <div class="form-group">
                            <textarea class="form-control" rows="3" id="encryptText" v-model="encryptMessage.data"></textarea>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        mounted() {
            console.log('Normal Encrypted');
        },
        data: function() {
            return {
                ciphers: "Choose",
                inputTypeButton: "Choose",
                mode: "Choose",
                size: "Choose",
                format: "Choose",
                encryptType: ["AES", "DES"],
                inputType: ["Plain Text", "File"],
                encryptMode: ["CBC", "CCM"],
                keySize: [128, 192, 256],
                outputFormat: ["Str", "Hex", "Base64"],
                secretMessage: '',
                sampleFile: '',
                secrete_key: '',
                iv: '',
                encryptMessage: {
                    data: ''
                },
                encryptFile: {
                    data: ''
                },
                isClicked: false
            };
        },
        methods: {
            handleFileUpload(event) {
                this.sampleFile = event.target.files[0];
            },
            selectEncryptType: function(type) {
                this.ciphers = type;
            },
            selectInputType: function(input) {
                this.inputTypeButton = input
            },
            selectEncryptMode: function(mode) {
                this.mode = mode
            },
            selectKeySize: function(size) {
                this.size = size
            },
            selectOutputFormat: function(format) {
                this.format = format
            },
            encryptData(e) {
                e.preventDefault();
                let data = new FormData();
                data.append('ciphers', this.ciphers.toLowerCase());
                data.append('mode', this.mode.toLowerCase());
                data.append('secrete_key', this.secrete_key);
                data.append('iv', this.iv);
                data.append('format', this.format.toLowerCase());
                data.append('size', this.size);
                data.append('text', this.secretMessage);
                data.append('sampleFile', this.sampleFile);

                console.log(this.secretMessage);
                console.log(this.sampleFile);

                // for (var value of data.values()) {
                //     console.log(value); 
                // }

                axios({
                    method: 'post',
                    url: 'http://localhost:3000/NormalEncrypt',
                    data,
                    headers: {
                        "Accept": "application/form-data",
                        "Content-Type": "application/form-data",
                        "Access-Control-Allow-Origin": "http://localhost:3000",
                        "Access-Control-Allow-Methods": "POST",
                        "Access-Control-Allow-Credentials": true,
                        "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
                    }
                }).then(res => {
                    if(this.inputTypeButton === 'Plain Text') {
                        this.encryptMessage = res.data;
                        console.log(this.encryptMessage);
                    } else {
                        this.encryptFile == res.data;
                        console.log(this.encryptFile);

                        var fileURL = window.URL.createObjectURL(new Blob([res.data]));
                        var fileLink = document.createElement('a');

                        fileLink.href = fileURL;
                        fileLink.setAttribute('download', 'encrypted_' + this.sampleFile.name);
                        document.body.appendChild(fileLink);

                        fileLink.click();
                    }

                    this.isClicked = true;
                }).catch(function(){
                    console.log('Failed', data);
                })
            }
        }
    }
</script>

<style scoped>
    .ReactModal__Body--open {
        overflow: hidden;
    }
    .row {
        width: 130%;
        margin-left: 20px;
        margin-right: -30px;
    }

    .col {
        background-color: #85b3cc;
        border: 1px solid gray;
        margin: 40px;
        height: 75%;
        padding: 50px;
    }

    .container {
        text-align: left;
    }

    button {
        display: block;
        margin: 20px;
    }

    .genkey button {
        margin-top: 40px;
    }

    a {
        color: black;
    }

    a:hover {
        text-decoration: none;
    }

    li:hover {
        background-color: #0275d8;
    }

    .custom-file-input {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }

    .custom-file-label {
        display: inline-block;
    }

</style>