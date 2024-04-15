def importe_total_carro(request):
    total=0
    if request.user.is_authenticated or request.user.is_superuser:
        for key, value in request.session["carro"].items():
            total=total+float(value["precio"])
    else:
        total="Debe autenticarse en la página."
   
    return {"importe_total_carro":total}
    
def cantidad_productos(request):
    cantidad_productos=0
    if request.user.is_authenticated or request.user.is_superuser:
        for key, value in request.session["carro"].items():
            cantidad_productos=cantidad_productos+value["cantidad"]
    else:
        cantidad_productos="Debe autenticarse en la página."
   
    return {"cantidad_productos":cantidad_productos}
    