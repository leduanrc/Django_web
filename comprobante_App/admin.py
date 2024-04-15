from django.contrib import admin
from .models import Comprobante

# Register your models here.
class ComprobanteAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'targeta', 'telefono', 'producto', 'direccion', 'total')

admin.site.register(Comprobante, ComprobanteAdmin)
    










