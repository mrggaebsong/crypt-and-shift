<template>
	<div class="container-stegano">
    <div class="row">
    <div class="col">
    <h4>Encode</h4>
    <form>
    <div class="form-group">
       <form>
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="customFile">
    <label class="custom-file-label" for="customFile">Choose file</label>
  </div>
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
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="customFile">
    <label class="custom-file-label" for="customFile">Choose file</label>
  </div>
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
<button class="btn btn-warning">
                        <a class="nav-link">encode</a>
                    </button>
</div>
<div class="col-sm-5">
</div>
<div class="col-sm-1">
<button class="btn btn-warning">
                        <a class="nav-link">decode</a>
                    </button>
</div>
</div>


    </div>
</template>



<style>
    .col-ste {
        background-color: #85b3cc;
        border: 1px solid gray;
        margin: 50px;
        height: 370px;
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
</style>
