@extends('employee.employeeLayout')
@section('content')


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
               @foreach ($services as $srv)
               <tr>
                    <th>{{$srv->srvname}}</th>
                    <td>
                    <a href="#" class="btn btn-link">Edit</a>
                    <a href="#" class="btn btn-link">Delete</a>
                    </td>
                 </tr>
                @endforeach
           </tbody>
            </table>
           </div>
            </div>
        </div>

@endsection
