from django.shortcuts import render, redirect
from django.views.generic import View
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout, authenticate
from django.contrib import messages
from oferta_de_trabajo.models import Trabajador
from tienda.models import CategoriaProducto, Producto
from carro.carro import Carro
from carro.context_processor import importe_total_carro
from comprobante_App.models import Comprobante

from .forms import ChangePasswordForm
from django.contrib.auth.decorators import login_required

from carro.views import limpiar_carro

# Create your views here.

def home(request):
    carro = Carro(request)
    workers = Trabajador.objects.all()
    return render(request, "home.html", {"workers": workers})

def admin_administrar(request):
    return render(request, "admin_administrar.html")

def services(request):
    categorias = CategoriaProducto.objects.all()
    return render(request, "services.html", {"categorias":categorias})

def store(request):
    productos = Producto.objects.all()
    return render(request, "store.html", {"productos":productos})

def contact(request):
    return render(request, "contact.html")

class signup(View):
    def get(self, request):
        form = UserCreationForm()
        return render(request, "sign_up.html", {"form": form})
    
    def post(self, request):
        form = UserCreationForm(request.POST)
        if form.is_valid():
            usuario = form.save()
            login(request, usuario)
            return redirect('home')
        else:
            for msg in form.error_messages:
                messages.error(request, form.error_messages[msg])
            return render(request, "sign_up.html", {"form": form})   
        
def signin(request):

        if request.method == "POST":
            form = AuthenticationForm(request, data = request.POST)
            if form.is_valid():
                nombre_usuario = form.cleaned_data.get("username")
                contra = form.cleaned_data.get("password")
                email = form.cleaned_data.get("email")
                usuario = authenticate(username = nombre_usuario, password = contra, email = email)
                if usuario is not None:
                    login(request, usuario)
                    return redirect('home')
                else:
                    messages.error(request, "Usuario no valido")
            else:
                messages.error(request, "Informacion incorrecta")

        form = AuthenticationForm()
        return render(request, "sign_in.html", {"form": form})
    
def signout(request):
    logout(request)
    return redirect('home')


def oferta_de_trabajos(request):
    workers = Trabajador.objects.all()
    return render(request, "oferta_de_trabajos.html", {"workers": workers})

def guardar_datos_trabajadores(request):
    if request.method == 'POST':
        nombre = request.POST.get('nombre')
        apellido = request.POST.get('apellido')
        nacimiento = request.POST.get('nacimiento')
        telefono = request.POST.get('telefono')
        email = request.POST.get('email')
        laboral = request.POST.get('laboral')

        trabajador = Trabajador(nombre=nombre, apellido=apellido, nacimiento=nacimiento, telefono=telefono, laboral=laboral, email=email)
        trabajador.save()

        return render(request, "home.html")
    return render(request, "oferta_de_trabajos.html")

def error_auth(request):
    return render(request, "error_auth.html")

def el_comprobante(request):
    return render(request, "el_comprobante.html")

def mis_compras(request):
    compras = Comprobante.objects.all()
    return render(request, "mis_compras.html", {"compras": compras})

def guardar_comprobante_compra(request):
    if request.method == 'POST':
        nombre = request.POST.get('nombre')
        targeta = request.POST.get('targeta')
        telefono = request.POST.get('telefono')
        producto = request.POST.get('producto')
        direccion = request.POST.get('direccion')
        total = request.POST.get('total')

        comprobante = Comprobante(nombre=nombre, targeta=targeta, telefono=telefono, producto=producto,
                                  direccion=direccion, total=total)
        comprobante.save()
        limpiar_carro(request)
        return render(request, "home.html")
    return render(request, "el_comprobante.html")

def change_password(request):
    if request.method == 'POST':
        form = ChangePasswordForm(request.user, request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = ChangePasswordForm(request.user)
    return render(request, 'change_password.html', {'form': form})

def forget_password(request):
    return render(request, "forget_password.html")




