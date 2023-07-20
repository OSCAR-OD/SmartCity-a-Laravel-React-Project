@extends('employee.employeeLayout')
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
                            @method('PUT')
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
                                <label>srvnm</label>
                                <input type="text" name="srvname" class="form-control" placeholder="srvname" value="{{$service->srvname}}"/>
                                @if ($errors->has('srvname'))
                                    <p class="text-danger">{{ $errors->first('srvname') }}</p>
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
@endsection
