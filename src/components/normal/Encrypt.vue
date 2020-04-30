<template>
    <div class="row">
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
</template>

<style>
    .col {
        background-color: #ffff;
        border: 1px solid gray;
        margin: 40px;
        height: 600px;
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