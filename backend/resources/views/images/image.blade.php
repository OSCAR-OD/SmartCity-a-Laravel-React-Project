@extends('layouts.app')
@section('content')

    <div class="container">
        <div class="row">
          <div class="col-md-4 offset-md-4">
                <div class="card form-holder">
                    <div class="card-body">
                        <h1>Cleaning service</h1>

                        @if (Session::has('error'))
                            <p class="text-danger">{{ Session::get('error') }}</p>
                        @endif
                        @if (Session::has('success'))
                            <p class="text-success">{{ Session::get('success') }}</p>
                        @endif

                        <form action="/upload-image" method="post" enctype="multipart/form-data">
                            @csrf
                            @method('post')
                           
                        
                            <div class="form-group">
                                <label>img</label>
                                <input type="file" name="imgname" class="form-control" placeholder="imgup" />
                                @if ($errors->has('imgname'))
                                    <p class="text-danger">{{ $errors->first('imgname') }}</p>
                                @endif
                            </div>
                           
                            <div class="row">
                                <div class="col-8 text-left">
                                    <a href="#" class="btn btn-link">Cancle</a>
                                </div>
                                <div class="col-4 text-right">
                                    <input type="submit" class="btn btn-primary" value="submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
   
    <div class="row">
 @foreach ($image as $img)
    <div>      
    <img src="{{ asset('storage/images/'.$img->id) }}">
</div>     
    @endforeach

        </div>
        </div>
 @endsection
