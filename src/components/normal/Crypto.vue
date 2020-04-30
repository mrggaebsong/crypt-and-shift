<template>
	<div class="container-crypto">
        <div class="row-crypto">
            <div class="col-crypto">
                <h4>Encode</h4>
            </div>
            <div class="col-crypto">
                <h4>Decode</h4>
            </div>
        </div>
        <div class="row-crypto">
            <div class="col-sm-2"></div>
            <div class="col-sm-1">
                <button class="btn btn-warning">
                            <a class="nav-link">Encryption</a>
                </button>
            </div>
            <div class="col-sm-5"></div>
            <div class="col-sm-1">
                <button class="btn btn-warning">
                            <a class="nav-link">Decryption</a>
                </button>
            </div>
        </div>
    </div>
</template>


<style>
    .col-crypto {
        background-color: #85b3cc;
        border: 1px solid gray;
        margin: 50px;
        height: 600px;
        padding: 190px;
    }
    .row-crypto{
        display: flex;
        flex-wrap: wrap;
        margin-right: -10px;
        margin-left: -10px;
    }
    .container-crypto{
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
</style>