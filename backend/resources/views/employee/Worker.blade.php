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

                        <form action="" method="post">
                            @csrf
                            @method('post')
                            <!--
                            <div class="form-group">
                                <label>Service Location</label>
                                <input type="text" name="servlocation" class="form-control" placeholder="Service Location" />
                                @if ($errors->has('email'))
                                    <p class="text-danger">{{ $errors->first('email') }}</p>
                                @endif
                            </div>
                             -->
                        
                            <div class="form-group">
                                <label>worker name</label>
                                <input type="text" name="wname" class="form-control" placeholder="worker name" />
                                @if ($errors->has('wname'))
                                    <p class="text-danger">{{ $errors->first('srvname') }}</p>
                                @endif
                            </div>
                            <div class="form-group">
                                <label>worker email</label>
                                <input type="text" name="email" class="form-control" placeholder="worker email" />
                                @if ($errors->has('email'))
                                    <p class="text-danger">{{ $errors->first('email') }}</p>
                                @endif
                            </div>
                            <div class="form-group">
                                <label>service name</label>
                                <input type="text" name="srvnam" class="form-control" placeholder="worker service" />
                                @if ($errors->has('srvnam'))
                                    <p class="text-danger">{{ $errors->first('srvnam') }}</p>
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
    </div>

    <div class="container">
      <div class="row">
       <div class="col-md-4 offset-md-4">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">name</th>
                </tr>
               </thead>
               <tbody>
               @foreach ($service as $srv)
               <tr>
                    <th>{{$srv->srvname}}</th>
                    <td>
                    <a href="{{url('/editServices', $srv->id)}}" class="btn btn-link">Edit</a>
                    <a href="{{url('/deleteServices', $srv->id)}}" class="btn btn-link">Delete</a>
                    </td>
                 </tr>
                @endforeach
           </tbody>
            </table>
           </div>
            </div>
        </div>

 @endsection
