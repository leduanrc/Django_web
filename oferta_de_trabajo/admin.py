from django.contrib import admin
from . models import Trabajador

# Register your models here.
class TrabajadorAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'apellido', 'nacimiento', 'telefono', 'email', 'laboral', 'atendidas')

admin.site.register(Trabajador, TrabajadorAdmin)