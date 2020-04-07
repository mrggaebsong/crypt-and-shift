<template>
    <div class="container">
        <strong>This is a website that help you encrypt and decrypt anything easily.</strong>
        <div class="row">
            <div class="col">
                <div class="normal">
                    <p>For who want to enjoy with encrypting and decrypting anything.</p>
                    <p>Please select the type you want.</p>

                    <button class="btn btn-info">
                        <a href="/crypto" class="nav-link">Normal Crypto</a>
                    </button>
                    <button class="btn btn-danger">
                        <a href="/stegano" class="nav-link">Steganography</a>
                    </button>
                </div>
            </div>
            <div class="col">
                <div class="genkey">
                    <p>For who want only the key.</p>
                    <p>We can generate these whatever you want.</p>

                    <button class="btn btn-secondary">
                        <a href="/genkey" class="nav-link">Generate Keys Only</a>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .col {
        background-color: #85b3cc;
        border: 1px solid gray;
        margin: 40px;
        height: 250px;
        padding: 30px;
    }

    .container {
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