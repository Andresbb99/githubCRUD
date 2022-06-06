function eliminar(id){
	swal({
		  title: "Estas Seguro de Eliminar?",
		  text: "Una vez eliminado ya no se podra recuperar!",
		  icon: "warning",
		  buttons: true,
		  dangerMode: true,
		})
		.then((ok) => {
		  if (ok) {
			$.ajax({
				url:"/eliminar/"+id,
				success: function(res){
					console.log(res);
				}
			});
		    swal("Poof! El usuario ha sido eliminado", {
		      icon: "success",
		    }).then((ok)=>{
				if(ok){
					location.href="/listar";
				}
		});
		  } else {
		    swal("No se ha eliminado ningun registro!");
		  }
		});
}