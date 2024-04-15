from django.shortcuts import render, redirect
from tienda.models import Producto
from .carro import Carro

# Create your views here.
def agregar_producto(request, producto_id):
    carro=Carro(request)
    producto=Producto.objects.get(id=producto_id)
    carro.agregar(producto=producto)
    return redirect("store")

def eliminar_producto(request, producto_id):
    carro=Carro(request)
    producto=Producto.objects.get(id=producto_id)
    carro.eliminar(producto=producto)
    return redirect("store")

def restar_producto(request, producto_id):
    carro=Carro(request)
    producto=Producto.objects.get(id=producto_id)
    carro.restar_producto(producto=producto)
    return redirect("store")

def limpiar_carro(request):
    carro=Carro(request)
    carro.limpiar_carro()
    return redirect("store")

