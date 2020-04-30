<template>
	<div class="container-normal">
        <div class="row">
            <div class="col"  align="left">
                    <h4>Encryption</h4>
                    <div class="btn-group">
                        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Choose
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item active" href="#">AES</a>
                            <a class="dropdown-item" href="#">DES</a>
                        </div>
                    </div>
                    <form>
                        <div class="form-group">
                            <h6>Select Input:</h6>
                                 <div class="btn-group form-group">
                                            <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Choose
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item active" href="#">file</a>
                                                <a class="dropdown-item" href="#">text</a>
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
                                                Choose
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item active" href="#">CBC</a>
                                                <a class="dropdown-item" href="#">DES</a>
                                            </div>
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
                                                Choose
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item active" href="#">1024</a>
                                                <a class="dropdown-item" href="#">DES</a>
                                            </div>
                                        </div>
                                </div>
                        </div>
                    </form>
                    <form>
                        <div class="form-group">
                            <h6>Enter Secret key:</h6>
                                 <div class="form-group">
                                        <textarea class="form-control" rows="1" id="comment"></textarea>
                                </div>
                        </div>
                    </form>
                    <form>
                        <div class="form-group">
                            <h6>Output format :</h6>
                                 <div class="form-group">
                                         <div class="btn-group">
                                            <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Choose
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item active" href="#">HEX</a>
                                                <a class="dropdown-item" href="#">DEC</a>
                                                <a class="dropdown-item" href="#">BIN</a>
                                            </div>
                                        </div>
                                </div>
                        </div>
                    </form>

                </div>
                <div class="col"  align="left">
                    <h4>Decryption</h4>
                    <div class="btn-group">
                        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Choose
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item active" href="#">AES</a>
                            <a class="dropdown-item" href="#">DES</a>
                        </div>
                    </div>
                    <form>
                        <div class="form-group">
                            <h6>Select Input:</h6>
                                 <div class="form-group">
                                         <div class="btn-group">
                                            <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Choose
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item active" href="#">AES</a>
                                                <a class="dropdown-item" href="#">DES</a>
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
                                                Choose
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item active" href="#">AES</a>
                                                <a class="dropdown-item" href="#">DES</a>
                                            </div>
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
                                                Choose
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item active" href="#">AES</a>
                                                <a class="dropdown-item" href="#">DES</a>
                                            </div>
                                        </div>
                                </div>
                        </div>
                    </form>
                    <form>
                        <div class="form-group">
                            <h6>Enter Secret key:</h6>
                                 <div class="form-group">
                                        <textarea class="form-control" rows="1" id="comment"></textarea>
                                </div>
                        </div>
                    </form>
                    <form>
                        <div class="form-group">
                            <h6>Output format :</h6>
                                 <div class="form-group">
                                         <div class="btn-group">
                                            <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Choose
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item active" href="#">HEX</a>
                                                <a class="dropdown-item" href="#">DEC</a>
                                                <a class="dropdown-item" href="#">BIN</a>
                                            </div>
                                        </div>
                                </div>
                        </div>
                    </form>

                </div>
            </div>
            <div class="row">
            <div class="col-sm-2">
            </div>
            <div class="col-sm-1">
                <button class="btn btn-primary">
                    <a href="/Encrypt" class="nav-link">Encryption</a>
                </button>
            </div>
            <div class="col-sm-5">
            </div>
            <div class="col-sm-1">
                <button class="btn btn-danger">
                    <a href="/Decrypt" class="nav-link">Decryption</a>
                </button>
            </div>
        </div>


    </div>
</template>

<style>
    .col {
        background-color: #ffff;
        border: 1px solid gray;
        margin: 40px;
        height: 600;
        padding: 30px;
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
        color: white;
    }

    a:hover {
        color: white;
    }
</style>

