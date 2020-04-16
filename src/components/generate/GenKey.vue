<template>
	<div class="container-genkey">
	<div class="row">
<div class="col-sm-1">
</div>
<div class="col-sm-11">
	<h5>Select key size</h5>
	</div>
	</div>

<div class="row">
<div class="col-sm-1">
</div>
<div class="col-sm-3">
	<form>
	<br>
  <select name="keysize" class="custom-select">
    <option selected>Select key size</option>
    <option value="512">512-bit</option>
    <option value="1024">1024-bit</option>
    <option value="2048">2048-bit</option>
  </select>
	</form>
	</div>

<div class="col-sm-8">
    <button class="btn btn-success">
        <a class="nav-link">Generate key</a>
    </button>
    </div>
</div>
<br>

    <div class="row">
    <div class="col">
    <form>
    <div class="form-group">
      <h5>Public key:</h5>
     <div class="form-group">
  <textarea class="form-control" rows="6" id="comment"></textarea>
	</div>
    </div>
    </form>
    </div>

    <div class="col">
    <form>
    <div class="form-group">
      <h5>Private key:</h5>
    <div class="form-group">
  <textarea class="form-control" rows="6" id="comment"></textarea>
	</div>
    </div>
    </form>	
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

    .container-genkey {
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
