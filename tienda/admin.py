from django.contrib import admin
from .models import CategoriaProducto, Producto

# Register your models here.
class CategoriaProductoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'imagen', 'created', 'updated')

class ProductoAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'categorias', 'imagen', 'precio', 'disponibilidad', 'created', 'updated')

admin.site.register(CategoriaProducto, CategoriaProductoAdmin)
admin.site.register(Producto, ProductoAdmin)

