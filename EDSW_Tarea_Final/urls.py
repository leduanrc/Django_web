"""
URL configuration for EDSW_Tarea_Final project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from EDSW_Tarea_Final_App import views
from EDSW_Tarea_Final_App.views import signin, signup, signout

urlpatterns = [
    path('admin/', admin.site.urls, name="admin"),
    path('admin_administrar', views.admin_administrar, name='admin_administrar'),
    path('', views.home, name="home"),
    path('services', views.services, name="services"),
    path('store', views.store, name="store"),
    path('el_comprobante', views.el_comprobante, name="el_comprobante"),
    path('guardar_comprobante_compra', views.guardar_comprobante_compra, name="guardar_comprobante_compra"),
    path('mis_compras', views.mis_compras, name="mis_compras"),
    path('carro/', include('carro.urls')),
    path('contact', views.contact, name="contact"),
    path('sign_up', signup.as_view(), name="sign_up"),
    path('sign_in', signin, name="sign_in"),
    path('signout', signout, name="signout"),
    path('oferta_de_trabajos',views.oferta_de_trabajos, name="oferta_de_trabajos"),
    path('guardar_datos_trabajadores',views.guardar_datos_trabajadores, name="guardar_datos_trabajadores"),
    path('error_auth/', views.error_auth, name="error_auth"),
    path('change_password/', views.change_password, name='change_password'),
    path('forget_password', views.forget_password, name='forget_password'),
]

urlpatterns+=static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)