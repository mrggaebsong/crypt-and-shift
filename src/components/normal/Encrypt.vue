<template>
    <div class="row">
        <div class="col"  align="left">
            <h4>Encryption</h4>
            <div class="btn-group">
                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{encryptTypeButton}}
                </button>
                <ul class="dropdown-menu">
                    <li class="dropdown-item" v-for="type in encryptType" v-bind:key="type" v-on:click="selectEncryptType(type)" @click.prevent="activeNews(1)">
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
                                <li class="dropdown-item" v-for="input in inputType" v-bind:key="input" v-on:click="selectInputType(input)" @click.prevent="activeNews(1)">
                                    <a href="#">{{input}}</a>
                                </li>  
                            </ul>
                        </div>
                        <div class="condition-render">
                            <div class="secretMessage" v-if="inputTypeButton === 'Plain Text'">
                                <textarea class="form-control" rows="1" id="comment" v-model="secretMessage" v-on:change="secretMsg()"></textarea>
                            </div>
                            <div class="custom-file" v-else-if="inputTypeButton === 'File'">
                                <input type="file" class="custom-file-input" id="customFile" v-on:change="handleFileUpload()">
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
                                                {{encryptModeButton}}
                                </button>
                                <ul class="dropdown-menu">
                                    <li class="dropdown-item" v-for="mode in encryptMode" v-bind:key="mode" v-on:click="selectEncryptMode(mode)" @click.prevent="activeNews(1)">
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
                                            {{keySizeButton}}
                            </button>
                            <ul class="dropdown-menu">
                                <li class="dropdown-item" v-for="size in keySize" v-bind:key="size" v-on:click="selectKeySize(size)" @click.prevent="activeNews(1)">
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
                        <div class="form-group">
                                <textarea class="form-control" rows="1" id="comment" v-model="secretKey"></textarea>
                        </div>
                </div>
            </form>
            <form>
                <div class="form-group">
                    <h6>Output format :</h6>
                        <div class="form-group">
                            <div class="btn-group">
                                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                {{outputButton}}
                                </button>
                                <ul class="dropdown-menu">
                                    <li class="dropdown-item" v-for="format in outputFormat" v-bind:key="format" v-on:click="selectOutputFormat(format)" @click.prevent="activeNews(1)">
                                        <a href="#">{{format}}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
            </form>
            <button class="btn btn-warning" v-on:click="encryptData()" data-toggle="showOutput" data-target="#outputPnl">
                <a class="nav-link">Encryption</a>
                 {{encryptButton}}
            </button>
            <div class="showOutput">
                <div class="custom-file" v-if="inputTypeButton === 'File'" method="get" > <!--action="file.doc"-->
                    <h6>download encryption file:</h6>
                    <button class="btn btn-primary" v-on:click="getEncryptedData()" type="submit">
                        <a class="nav-link">Download</a>
                    </button>
                </div>
                <div class="showSecretMessage" v-else-if="inputTypeButton === 'Plain Text'">
                    <h6>encryption text:</h6>
                        <div class="form-group">
                            <textarea class="form-control" rows="3" id="encryptText" ></textarea>
                        </div>
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
                encryptTypeButton: "Choose",
                inputTypeButton: "Choose",
                encryptModeButton: "Choose",
                keySizeButton: "Choose",
                outputButton: "Choose",
                encryptType: ["AES", "DES"],
                inputType: ["Plain Text", "File"],
                encryptMode: ["CBC", "ECB"],
                keySize: [128, 192, 256],
                outputFormat: ["BIN", "HEX", "DEC"],
                secretMessage: '',
                file: ''
            };
        },
        methods: {
            selectEncryptType: function(type) {
                this.encryptTypeButton = type;
            },
            selectInputType: function(input) {
                this.inputTypeButton = input
            },
            selectEncryptMode: function(mode) {
                this.encryptModeButton = mode
            },
            selectKeySize: function(size) {
                this.keySizeButton = size
            },
            selectOutputFormat: function(format) {
                this.outputButton = format
            },
            encryptData() {
                const submitData = {
                    ciphers: this.encryptTypeButton,
                    mode: this.encryptModeButton,
                    secrete_key: this.keySizeButton,
                    outputformat: this.outputButton
                };

                axios.post('/NormalEncrypt', submitData).then(function(){
                    console.log(submitData);
                    console.log('Success!');
                }).catch(function(){
                    console.log(submitData);
                    console.log('Failed');
                })
            },
            getEncryptedData() {
                axios.get('/NormalEncrypt').then(response => {
                    this.encryptData = response.ret
                }).catch(e => {
                    this.error.push(e)
                })
            } 
        }
    }
</script>

<style scoped>
    .row {
        width: 160%;
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