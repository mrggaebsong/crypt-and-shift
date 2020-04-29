<template>
	<div class="container-normal">
        <div class="row">
            <div class="col">
                    <h4>Encode</h4>
                        <form>
                            <div class="form-group">
                                <form>
                                   #somthing
                                </form>
                                <br>
                                <h6>Enter your message:</h6>
                                    <div class="form-group">
                                        <textarea class="form-control" rows="2" id="comment"></textarea>
                                    </div>
                            </div>
                        </form>
                </div>
                <div class="col">
                    <h4>Decode</h4>
                        <form>
                            <div class="form-group">
                                <br>
                                <div class="form-group">
                                    <form>
                                      #somthing
                                    </form>
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
                    <a href="/Encrypt" class="nav-link">Encode</a>
                </button>
            </div>
            <div class="col-sm-5">
            </div>
            <div class="col-sm-1">
                <button class="btn btn-primary">
                    <a href="/Decrypt" class="nav-link">Decode</a>
                </button>
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

